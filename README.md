# Proyecto Node-Mongo-Dockerfile-DockerCompose

Este proyecto utiliza Node.js, MongoDB y Docker Compose para levantar una API.

## Requisitos

- Docker
- Docker Compose

## Instrucciones de uso

1. Clona este repositorio:

    ```bash
    git clone https://github.com/cristianA123/Docker-Compose-Node-MongoDb.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd Docker-Compose-Node-MongoDb
    ```

3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias. Puedes utilizar el archivo `.env.example` como referencia.

4. Ejecuta el siguiente comando para levantar los contenedores de Docker:

    ```bash
    docker-compose up
    ```

5. La API estará disponible en `http://localhost:4000/api/mode`. Puedes probarla utilizando herramientas como Postman o cURL.

