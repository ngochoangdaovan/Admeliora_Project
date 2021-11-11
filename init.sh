#!/bin/bash

echo "Admeliora Project"
echo "Initializing..."
echo "Installing dependencies..."

sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg 
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

echo "



"
echo "Installing docker..."
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io -y

echo "



"
echo "Installing docker-compose..."
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

cd back-end/
echo "



"
echo "Installing and setup nginx..."
sudo apt-get install -y nginx
sudo cp -r ./nginx/admeliora  /etc/nginx/sites-available/
sudo ln -s  /etc/nginx/sites-available/admeliora /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/sites-available/default
sudo systemctl restart nginx





while getopts u:p: flag
do
    case "${flag}" in
        u) username=${OPTARG};;
        p) passwd=${OPTARG};;
    esac
done
sudo docker login -u $username -p $passwd

echo "



"
echo "run docker-compose"
sudo docker-compose up -d

echo "



"
echo "Done!"
echo "##############################################################################################################"
