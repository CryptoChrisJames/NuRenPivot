# Initializing Variables
_imagetag=nurenui-v1
echo $_imagetag

# Initializing functions
buildImage()
{    
    docker build -t "$_imagetag" .
}

removeOldImage()
{
    docker rmi $_imagetag
}

pruneImages()
{
    docker image prune --force
}

pruneImages
echo $?

if [ "$(docker images $_imagetag)" == "" ]; then
    echo $?
    buildImage
else
    echo $?
    removeOldImage
    buildImage
fi