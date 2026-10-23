from fastapi import FastAPI, HTTPException
from sqlalchemy import text,func
from sqlalchemy.exc import SQLAlchemyError
from app.database import engine

from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from app.models import Registration
from app.schemas import RegistrationCreate, RegistrationResponse

from app.models import Base
from app.database import engine

from fastapi import Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials 
import jwt

from app.security import JWT_SECRET_KEY, JWT_ALGORITHM


from pydantic import BaseModel
from app.security import(ADMIN_USERNAME,
                         ADMIN_PASSWORD_HASH,
                         verify_password,
                         create_access_token,
                         )



app = FastAPI(title="SOLACE ACADEMY API")


app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173"],
                   allow_credentials= True, 
                   allow_methods=["*"], 
                   allow_headers=["*"])

bearer_scheme = HTTPBearer()
def get_current_admin(
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme),
):
    token = credentials.credentials

    try:
        payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=[JWT_ALGORITHM],)
        username = payload.get("sub")

        if not username or username != ADMIN_USERNAME:
              raise HTTPException(
                status_code=401,
                detail="Invalid authentication credentials",
            )

        return username

    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token",
        )

Base.metadata.create_all(bind=engine)



@app.get("/")
def home():
    return {"message": "Welcome to SOLACE ACADEMY API"}

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/db-check")
def check_db():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

            return {"database": "connected"}
    except SQLAlchemyError:
        raise HTTPException(status_code=503, detail="Database connection failed")

@app.post("/registrations", response_model=RegistrationResponse, status_code= 201)
def create_registration(registration: RegistrationCreate):
    try:
        with Session(engine) as session:
            new_registration = Registration(**registration.model_dump())
            session.add(new_registration)
            session.commit()
            session.refresh(new_registration)

            return new_registration
    except SQLAlchemyError:
        raise HTTPException(status_code= 500, detail="could not save registration")

@app.get("/registrations", response_model = list[RegistrationResponse])

def get_registrations(current_admin: str = Depends(get_current_admin),):
    with Session(engine) as session:
        registrations = session.query(Registration).order_by(Registration.id.desc()).all()
        return registrations


class AdminLogin(BaseModel):
    username: str
    password: str

@app.post("/admin/login")
def admin_login(credentials: AdminLogin):
    if not ADMIN_USERNAME or not ADMIN_PASSWORD_HASH:
        raise HTTPException(
            status_code=500, detail="Admin credentials are not configured",
        )

    if (credentials.username != ADMIN_USERNAME or not verify_password(credentials.password, ADMIN_PASSWORD_HASH,)):
        raise HTTPException(status_code=401, detail="Invalid username or password",)

    token = create_access_token(credentials.username)

    return{ "access_token": token,
           "token_type": "bearer",}


@app.get("/admin/statistics")
def get_admin_statistics(
    current_admin: str = Depends(get_current_admin),
):
    with Session(engine) as session:
        # Count all registrations
        total = session.query(
            func.count(Registration.id)
        ).scalar() or 0

        # Count registrations for each class
        class_results = (
            session.query(
                Registration.class_level,
                func.count(Registration.id),
            )
            .group_by(Registration.class_level)
            .all()
        )

        # Count registrations for each subject
        subject_results = (
            session.query(
                Registration.subject,
                func.count(Registration.id),
            )
            .group_by(Registration.subject)
            .all()
        )

        return {
            "total_registrations": total,
            "registrations_by_class": [
                {
                    "class_level": class_level,
                    "count": count,
                }
                for class_level, count in class_results
            ],
            "registrations_by_subject": [
                {
                    "subject": subject,
                    "count": count,
                }
                for subject, count in subject_results
            ],
        }
