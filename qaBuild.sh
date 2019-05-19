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

pruneImagesAndContainers

if [ "$(docker images $_imagetag)" == "" ]; then
    buildImage
else
    removeOldImage
    buildImage
fi