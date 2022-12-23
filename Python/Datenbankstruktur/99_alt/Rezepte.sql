DROP TABLE IF EXISTS zutaten;
DROP TABLE IF EXISTS rezepte;
DROP TABLE IF EXISTS einheiten;
DROP TABLE IF EXISTS schritte;
DROP TABLE IF EXISTS teilrezepte;
DROP TABLE IF EXISTS zutaten_einheiten;


CREATE TABLE zutaten (
  idzutat INTEGER AUTOINCREMENT,
  zutat VARCHAR NOT NULL,
  PRIMARY KEY(idzutat)
);

CREATE TABLE rezepte (
  idrezept INTEGER AUTOINCREMENT,
  rezeptname VARCHAR NULL,
  PRIMARY KEY(idrezept)
);

CREATE TABLE einheiten (
  ideinheit INTEGER AUTOINCREMENT,
  einheit VARCHAR NOT NULL,
  PRIMARY KEY(ideinheit)
);

CREATE TABLE teilrezepte (
  idzubereitung INTEGER AUTOINCREMENT,
  rezepte_idrezept INTEGER NOT NULL,
  zubereitungname VARCHAR NOT NULL,
  PRIMARY KEY(idzubereitung),
  FOREIGN KEY(rezepte_idrezept)
    REFERENCES rezepte(idrezept)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE schritte (
  idschritt INTEGER AUTOINCREMENT,
  teilrezepte_idzubereitung INTEGER NOT NULL,
  schrittnummer INTEGER NULL,
  beschreibung VARCHAR NULL,
  PRIMARY KEY(idschritt),
  FOREIGN KEY(teilrezepte_idzubereitung)
    REFERENCES teilrezepte(idzubereitung)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE zutaten_einheiten (
  idzutat_einheit INTEGER AUTOINCREMENT,
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


