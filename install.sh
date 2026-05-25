#!/bin/bash

docker compose up -d

# install backend dependencies
# docker exec -ti cp-backend php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
# docker exec -ti cp-backend php composer-setup.php
# docker exec -ti cp-backend php -r "unlink('composer-setup.php');"
# docker exec -ti cp-backend sh -c "mv composer.phar /usr/local/bin/composer && chmod a+x /usr/local/bin/composer"
# docker exec -ti cp-backend sh -c "cd /var/www && composer install"
# docker exec -ti cp-backend chmod a+rwX /var/www -R

# frontend dependencies are installed when the container is started