from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
import os

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/webhook")
async def stripe_webhook(request: Request):
    # TODO: Verify Stripe signature and update Supabase subscriptions
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature", "")
    # ...verify and handle event...
    return JSONResponse({"received": True})
