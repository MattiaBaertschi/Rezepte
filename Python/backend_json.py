# Import fürs Lesen des Json-Files
import json

# Imports für Rest API Schnittstelle
import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

#---------------------------------------------------------------------------------------------------------------#
# Lesen und Importieren des JSON-Files mit Rezepten


with open('rezepte.json',encoding='utf-8') as f:
    data = json.load(f)                                    #json wird als data mit typ dict importiert


#---------------------------------------------------------------------------------------------------------------#
# Rest API

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://vm4.sourcelab.ch"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Gewünschte Rezepte über die API freigeben
@app.get("/getrecipes")
async def getRecipes() :
    return data

# Neue Rezepte einfügen
@app.post("/postrecipes")
async def postRecipes(info : Request) :
    req_info = await info.json()
    new_recipe = req_info['input']
    data.update(new_recipe)
    print(data)

    with open("rezepte.json", "w") as jsonFile:
        json.dump(data, jsonFile)

    return{
        "status" : "SUCCESS",
        "data" : new_recipe

}
    
@app.get("/")
async def getRecipes() :
    return {"this is a test"}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)




    