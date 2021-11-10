#!/bin/bash
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg 
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io -y

git config --global user.email "hoang.dao23062001@gmail.com"
git config --global user.name "daovanngochoang"

git clone
cd Admeliora_Project

sudo docker-compose up -d
cd .. && rm -rf Admeliora_Project


