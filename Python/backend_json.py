# Import fürs Lesen des Json-Files
import json

# Imports für Rest API Schnittstelle
import uvicorn
from fastapi import FastAPI

#---------------------------------------------------------------------------------------------------------------#
# Lesen und Importieren des JSON-Files mit Rezepten


with open('test.json',encoding='utf-8') as f:
    data = json.load(f)                                    #json wird als data mit typ dict importiert


#---------------------------------------------------------------------------------------------------------------#
# Rest API

app = FastAPI()


# Gewünschte Rezepte über die API freigeben
@app.get("/")
async def root() :
    return data

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, root_path="/dev/")
