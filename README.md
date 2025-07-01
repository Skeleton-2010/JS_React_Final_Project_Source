# Weather Forecast Application

<div align="center">
  <img src="public/img/ForecastLogoBig.png" alt="Weather Forecast Logo" width="200"/>
  
  <br/>
  <br/>
  
  <img src="public/img/clouds.png" alt="Weather Banner" width="100%"/>
</div>

## Опис проекту

Weather Forecast - це веб-додаток для перегляду погодних умов у різних містах світу. Додаток розроблено з використанням React та надає користувачам можливість отримувати актуальну інформацію про погоду, включаючи температуру, вологість, видимість, тиск та швидкість вітру.

## Іконки погодних умов

<div align="center">
  <img src="public/img/01d.png" alt="Clear Sky Day" width="50"/>
  <img src="public/img/02d.png" alt="Few Clouds" width="50"/>
  <img src="public/img/03d.png" alt="Scattered Clouds" width="50"/>
  <img src="public/img/04d.png" alt="Broken Clouds" width="50"/>
  <img src="public/img/09d.png" alt="Shower Rain" width="50"/>
  <img src="public/img/10d.png" alt="Rain" width="50"/>
  <img src="public/img/11d.png" alt="Thunderstorm" width="50"/>
  <img src="public/img/13d.png" alt="Snow" width="50"/>
  <img src="public/img/50d.png" alt="Mist" width="50"/>
</div>

## Функціональність

- 🔍 Пошук погоди за містом
- 📍 Збереження улюблених локацій
- 🌡️ Детальна інформація про погодні умови:
  - Видимість
  - Вологість
  - Швидкість вітру
  - Температура
  - Атмосферний тиск
- 📰 Стрічка новин
- 🖼️ Галерея зображень природи
- 👤 Система авторизації користувачів

## Технології

- React 18.3.1
- Redux для управління станом
- React Router для навігації
- Axios для HTTP-запитів
- Styled Components для стилізації
- GitHub Pages для хостингу

## Встановлення та запуск

1. Клонуйте репозиторій:
\`\`\`bash
git clone https://github.com/skeleton-2010/JS_React_Final_Project_Source.git
\`\`\`

2. Встановіть залежності:
\`\`\`bash
npm install
\`\`\`

3. Запустіть проект локально:
\`\`\`bash
npm start
\`\`\`

4. Для збірки проекту:
\`\`\`bash
npm run build
\`\`\`

5. Для розгортання на GitHub Pages:
\`\`\`bash
npm run deploy
\`\`\`

## Структура проекту

```
├── public/             # Публічні ресурси
│   └── img/           # Зображення та іконки
├── src/
│   ├── components/    # React компоненти
│   │   ├── AppFooter/      # Футер додатку
│   │   ├── AppHeader/      # Хедер додатку
│   │   ├── ImageDisplay/   # Компонент галереї
│   │   ├── LocalWeatherDisplay/  # Відображення локальної погоди
│   │   ├── NewsListing/    # Компонент новин
│   │   ├── SignUpPage/     # Сторінка реєстрації
│   │   ├── WeatherPage/    # Основна сторінка погоди
│   │   └── WeatherSearch/  # Компонент пошуку погоди
│   ├── redux/        # Redux конфігурація
│   │   ├── actions.js      # Action creators
│   │   ├── constants.js    # Constants
│   │   ├── reducer.js      # Reducers
│   │   ├── selectors.js    # Selectors
│   │   └── store.js        # Store configuration
│   └── services/     # Сервіси API
```

## API

Додаток використовує наступні API:
- OpenWeather API для погодних даних
- NewsAPI для отримання новин
- Pixabay API для зображень

## Особливості реалізації

- Використання HashRouter для коректної роботи на GitHub Pages
- Зберігання улюблених локацій в Redux з персистентністю
- Адаптивний дизайн для різних розмірів екрану
- Обробка помилок та стани завантаження
- Оптимізовані зображення в публічній директорії

## Розгортання

Проект автоматично розгортається на GitHub Pages при виконанні команди \`npm run deploy\`. 
Живу версію можна переглянути за посиланням: [Weather Forecast App](https://skeleton-2010.github.io/JS_React_Final_Project_Source/)

## Ліцензія

MIT License

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)