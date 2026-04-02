#Eu estive aqui. Professor Rondineli
# SpecMatch

Plataforma web para montagem e comparacao de setups gamer. Permite cadastrar pecas de hardware (CPU, GPU, RAM, armazenamento, etc.), comparar especificacoes lado a lado e montar orcamentos personalizados.

## Stack

| Camada | Tecnologia |
|---|---|
| Frontend | React + TypeScript + Vite + Tailwind CSS |
| Backend | Python + FastAPI |
| Banco de dados | PostgreSQL |
| Storage | MinIO (S3-compatible) |
| Infra local | Docker Compose |

## Estrutura do projeto

```
specmatch/
├── frontend/          # SPA React (Vite + Tailwind)
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── backend/           # API FastAPI
│   ├── app/
│   │   ├── core/      # Configuracoes (settings, etc.)
│   │   └── main.py    # Entrypoint da API
│   ├── migrations/    # Scripts SQL de inicializacao
│   ├── Dockerfile
│   └── requirements.txt
├── docker-compose.dev.yml
├── .env.example
└── README.md
```

## Pre-requisitos

- [Docker](https://docs.docker.com/get-docker/) e Docker Compose
- [Node.js](https://nodejs.org/) >= 20 (para dev local do frontend)
- [Python](https://www.python.org/) >= 3.12 (para dev local do backend)

## Como rodar

1. Clone o repositorio e copie o arquivo de ambiente:

```powershell
Copy-Item ".env.example" ".env"
```

2. Preencha as variaveis no `.env` (usuario/senha do Postgres, credenciais do MinIO, etc.).

3. Suba os servicos com Docker Compose:

```powershell
docker compose -f docker-compose.dev.yml up -d --build
```

4. Verifique se tudo subiu:

```powershell
docker compose -f docker-compose.dev.yml ps
```

## Endpoints disponiveis

| URL | Descricao |
|---|---|
| http://localhost:8000 | API root |
| http://localhost:8000/health | Healthcheck do backend |
| http://localhost:8000/docs | Swagger UI (documentacao interativa) |
| http://localhost:5173 | Frontend (quando rodando localmente) |
| http://localhost:9001 | Console do MinIO |

## Portas padrao

| Servico | Porta |
|---|---|
| Backend (FastAPI) | 8000 |
| Frontend (Vite) | 5173 |
| PostgreSQL | 5435 |
| MinIO API | 9000 |
| MinIO Console | 9001 |

Todas as portas sao configuraveis via `.env`.

## Dev local (sem Docker)

**Frontend:**

```powershell
Set-Location frontend
npm install
npm run dev
```

**Backend:**

```powershell
Set-Location backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```
