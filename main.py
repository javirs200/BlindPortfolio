from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import os

app = FastAPI()

# Mount static files for assets, JS, and CSS
app.mount("/assets", StaticFiles(directory="www/assetts"), name="assets")
app.mount("/static", StaticFiles(directory="www"), name="static")

# Serve index.html from www as the homepage
@app.get("/")
async def root():
    return FileResponse("www/index.html")

# Serve script.js and stiles.css from www directory
@app.get("/script.js")
async def script():
    return FileResponse("www/script.js")

@app.get("/stiles.css")
async def styles():
    return FileResponse("www/stiles.css")