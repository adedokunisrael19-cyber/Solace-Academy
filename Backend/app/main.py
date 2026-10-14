from fastapi import FastAPI, HTTPException
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError
from app.database import engine

from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from app.models import Registration
from app.schemas import RegistrationCreate, RegistrationResponse

from app.models import Base
from app.database import engine



app = FastAPI(title="SOLACE ACADEMY API")
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173"],
                   allow_credentials= True, 
                   allow_methods=["*"], 
                   allow_headers=["*"])

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