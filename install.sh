#!/bin/bash

[ -f ".env" ] || { echo "First, please copy .env.example to .env and update values if needed" >&2; exit 1; }

docker compose up -d

# install back-end dependencies
docker exec -ti laravel-daniel-backend-1 sh -c "cd /var/www/backend && composer install"
docker exec -ti laravel-daniel-backend-1 chmod a+rwX /var/www -R

# front-end dependencies are installed when the container is started