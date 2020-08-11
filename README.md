# Food Map (Real Name TBD)
By [E.N.G. Jole](https://engjole.net)
## About
This app aims to improve upon existing food related curation systems such as Yelp, Google Maps, and food journalist sites like Eater and Thrillist. While Yelp and Google Maps are highly extendable and searchable, crowdsourced reviews are inherently flawed; who cares what Jessica G. from San Francisco thinks? Likewise, while food journalist sites have the curation down, the searchablity is non-existent. Currently, you can either find a restaurant near you and open for the meal you want, which may or may not be good, or can find a restaurant that is good but may or may not be open and near you. Food Map aims to change this.
## Technical
Food Map uses [React](https://reactjs.org) with the [Ant Design](https://ant.design) library for the front-end, [NodeJs](https://nodejs.org) and [ExpressJs](https://expressjs.com) for the API and web server, and [PostgresSQL](https://www.postgresql.org) for the database layer.
## Build + Run
### Requirements
* node >=12.13.1
* npm >= 6.13.4
### Steps
1. Download and extract the source to a directory of your choosing
1. cd into the directory
1. run ```npm install```
1. run ```build.sh```
1. run ```node app.js```
Note: I have the app listening on port 80 by default, which _is_ a privileged port. You can either change the port and redirect port 80 to the new port, or use a workaround like [this one](https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps#give-safe-user-permission-to-use-port-80) to let it run on port 80. **DO NOT RUN AS ROOT** 
Additionally, the database address is currently set to localhost. Change as you see fit.
## License
Currently unlicensed, you can look and run it for personal purposes, but please do not redistribute, modified or otherwise. 
