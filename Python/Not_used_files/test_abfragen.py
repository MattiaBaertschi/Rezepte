import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy import inspect



engine = sqlalchemy.create_engine('sqlite:///mydatabase.db',
             #check_samethread erlaubt mutithreading was standardmässig nicht geht
            connect_args={'check_samethread':False}
            )
           
conn = engine.connect()


class MyClass(Base):
    __table__ = Table('mytable', Base.metadata,
                    autoload=True, autoload_with=conn)