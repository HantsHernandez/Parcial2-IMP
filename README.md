EJERCICIO 1

docker build -t parcial-api . 
docker run -d -p 3000:3000 parcial-api 

EJERCICiO 2

docker volume create db_data
docker run -d --name parcial-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=12345 -e POSTGRES_DB=parcial_db -v db_data:/var/lib/postgresql/data -p 5432:5432 postgres:15-alpine
docker exec -it parcial-db psql -U admin -d parcial_db

EJERCICO 3

docker compose build
docker compose up -d
