# Laravel Docker Template
A template for Laravel + MariaDB using Docker

# Requisites
 - A Linux system (WSL is probably fine)
 - Ports 9000 and 8123 should be available
 - Docker
 - An Internet connection

# App Install
 - Edit `front-end/.env` and replace `localhost` with the IP address for the machine running the app (only needed if the browser and the app live in distinct machines)
 - Run ./install.sh and wait a little
  
# Using the app
 - Make sure the containers are up and running: `docker ps` should list the containers `back-end` and `front-end`
 - If they're not up, `cd` to the project's root folder and run `docker compose up` to start
 - Open up your browser and hit the IP of the machine running the app under port 9000. For example, if you're running the app from your local machine, go to http://localhost:9000
