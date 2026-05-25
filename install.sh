#!/bin/bash

docker compose up -d

# install back-end dependencies
# docker exec -ti cp-back-end php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
# docker exec -ti cp-back-end php composer-setup.php
# docker exec -ti cp-back-end php -r "unlink('composer-setup.php');"
# docker exec -ti cp-back-end sh -c "mv composer.phar /usr/local/bin/composer && chmod a+x /usr/local/bin/composer"
# docker exec -ti cp-back-end sh -c "cd /var/www && composer install"
# docker exec -ti cp-back-end chmod a+rwX /var/www -R

# front-end dependencies are installed when the container is started