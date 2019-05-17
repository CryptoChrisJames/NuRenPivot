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
    docker rmi $(docker images -f “dangling=true” -q)
    docker rmi $_imagetag
}



if [ "$(docker images $_imagetag)" == "" ]; then
    buildImage
else
    removeOldImage
    buildImage
fi