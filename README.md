# Приложение по поиску книг

Используется Google Books API_KEY

Понадобиться прописать свой API KEY в функции getUrl, которая находиться в /src/utils/getUrl.js

Для запуска приложения в директории с проектом прописать:

### `yarn start`

Так же можно запустить с помощью docker-compose:

### `docker-compose -f docker-compose-dev.yml -d --build` - dev версия

### `docker-compose -f docker-compose-prod.yml -d --build` - prod версия

Или через docker сбилдить образы:

### `docker build -t dev-app -f Dockerfile.dev .` - dev версия

### `docker build -t prod-app -f Dockerfile.prod .` - prod версия

И соответственно запустить контейнер с собраным образом:

### `docker run dev-app -p 3000:3000 .` - dev версия

### `docker run prod-app -p 8080:80 .` - prod версия

В качестве образа OS в docker используется node:12.2.0-alpine
