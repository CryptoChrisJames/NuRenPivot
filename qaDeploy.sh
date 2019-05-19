# Granting superuser
sudo -i

# Initializing Variables
_imagetag=nurenui-v1

# Initializing functions
runNewContainer()
{
    docker run --name $_imagetag -d -p 81:80 $_imagetag:latest
}

removeOldContainer()
{
    docker rm $_imagetag -f
}

removeOldContainer

runNewContainer