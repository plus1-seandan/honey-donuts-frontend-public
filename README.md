![Honey Donuts](https://cdn.shopify.com/s/files/1/0040/6146/2626/files/OF_DONUT_LOGO_300x.png?v=1551744283)

# Honey Donuts - Client

Frontend for the Honey Donuts website.

## Demo

Check out a demo of this app [here](http://abortive-lunchroom.surge.sh/).

Note: This is in combination with the backend project ([repo](https://github.com/seanysdan/honey-donuts-backend)).

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environment.

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/seanysdan/honey-donuts-frontend.git
    $ cd honey-donuts-frontend
    $ yarn install

## Running the project

    $ yarn start

If you wish to connect the project to a local backend, set the environment variable "process.env.**REACT_APP_SERVER_URL**" to "localhost".

Note: I recommend creating a .env file to store this configuration.

    $ yarn build

This will convert the project into a pure javascript for production deployment.
