from sqlalchemy import create_engine
from sqlalchemy import Table, Column, Integer, String, MetaData

enginge = create_engine("sqlite:///mydatabase.db", echo=True)
meta = MetaData()

conn = enginge.connect()

cursor = conn.cursor()
cursor.execute(sql, multi=True)

trans = conn.begin()
conn.execute(
    #SQL Code von DB Designer
     '''CREATE TABLE schritte (
            idschritt NOT NULL,
            beschreibung VARCHAR NOT NULL,
            PRIMARY KEY(idschritt)
        );

        CREATE TABLE zutaten (
            idzutat NOT NULL,
            zutat VARCHAR NOT NULL,
            PRIMARY KEY(idzutat)
        );

        CREATE TABLE einheiten (
            ideinheit NOT NULL,
            einheiten VARCHAR NOT NULL,
            PRIMARY KEY(ideinheit)
        );

        CREATE TABLE rezepte (
            idrezept NOT NULL,
            rezeptname VARCHAR NULL,
            PRIMARY KEY(idrezept)
        );

        CREATE TABLE teilrezepte (
            idzubereitung NOT NULL,
            rezepte_idrezept INTEGER NOT NULL,
            zubereitungname VARCHAR NOT NULL,
            PRIMARY KEY(idzubereitung),
            FOREIGN KEY(rezepte_idrezept)
                REFERENCES rezepte(idrezept)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION
        );

        CREATE TABLE schritte_teilrezepte (
            idschritte_teilrezepte NOT NULL,
            schritte_idschritt INTEGER NOT NULL,
            teilrezepte_idzubereitung INTEGER NOT NULL,
            schrittnummer INTEGER NULL,
            PRIMARY KEY(idschritte_teilrezepte),
            FOREIGN KEY(teilrezepte_idzubereitung)
                REFERENCES teilrezepte(idzubereitung)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION,
            FOREIGN KEY(schritte_idschritt)
                REFERENCES schritte(idschritt)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION
        );

        CREATE TABLE zutaten_einheiten (
            idzutat_einheit NOT NULL,
            teilrezepte_idzubereitung INTEGER NOT NULL,
            einheiten_ideinheit INTEGER NOT NULL,
            zutaten_idzutat INTEGER NOT NULL,
            menge FLOAT NULL,
            PRIMARY KEY(idzutat_einheit),
            FOREIGN KEY(zutaten_idzutat)
                REFERENCES zutaten(idzutat)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION,
            FOREIGN KEY(einheiten_ideinheit)
                REFERENCES einheiten(ideinheit)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION,
            FOREIGN KEY(teilrezepte_idzubereitung)
                REFERENCES teilrezepte(idzubereitung)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION
        );
    '''
)

trans.commit()