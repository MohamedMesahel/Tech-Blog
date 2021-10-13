# Tech-Blog
![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

## About
Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

## Table of Contents
- [Tech-Blog](#tech-blog)
  - [About](#about)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [User Story](#user-story)
  - [Link to Demo](#link-to-demo)
  - [Usage](#usage)
    - [Screen Shots](#screen-shots)

## Installation 
- Download it through Github
- Run npm i or (npm install), to make sure to download all the necessary files in the jason package.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Link to Demo
[E-Commerce-Backend](https://techblog-mm.herokuapp.com/)

## Usage 
- Initiate the database with 'mysql -u root -p', then 'source db/schema.sql' to create the tables.
-  After installation Exit the mysql terminal and in the command line type `npm run seed` run Seed to seed the data to the Apllication DB
-  After installation and from bash or zsh, type `npm start` in the command line to start running the app.

### Screen Shots
![](public/img/main.png)
![](public/img/loggedin.png)
![](public/img/comment.png)