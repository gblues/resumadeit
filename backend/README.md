# Setup

1. Copy `.env.template` to '.env'
2. Set up a Postgres instance

   Instructions below are for using Docker to run postgres. Other installation methods are at your own discretion. If
   you roll your own postgres, you'll likely need to update the `.env` file accordingly.

    ```shell
    # First, pull down the latest postgres image for postgres 15
    docker pull postgres:15
    # The volume will be used to store persistent data
    docker volume create resumadeit-volume
    # Now tell docker to automatically fire up a postgres container. If you use a different password, you'll need to
    # remember it when setting up your .env file
    docker run \ 
      --name resumadeit_db \ 
      -p 5432:5432 \
      -v resumadeit-volume:/var/lib/postgresql/data \
      -e POSTGRES_PASSWORD=passphrase \
      -d --restart always \
      postgres:15
    ```
