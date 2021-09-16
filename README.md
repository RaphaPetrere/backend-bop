# 🕔️ Bate o Ponto - Backend

Bate o ponto is an application that stores your work time, so you can have full control of how much you are working per day.

Its backend is written in NodeJS, so I can practice a little and see if I still know a thing or two.

This README was written to guide me and others on what we need to do in order to get a project like this running. The project will probably have some changes in the near future, so it's better to have some document saying what was done here.

## Summary

- [🔧️ Getting Started](#getting-started): how the configure your local project;
- [🌐️ Routes](#routes): what each route do;
- [📝️ Final Considerations](#final-considerations): some words of wisdom.
## Getting Started
_things you need in order to make it work on your machine..._

- Node & NPM
    
    Since it's a project made with **NodeJS**, you'll need to have node and npm on your pc in order to install all the packages used in here and run the project.
    
    Once you install node, you'll have **npm** since it comes together.

    >[Click here](https://nodejs.org/en/) to go to Node's page and find what is best for you.

    To check which version of **node** and **npm** you have, you need to run the following code in your terminal: 
    ```terminal
        node -v
        v14.17.6 -> this is the output you might receive. (It depends on the version you installed)

        npm --version
        6.14.15 -> this is the output you might receive. (It depends on the version of Node you installed)
    ```

- SQLite3

    Since it's a small project, all I needed was a little Relational Database and SQLite gets the job done easily, specially since it's easy to integrate with knex.

    In order to use it, you need to have sqlite3 installed on your machine. I'm using Ubuntu 20.04 LTS, so I ran the following code on my terminal: 
    ```terminal
       sudo apt install sqlite3
    ```
    I'm not sure about other OS, so in this case I'll let you down, sorry.

    After installing it, I ran the following in order to get the version of SQLite:
    ```terminal
        sqlite3
        SQLite version 3.31.1 2020-01-27 19:55:54 -> this is the first line of the output you might receive.
        .quit -> use this command to quit the sqlite CLI.
    ```

- Knex.js
    
    Now that we ran all those commands and let's suppose everything went as smooth as wipe cream, we need to install the library that'll help us with all the database manipulation. 
    
    >[Click here](https://knexjs.org/) to go to Knex.js' page.

    First and foremost we need to install **knex** globally on your local computer. Run the following:
    ```terminal
        npm install knex -g
    ``` 

    This will allow us to use knex as a command line tool that helps you create and manage your knex files.

#### 🎉️ Finally 
we made it to the end, now all you need to do is run a little 
```terminal
    npm install -> in order to install all the packages

    npm start -> in order to run the project
```
and you're all set to use it as you please.

## Routes

Here is the routes that you have in the backend, you can read each file to see the details.


## Final Considerations

This app isn't supposed to be a full fledge app that can be commercialized and so, that's why it isn't so complex neither so secure but I hope you got the idea behind it with this amazing README.

I'll probably be updating it from time to time in order to meet my needs, so feel free if you want to contribute with this project or if want to use it yourself (just let me know that you used it, you can find my socials on my profile).

Thanks for reading till the end, I appreciate it very much 💜️. 

See you on the next one.