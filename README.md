# node-pug-docker-compose

This is my starter kit to start using a Node JS (Express Pug Project) with Docker-compose.

## Docker

`docker run` with the following ENV vars:

```
PIHOLE_API_KEY=123456789009123843029482
PIHOLE_URL=http://pihole:8080
```
# Updating Image in Docker Compose on Qnap Container Station

```
cd /share/Container/container-station-data/application/your-app-name
docker-compose pull
docker-compose up --build -d
```

