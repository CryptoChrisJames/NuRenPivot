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
pruneImagesAndContainers()
{
    docker container prune --force
    docker image prune --force
}

# Action :

# Get rid of dangling containers and images 
pruneImagesAndContainers

# Remove old image 
removeOldImage

# Create new image
buildImage

# Remove old conrainter
removeOldContainer

# Run new container
runNewContainer