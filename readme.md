# 🌤️ Weather App

A simple web-based weather application that allows users to fetch and display current weather information for any city using the OpenWeatherMap API.

## 🚀 Features

- Search weather by city name  
- Displays:
  - City name  
  - Temperature in Celsius  
  - Weather description (e.g. "clear sky")  
- Responsive design for mobile and desktop  
- Easy to customize or extend  

## 🛠️ Technologies Used

- HTML5  
- CSS3 (with responsive design using media queries)  
- JavaScript (ES6+)  
- [OpenWeatherMap API](https://openweathermap.org/api)  

## 📂 Project Structure

```
weather-app/
│
├── index.html        # Main HTML file
├── styles.css        # App styling
├── script.js         # JS logic for API interaction and UI rendering
└── README.md         # Project documentation
```

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/STEVLITE-29/WeatherApp.git
cd weather-app
```

### 2. Open `index.html` in a browser

You can simply open the `index.html` file directly, or serve it using a live server:

```bash
# With Live Server (VSCode extension)
Right-click index.html → Open with Live Server
```

## 🔑 Setup Your Own API Key

This app uses a sample OpenWeatherMap API key, but it's recommended to use your own.

1. Sign up at [https://openweathermap.org](https://openweathermap.org)  
2. Generate an API key  
3. Replace the API key in `script.js`:

```js
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
);
```

## 📱 Responsive Design

The app includes media queries to ensure it looks good on all screen sizes — desktop, tablet, and mobile.

## 📄 License

MIT License — feel free to use and modify!

---

**Made with ❤️ using HTML, CSS & JavaScript**

---
