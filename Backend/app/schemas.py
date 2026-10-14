from pydantic import BaseModel, EmailStr


class RegistrationCreate(BaseModel):
    parent_name: str
    email: EmailStr
    phone: str
    child_name: str
    child_age: int
    class_level: str


class RegistrationResponse(RegistrationCreate):
    id: int

    model_config = {"from_attributes" : True}
