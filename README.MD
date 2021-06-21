Clone repository to local

1. Infrastructure setup.
in aws console, go to cloudformation and create a stack with new resources. 
upload a file template, and add ec2+s3.json. Fill out parameter fields.

This will create a ec2 instance and a S3 bucket.

2. Build Application

To build application:

docker build -t <image-name> .

ie,
docker built -t dlee477/assessment .

after image is built, push image to docker hub repository 

docker push dlee477/assessment

3. Deploy application
SSH into ec2 instance and install docker-compose

sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

on the host machine run aws configure and put in access key and secret for the user to be able to publish to s3 bucket

Copy docker-compose over from local onto the server. 

Bring up docker container 

docker-compose up -d

4. Updates to code

To make to the code and deploy.

Update the code locally, build the docker image and push the image to the docker hub.
Once code is updated and image has been pushed to docker hub. SSH into instance and go to where the docker-compose.yml file is. 

Run docker-compose down and docker-compose up -d 