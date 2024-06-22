# Use an official nginx image as the base
FROM nginx:alpine

# Copy the contents of the current directory to the /usr/share/nginx/html directory in the container
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
