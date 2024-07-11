#!/bin/sh

if [ "$DATABASE" = "mysql" ]
then
    echo "Waiting for MySQL..."

    while ! mysqladmin ping -h"$SQL_HOST" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" --silent; do
      sleep 0.1
    done

    echo "MySQl started"
fi

# python manage.py flush --no-input
# python manage.py migrate

exec "$@"
