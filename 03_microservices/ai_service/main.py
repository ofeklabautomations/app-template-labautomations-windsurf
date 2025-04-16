from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/summarize")
async def summarize(request: Request):
    # Placeholder AI stub
    data = await request.json()
    return JSONResponse({"summary": "This is a placeholder summary."})
