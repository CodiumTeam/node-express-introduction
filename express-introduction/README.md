# Introduction to Express

## Goal
- Write your first API
- Write you first HTML generated page
- Deploy your app to a server

## Setup

#### Install express
Follow the steps described on [Express installation guide](https://expressjs.com/es/starter/installing.html)

## Mini katas

#### 1. Express hello world
- Create a webserver that returns "Hello world!" when accessing via _GET_ to the `/hello`

Tip: 
- [Hello world guide](https://expressjs.com/es/starter/hello-world.html)
- Use [nodemon](https://nodemon.io/) to have live reload 

#### 2. Hello world using Postman
- Make a request to our just created server using Postman

Download the program using the [Postman webpage](https://learning.getpostman.com/docs/postman/launching_postman/installation_and_updates/)

Tip: [How to make a request using Postman](https://learning.getpostman.com/docs/postman/launching_postman/sending_the_first_request/) 

#### 3. Hello your name
- Create a webserver that returns, for example, "Hello Luis!" when accessing via _GET_ to the `/hello/Luis`

Tip: Read about [Route parameters](https://expressjs.com/en/guide/routing.html#route-parameters).

#### 4. Hello stored name
- Create a webserver that returns, for example, "Hello Luis!" when accessing via _GET_ to the `/hello`
- The name of the person should be read from a file.
- Use asynchronous methods.

Tips:
- Start from [mini kata 1](#1-express-hello-world) 
- Use [_`fs`_](https://nodejs.org/api/fs.html) to read the file.

#### 5. First post request
- Create an end-point that allows to update the name that we will return on the previous mini kata.
- The HTTP Response code should be [201](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success).

Tip: 
- You may need to use Postman to access this end-point.
- Think the type of HTTP request needed.
- Think the name of the parameter you want to use

#### 6. First template
- Update the _Hello your name_ to display a webpage with proper HTML Tags
- Use [handlebars](https://handlebarsjs.com/) as a template library 

Tip: Integrate handlebars with express [using express-handlebars](https://github.com/ericf/express-handlebars#installation)

#### 7. First middleware
- Adds a middleware to log into a file all the request made to our webserver.
- The filename should be called _requests.log_
- Each line of the log should contain:
    - The date when the request was made
    - The url that access

Tip: Follow the [Middleware express guide](https://expressjs.com/es/guide/writing-middleware.html)
 
#### 8. Deploy your app
- Make your app available on internet.

Tip: Follow the [Getting started guide on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)


## Author
[Luis Rovirosa](https://twitter.com/luisrovirosa)
