# Granting superuser
sudo -i

# Initializing Variables
_imagetag=nurenui-v1

# Initializing functions
buildImage()
{    
    docker build -t "$_imagetag" .
}

removeOldImage()
{
    docker rmi $_imagetag
}

pruneImagesAndContainers()
{
    docker container prune --force
    docker image prune --force
}

runNewContainer()
{
    docker run --name $_imagetag -d -p 85:80 $_imagetag:latest
}

removeOldContainer()
{
    docker rm $_imagetag -f
}


pruneImagesAndContainers

if [ "$(docker images $_imagetag)" == "" ]; then
    buildImage
else
    removeOldImage
    buildImage
fi

removeOldContainer

runNewContainer