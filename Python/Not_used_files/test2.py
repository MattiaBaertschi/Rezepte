from sqlalchemy import create_engine, MetaData, Table
from sqlalchemy.orm import mapper, sessionmaker

class Bookmarks(object):
    pass

#----------------------------------------------------------------------
def loadSession():
    """"""    
    dbPath = 'mydatabase.db'
    engine = create_engine('sqlite:///%s' % dbPath, echo=True)
    
    metadata = MetaData(engine)
    moz_bookmarks = Table('moz_bookmarks', metadata, autoload=True)
    mapper(Bookmarks, moz_bookmarks)
    
    Session = sessionmaker(bind=engine)
    session = Session()
    return session

if __name__ == "__main__":
    session = loadSession()
    res = session.query(Bookmarks).all()
    res[1].title