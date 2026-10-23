from pydantic import BaseModel, EmailStr, Field


class RegistrationCreate(BaseModel):
    parent_name: str = Field(..., min_length=2, max_length=50)
    email: EmailStr 
    phone: str
    child_name: str = Field(..., min_length=2, max_length=15)
    child_age: int 
    class_level: str


class RegistrationResponse(RegistrationCreate):
    id: int

    model_config = {"from_attributes" : True}
