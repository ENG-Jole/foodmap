#!/usr/bin/env bash
if [ -d "/home/ennyjole/foodmap/views/home/build" ]; then rm -Rf /home/ennyjole/foodmap/views/home/build; fi

if [ -d "/home/ennyjole/foodmap/views/la/build" ]; then rm -Rf /home/ennyjole/foodmap/views/labreak/build; fi
if [ -d "/home/ennyjole/foodmap/views/labreak/build" ]; then rm -Rf /home/ennyjole/foodmap/views/labreak/build; fi
if [ -d "/home/ennyjole/foodmap/views/lalunch/build" ]; then rm -Rf /home/ennyjole/foodmap/views/lalunch/build; fi
if [ -d "/home/ennyjole/foodmap/views/ladinner/build" ]; then rm -Rf /home/ennyjole/foodmap/views/ladinner/build; fi
if [ -d "/home/ennyjole/foodmap/views/lacoffee/build" ]; then rm -Rf /home/ennyjole/foodmap/views/lacoffee/build; fi
if [ -d "/home/ennyjole/foodmap/views/labars/build" ]; then rm -Rf /home/ennyjole/foodmap/views/labars/build; fi

#if [ -d "/home/ennyjole/foodmap/views/pdx/build" ]; then rm -Rf /home/ennyjole/foodmap/views/pdxbreak/build; fi
if [ -d "/home/ennyjole/foodmap/views/pdxbreak/build" ]; then rm -Rf /home/ennyjole/foodmap/views/pdxbreak/build; fi
if [ -d "/home/ennyjole/foodmap/views/pdxlunch/build" ]; then rm -Rf /home/ennyjole/foodmap/views/pdxlunch/build; fi
if [ -d "/home/ennyjole/foodmap/views/pdxdinner/build" ]; then rm -Rf /home/ennyjole/foodmap/views/pdxdinner/build; fi
if [ -d "/home/ennyjole/foodmap/views/pdxcoffee/build" ]; then rm -Rf /home/ennyjole/foodmap/views/pdxcoffee/build; fi
if [ -d "/home/ennyjole/foodmap/views/pdxbars/build" ]; then rm -Rf /home/ennyjole/foodmap/views/pdxbars/build; fi

cd ./views/la; npm install; npm build; cd ../..;
cd ./views/labreak; npm install; npm build; cd ../..;
cd ./views/lalunch; npm install; npm build; cd ../..;
cd ./views/ladinner; npm install; npm build; cd ../..;
cd ./views/lacoffee; npm install; npm build; cd ../..;
cd ./views/labars; npm install; npm build; cd ../..;

#cd ./views/pdx; npm install; npm build; cd ../..;
cd ./views/pdxbreak; npm insstall; npm build; cd ../..;
cd ./views/pdxlunch; npm install; npm build; cd ../..;
cd ./views/pdxdinner; npm install; npm build; cd ../..;
cd ./views/pdxcoffee; npm install; npm build; cd ../..;
cd ./views/pdxbars; npm install; npm build; cd ../..;
