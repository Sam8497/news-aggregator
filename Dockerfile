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
RUN npx vite build

# Step 6: Use NGINX to serve the built files
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Step 7: Expose port 80 for HTTP traffic
EXPOSE 80

# Step 8: Start NGINX
CMD ["nginx", "-g", "daemon off;"]