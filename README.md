# Desafio Docker Compose: Servidor Web Apache com HTML

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## 📖 Sobre o Projeto

Este projeto demonstra como utilizar o **Docker Compose** para criar e gerenciar um ambiente de desenvolvimento web simples e portável. O objetivo é servir uma aplicação web estática (HTML, CSS e JS) utilizando um container do servidor **Apache HTTP Server (httpd)**.

Esta abordagem elimina a necessidade de instalar e configurar o Apache diretamente na máquina local, permitindo que qualquer pessoa com Docker execute o projeto com um único comando, garantindo que ele funcione da mesma forma em qualquer ambiente.

---

## 🐳 O Que é Docker e Docker Compose?

-   **Docker:** É uma plataforma que permite "empacotar" uma aplicação e todas as suas dependências (como o servidor Apache) em uma "caixa" isolada chamada **container**.

-   **Docker Compose:** É uma ferramenta para definir e executar aplicações Docker. Neste projeto, usamos o Docker Compose para ler um arquivo de "receita" (`docker-compose.yml`) que diz ao Docker exatamente como construir e rodar nosso container do servidor Apache.

---

## 📂 Estrutura de Arquivos do Projeto

O projeto está organizado da seguinte forma:

---

## 🛠️ O Arquivo `docker-compose.yml` Explicado

Este arquivo é o coração do projeto. Ele diz ao Docker como construir nosso ambiente.

```yaml
services:
  meu_servidor:
    image: httpd:2.4
    container_name: meu-servidor-apache
    ports:
      - "8080:80"
    volumes:
      - ./app:/usr/local/apache2/htdocs/

🚀 Como Executar o Projeto
Pré-requisitos
Docker Desktop instalado e em execução na sua máquina. Você pode baixá-lo aqui: Docker Desktop.

Git para clonar o repositório.

Passo a Passo
Clone o repositório:

Bash

git clone <URL_DO_SEU_REPOSITORIO>
Navegue até a pasta do projeto:

Bash

cd nome-da-pasta-do-projeto
Suba o container com Docker Compose:

Bash

docker compose up -d
(A flag -d significa "detached" e faz com que o container rode em segundo plano).

Acesse a aplicação:

Abra seu navegador e acesse a URL: http://localhost:8080

Como Parar o Container
Para parar e remover o container, navegue até a pasta do projeto no terminal e execute:

Bash

docker compose down

👨‍💻 Autor
Feito por Tarciso Ferreira.
