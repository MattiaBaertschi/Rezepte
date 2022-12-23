from fastapi import fastapi
import uvicorn


app = FastAPI()

DB = []

@app.get("/rezepte/{id}")
def foo(a, b):
    return {"foo": 42}


if __name__ == "__main__":
    uvicorn.run(app, "localhost", port=8700)