### Overview

This project is a news aggregator website built with React.js. The application integrates multiple APIs to deliver articles from various sources, offering users a clean, intuitive, and mobile-responsive interface. Users can easily search for articles, filter results, and customize their news feed according to their preferences.

### Features

1. Article Search and Filtering

  - Search articles by entering keywords.
  - Filter results by:
    - Date
    - Category
    - Source

2. Personalized News Feed

  - Customize your feed by selecting:
    - Preferred sources
    - Categories
    - Authors

3. Mobile-Responsive Design

  - Fully optimized for both desktop and mobile devices to ensure a seamless user experience.

4. Data Sources

  - The application pulls articles from the following APIs:
    - NewsAPI: Access articles from a broad range of global sources.
    - The Guardian API: Fetch news from The Guardian.
    - New York Times API: Retrieve articles from The New York Times.

### Technologies Used
- React.js: For building the user interface.
- Redux Toolkit: To manage and simplify the application's state.
- Axios: For making HTTP requests and interacting with external APIs.
- React Bootstrap: To enhance the styling and UI components.
- Docker: For containerizing the application, ensuring easy deployment and scalability.

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
│   │   │       │   ├── Details.css
│   │   │       │   ├── Details.jsx
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

## Dockerization
### Dockerfile

The Dockerfile defines the steps to build the Docker image for the application.

# Step 1: Use Node.js for building the app
FROM node:18-alpine as builder

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the application source code
COPY . .

# Step 5: Build the Vite app
RUN npm run build

# Step 6: Use NGINX to serve the built files
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Step 7: Expose port 80 for HTTP traffic
EXPOSE 80

# Step 8: Start NGINX
CMD ["nginx", "-g", "daemon off;"]

## Docker Compose (Optional)
If using Docker Compose, the docker-compose.yml file simplifies running the application.
```
version: '3.8'
services:
  vite-app:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "5173:5173"
    command: ["npm", "run", "dev", "--", "--host"]
```
## Build and Run the Docker Container
1. Build the Docker Image: Open a terminal in the root directory of your project and run:

    `docker build -t news-aggregator .`

2. Run the Docker Container: To start a container from your image, run:
    `docker run -p 80:80 news-aggregator`

    If using Docker Compose, you can build and run the container with:
    `docker-compose up --build`

### Project Setup and Dockerization
1. Clone the Repository:

    git clone https://github.com/Sam8497/news-aggregator
    cd news-aggregator

2. Install Docker:

    Ensure Docker is installed on your machine. You can download it from Docker's official website.

3. Build the Docker Image:

    `docker build -t news-aggregator .`

4. Run the Docker Container:
    
    `docker run -p 80:80 news-aggregator`

    Alternatively, if you are using Docker Compose, run:
    
    `docker-compose up --build`

5. Access the Application:

    Open your web browser and go to http://localhost to see the application running.

6. Stopping the Container:

    If you started the container with Docker Compose, stop it using:
    
    `docker-compose down`

    If you started the container directly, find the container ID with:
    
    `docker ps`

    Then stop it with:

    `docker stop <container_id>`
