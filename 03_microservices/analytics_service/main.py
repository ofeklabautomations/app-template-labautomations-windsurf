from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
import requests
import os

POSTHOG_API = os.getenv("POSTHOG_API", "https://app.posthog.com/capture")
POSTHOG_KEY = os.getenv("POSTHOG_KEY", "")

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/event")
async def forward_event(request: Request):
    event = await request.json()
    # Forward event to PostHog
    resp = requests.post(
        POSTHOG_API,
        json=event,
        headers={"Authorization": f"Bearer {POSTHOG_KEY}"}
    )
    return JSONResponse({"posthog_status": resp.status_code})
