import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy import text

engine = sqlalchemy.create_engine('sqlite+pysqlite:///mydatabase.db',echo=True, future=True)

var = "testvar"
var2 = "testvar2"

with engine.connect() as conn:
    # conn.execute(
    #     text("INSERT INTO rezepte (rezeptname) VALUES (:rezeptname)"),
    #        [{"rezeptname": "liter"}],
    # )
    # conn.execute(text("DROP TABLE IF EXISTS some_table"))
    # conn.execute(text("CREATE TABLE some_table (x int, y int)"))
    # conn.execute(
    #     text("INSERT INTO some_table (x, y) VALUES (:x, :y)"),
    #        [{"x": 1, "y": 1}, {"x": 2, "y": 4}],
    # )
    #conn.execute(text("DROP TABLE some_table"))
    result = conn.execute(text("SELECT * FROM einheiten"))
    for row in result:
        print(f"einheit: {row.einheit} {row.ideinheit}")


    conn.commit()
