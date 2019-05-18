sudo -i

whoami

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

pruneImages()
{
    docker image prune --force
}


pruneImages

if [ "$(docker images $_imagetag)" == "" ]; then
    buildImage
else
    removeOldImage
    buildImage
fi


cd /

docker save nurenui-v1 | ssh -C ubuntu@ec2-18-188-48-133.us-east-2.compute.amazonaws.com docker load
