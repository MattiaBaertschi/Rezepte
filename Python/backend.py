# Imports für SQLite Schnittstelle
import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy import text

# Imports für Rest API Schnittstelle
import uvicorn
from fastapi import FastAPI



# Schnittstelle SQLite Datenbank
engine = sqlalchemy.create_engine('sqlite+pysqlite:///mydatabase.db',echo=True, future=True)


with engine.connect() as conn:
   
    result = conn.execute(text("SELECT * FROM einheiten"))
    test_json = {}
    for row in result:
        test_json[row.ideinheit] = row.einheit

    print(test_json)


    conn.commit()


# Rest API
app = FastAPI()

test_json = {
    "Apfelkuchen": {
        "Zutaten und Mengen": [["Mehl","1kg"],["Wasser"," 1L"],["Zucker"," 1KG"],["Apfel"," 5 Stück"]],
        "Geräte": ["Backofen","Cakeform","Küchenmaschiene"],
        "Schritte": {
            "Schritt 1:": "Das ist der erste Schritt",
            "Schritt 2:": "Das ist der zweite Schritt",
            "Schritt 3:": "Das ist der dritte Schritt"
        }
    },
    "Pizza": {
        "Zutaten und Mengen": [["Mehl","1kg"],["Hefe","2 Stück"],["Tomatensauce"," 1L"],["Mozerella"," 5 Stück"]],
        "Geräte": ["Backofen","Backblech","Bachpapier"],
        "Schritte": {
            "Schritt 1:": "Das ist der erste Schritt",
            "Schritt 2:": "Das ist der zweite Schritt",
            "Schritt 3:": "Das ist der dritte Schritt",
            "Schritt 97:": "Das ist der siebenundneunzigste Schritt",
            "Schritt 98:": "Das ist der achtundneunzigste Schritt",
            "Schritt 99:": "Das ist der neunundneunziggste Schritt"
        }
    },
    "Blody Mary": {
        "Zutaten und Mengen": [["Alkohol","beliebig"],["Tomatensauce"," 1L"],["Zucker"," 100 Gramm"]],
        "Geräte": ["Mixer"],
        "Schritte": {
            "Schritt 1:": "Das ist der einzige Schritt"
        }
    }   
}


@app.get("/")
async def root() :
    return test_json["Apfelkuchen"]["Zutaten und Mengen"]

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, root_path="/dev")

