#!/bin/bash

# Initializing Variables
_imagetag=nurenui-v1

# Initializing functions for images

buildImage()
{    
    docker build -t "$_imagetag" .
}

removeOldImage()
{
    docker rmi $_imagetag -f
}

pruneImages()
{
    docker image prune --force
}


# Initializing functions for containers
runNewContainer()
{
    docker run --name $_imagetag -d -p 81:80 $_imagetag
}

removeOldContainer()
{
    docker rm $_imagetag -f
}

# Remove dangling images
pruneImages

# Build new image
if [ "$(docker images $_imagetag)" == "" ]; then
    buildImage
else
    removeOldImage
    buildImage
fi

# Deploy new container
if [ "$(docker container inspect $_imagetag )" == "[]" ]; then
    runNewContainer
else
    removeOldContainer
    runNewContainer
fi 