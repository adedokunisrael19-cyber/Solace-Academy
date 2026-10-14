from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

from sqlalchemy import String,Integer

class Base(DeclarativeBase):
    pass

class Registration(Base):
    __tablename__ = "registration"
    id :Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    parent_name: Mapped[str] = mapped_column(String(100))
    email: Mapped[str] = mapped_column(String(255), index=True)
    phone: Mapped[str] = mapped_column(String(20))
    child_name: Mapped[str] = mapped_column(String(100))
    child_age: Mapped[int] = mapped_column(Integer)
    class_level: Mapped[int] = mapped_column(String(20))
    subject: Mapped[str] = mapped_column(String(30))


