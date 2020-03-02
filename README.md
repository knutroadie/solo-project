# good do good

Making quality connections to quality people is becoming more difficult each day, especially in a place like the Twin Cities, a place notorious for being difficult to break into socially. GOOD DO GOOD provides users with reputable volunteer opportunities where they can meet the kind of people who might volunteer their time and resources for charity, and build their social safety net in substantial ways by taking part in meaningful activities. Users with accounts can submit new opportunities to be listed, but access will not be limited to those with accounts. GOOD DO GOOD emphasises quality casual connections with people who share your values.

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `good-do-good` and execute all the code in the database.sql file.

## Development Setup Instructions

* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`