# Базовый образ
FROM node:22.4.1

# Установка nodemon глобально
RUN npm install -g nodemon

# Создание и использование рабочей директории
WORKDIR /usr/src/app

# Копирование package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование исходного кода приложения
COPY . .

# Удаляем node_modules, если он был случайно скопирован
RUN rm -rf node_modules

# Устанавливаем снова зависимости внутри контейнера
RUN npm ci

# Установка переменной окружения для nodemon
ENV NODE_ENV=development

# Открытие порта для приложения
EXPOSE 3000

# Команда для запуска приложения с использованием nodemon
CMD ["nodemon", "src/index.ts"]