CREATE TABLE rezepte (
  idrezept INTEGER NOT NULL AUTO_INCREMENT,
  rezeptname VARCHAR NOT NULL,
  beschreibung VARCHAR NULL,
  PRIMARY KEY(idrezept)
);

CREATE TABLE zutaten (
  idzutat INTEGER NOT NULL AUTO_INCREMENT,
  zutat VARCHAR NOT NULL,
  PRIMARY KEY(idzutat)
);

CREATE TABLE einheiten (
  ideinheit INTEGER NOT NULL AUTO_INCREMENT,
  einheiten VARCHAR NOT NULL,
  PRIMARY KEY(ideinheit)
);

CREATE TABLE küchengeräte (
  idküchengerät INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR NOT NULL,
  PRIMARY KEY(idküchengerät)
);

CREATE TABLE schritte (
  idschritt INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  küchengeräte_idküchengerät INTEGER UNSIGNED NOT NULL,
  rezepte_idrezept INTEGER NOT NULL,
  tittel VARCHAR NOT NULL,
  beschreibung VARCHAR NOT NULL,
  PRIMARY KEY(idschritt),
  FOREIGN KEY(rezepte_idrezept)
    REFERENCES rezepte(idrezept)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(küchengeräte_idküchengerät)
    REFERENCES küchengeräte(idküchengerät)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE zutaten_einheiten (
  idzutat_einheit INTEGER NOT NULL AUTO_INCREMENT,
  schritte_idschritt INTEGER UNSIGNED NOT NULL,
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
  FOREIGN KEY(schritte_idschritt)
    REFERENCES schritte(idschritt)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);


