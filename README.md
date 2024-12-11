### Overview

This project is a news aggregator website built with React.js. The application pulls articles from various sources and displays them in a clean, easy-to-read format. Users can search for articles by keyword, filter results by date, category, and source, and create a personalized news feed. The application is mobile-responsive and optimized for viewing on various devices.

### Features

1. Article Search and Filtering
Users can search for articles by entering keywords.
Filtering options are available by date, category, and source.
2. Personalized News Feed
Users can customize their news feed by selecting preferred sources, categories, and authors.
3. Mobile-Responsive Design
The website is optimized for both desktop and mobile devices.
4. Data Sources
The application uses the following data sources:

- NewsAPI: Provides access to a wide range of news articles from various sources.
- The Guardian API: Fetches articles from The Guardian.
- New York Times API: Retrieves articles from The New York Times.

### Technologies Used
- React.js: A JavaScript library for building user interfaces.
- Redux Toolkit: For state management.
- Axios: For making HTTP requests to fetch data from APIs.
- React Bootstrap: For UI components and styling.
- Docker: For containerizing the application.

### Project Structure
```
news-aggregator/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Error
│   │   │   ├── Error.jsx
│   │   ├── Loading
│   │   │   ├── index.jsx
│   │   │   ├── Loading.jsx
│   │   ├── NavBar
│   │   │   ├── NavBar.css
│   │   │   ├── NavBar.jsx
│   │   ├── News
│   │   │   ├── index.jsx
│   │   │   ├── News.css
│   │   │   ├── News.jsx
│   │   ├── NewsCard
│   │   │   ├── Details
│   │   │		│   ├── Details.css
│   │   │		│   ├── Details.jsx
│   │   │   ├── NewsCard.css
│   │   │   ├── NewsCard.jsx
│   │   ├── NoDataFound
│   │   │   ├── NoDataFound.css
│   │   │   ├── NoDataFound.jsx
│   │   ├── NoRouteFound
│   │   │   ├── NoRouteFound.jsx
│   │   ├── ScrollToTop
│   │   │   ├── ScrollToTop.jsx
│   │   ├── index.jsx
│   │   └── ...
│   │
│   ├── config/
│   │   ├── api.js
│   │   ├── config.js
│   │   └── ...
│   │
│   ├── images/
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── HomePage
│   │   │   ├── HomePage.jsx
│   │   ├── PersonalizedPage
│   │   │   ├── PersonalizedPage.jsx
│   │   └── ...
│   │
│   ├── store/
│   │   ├── slices/
│   │   │   ├── articlesSlice.js
│   │   └── store.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
│
├── .dockerignore
├── .env
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
└── ...
```

### Implementation Details
1. Search and Filtering
- SearchBar Component: Allows users to search articles by entering keywords. This triggers a search request to the selected data sources.
- FilterOptions Component: Users can filter articles based on categories, date ranges, and sources. This component interacts with Redux to update the filter criteria.

2. Personalized News Feed
- PersonalizedFeed Component: Displays a custom news feed based on user preferences such as preferred categories, sources, and authors. User preferences are stored in Redux and used to fetch and display relevant articles.

3. Mobile-Responsive Design
- Responsive Layout: The UI components are designed using React Bootstrap, ensuring the layout adjusts for different screen sizes. Media queries are used for custom styling on mobile devices.

4. API Integration
- api.js contains four different data sources newsAPI, guardianAPI, and nytAPI: These service file handle API requests to the respective data sources. It contains functions to fetch data, and convert all the data into normalize data which are used in Redux actions and components.

5. State Management
- Redux Toolkit: Used to manage the state of the application, including articles fetched, user preferences, and filter criteria. Redux slices (articlesSlice.js) are created to handle specific aspects of the state.
