build:
	docker compose build

build-no-cache:
	docker compose build --no-cache

npmi:
	./npm-i-docker.sh

start:
	docker-compose up -d

down:
	docker-compose down -v