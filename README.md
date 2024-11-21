# Django_Template

## ☑️ Prerequisites

- Python 
- PostgreSQL
- Redis (for Celery)

## ⚙️️ Setup Instructions
 Local Environment by docker

 ```
 docker compose up --build
 ```

 ### to create super user
 ```
 $ docker exec -it django_template-api-1 sh ($ docer ps   # to get container name)
 $ python manage.py migrate
 $ python manage.py createsuperuser
```

### setup pgAdmin
```
 http://localhost:5050
 Right click on server -> Register -> Server

 # General
 Name: <Server_Name>

 # Connection
 Host name/address: db
 port: 5432
 username: postgres_user
 password: postgrs_user_password
```
