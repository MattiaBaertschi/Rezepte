import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy import text
from sqlalchemy import insert

engine = sqlalchemy.create_engine('sqlite+pysqlite:///mydatabase.db',echo=True, future=True)


with engine.connect() as conn:
    conn.execute(
        einheiten.insert(), [
        {"a": 1, "b": 2, "c": 3},
        {"a": 2, "c": 4},
        {"a": 3, "b": 4, "c": 5},)
        ]

    conn.commit()

