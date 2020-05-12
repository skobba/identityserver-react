# IdenityServer4 with React Frontend

# docker-compose
## build only frontend
docker-compose build --no-cache frontend

## down ; build ; up
docker-compose down ; docker-compose build --no-cache ; docker-compose up -d

## down ; build ; up (only identityserver)
docker-compose down ; docker-compose build --no-cache identityserver ; docker-compose up -d

## -f
docker-compose -f spa/docker-compose.yml -f idp/docker-compose.yml up -d