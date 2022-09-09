<h1 align="center">React-Online-Store</h1>

## Описание
Полноценный интернет магазин (Frontend + Backend). Осталось только реализовать корзину (backend), 
рейтинг(backend), удаление товаров(backend) и страницу для корзины(frontend)

### Используемые технологии
![HTML5](https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5&logoColor=html)
![CSS3](https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3&logoColor=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![REACT](https://img.shields.io/badge/-REACT-black?style=flat-square&logo=react&logoColor=react)
![NODEJS](https://img.shields.io/badge/-NodeJs-black?style=flat-square&logo=node.js&logoColor=node.js)

## Запуск проекта:

### Настройка сервера:

1. Создание базы данных Postgres SQL через pgAdmin4
   + Создать базу с названием online_store
   + После запуска сервера, появятся все таблицы
   + Нужно будет создать типы, бренды, девайсы и пользователей.



2. Перейти в паку server в терминале
```
  cd server
```

3. Установить зависимости
```
  npm install
```

4. Скопировать env  
```
  copy example.env .env
```

5. Для запуска сервера
```
  npm run dev
```

### Настройка клиента:

1. Перейти в паку server в терминале
```
  cd client
```

2. Установить зависимости
```
  npm install
```

3. Скопировать env
```
  copy example.env .env
```

4. Для запуска клиента
```
  npm start
```
