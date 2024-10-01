from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import os

app = FastAPI()

# Serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Serve templates
@app.get("/", response_class=HTMLResponse)
async def read_index():
    with open(os.path.join("templates/index.html")) as f:
        return f.read()

@app.get("/about", response_class=HTMLResponse)
async def read_about():
    with open(os.path.join("templates/about.html")) as f:
        return f.read()

@app.get("/admin", response_class=HTMLResponse)
async def read_admin():
    with open(os.path.join("templates/admin.html")) as f:
        return f.read()

@app.get("/contact", response_class=HTMLResponse)
async def read_contact():
    with open(os.path.join("templates/contact.html")) as f:
        return f.read()

@app.get("/donation", response_class=HTMLResponse)
async def read_donation():
    with open(os.path.join("templates/donation.html")) as f:
        return f.read()

@app.get("/functions", response_class=HTMLResponse)
async def read_functions():
    with open(os.path.join("templates/functions.html")) as f:
        return f.read()

@app.get("/privacy", response_class=HTMLResponse)
async def read_privacy():
    with open(os.path.join("templates/privacy.html")) as f:
        return f.read()

@app.get("/registerschool", response_class=HTMLResponse)
async def read_registerschool():
    with open(os.path.join("templates/registerschool.html")) as f:
        return f.read()

@app.get("/student", response_class=HTMLResponse)
async def read_student():
    with open(os.path.join("templates/student.html")) as f:
        return f.read()

@app.get("/teacher", response_class=HTMLResponse)
async def read_teacher():
    with open(os.path.join("templates/teacher.html")) as f:
        return f.read()
