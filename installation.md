
# This is a simple steps how to run the project

1) **Importante dependencies to install and Docker Database**

   ```console
   yarn \
   docker-compose up -d \
   ```

2) **Running orm migrations (PRISMA)**
     ```console
    yarn prisma migrate deploy
   ```
3) **Running seed for initial users**
     ```console
   yarn prisma db seed
   ```
4) **Run the app**
     ```console
   yarn dev
   ```


## Warning!!!
> Docker and docker-compose need to be installed to run the database:



## Docker Documentation to install
    Docker: https://docs.docker.com/engine/install/ubuntu/

    Docker Compose: https://docs.docker.com/compose/install/
