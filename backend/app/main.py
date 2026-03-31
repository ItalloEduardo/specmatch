from fastapi import FastAPI

from app.core.settings import settings


app = FastAPI(
    title="SpecMatch API",
    version="0.1.0",
    description="API para montagem e comparacao de setups gamer.",
)


@app.get("/health", tags=["health"])
def healthcheck() -> dict[str, str]:
    return {"status": "ok", "environment": settings.app_env}


@app.get("/", tags=["root"])
def root() -> dict[str, str]:
    return {"message": "SpecMatch API online"}
