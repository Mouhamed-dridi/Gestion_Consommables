# build image
docker build -t my-web-project .


# run image 
docker run -d -p 80:80 my-web-project
