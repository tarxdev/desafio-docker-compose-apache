# 🚀 Como Executar o Projeto

## ✅ Pré-requisitos

- **[Docker Desktop](https://www.docker.com/products/docker-desktop/)** instalado e em execução na sua máquina.
- **Git** instalado para clonar o repositório.

---

## 📦 Passo a Passo

### 1. Clone o repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO>
```

### 2. Navegue até a pasta do projeto

```bash
cd nome-da-pasta-do-projeto
```

### 3. Suba o container com Docker Compose

```bash
docker compose up -d
```

> ℹ️ A flag `-d` significa "detached" e faz com que o container rode em segundo plano.

---

## 🌐 Acesse a aplicação

Abra o navegador e acesse: [http://localhost:8080](http://localhost:8080)

---

## 🛑 Como Parar o Container

Para parar e remover o container, execute:

```bash
docker compose down
```

---

## 👨‍💻 Autor

Feito com por **Tarciso Ferreira**
