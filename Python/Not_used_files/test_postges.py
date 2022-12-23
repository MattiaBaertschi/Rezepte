from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy_utils import database_exists, create_database


postgresql = {'pguser': 'postgres',
'pgpassword': 'Miauzamba1',
'pghost': 'localhost',
'pgport': 5432,
'pgdb': 'Rezepte'
}


enginge = create_engine((f"postgresql://{postgresql['pguser']}:{postgresql['pgpassword']}@{postgresql['pghost']}:{postgresql['pgport']}/{postgresql['pgdb']}"), pool_size=50, echo = False)
enginge.url

