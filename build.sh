sudo -i

# Initializing Variables
IMAGETAG = nurenui-v1

# Initializing functions
buildImage()
{    
    docker build -t "$IMAGETAG" .
}

removeOldImage()
{
    docker rmi nurenui-v1
}



if [[ "$(docker images $IMAGETAG)" == "" ]]; then
    buildImage
else
    removeOldImage
    buildImage
fi