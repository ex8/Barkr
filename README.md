# About

The Popeyes team is creating an app called Barkr.

Barkr will allow you to find your pet a playdate.

Just swipe right on any fabulous pets you'd like your pet to go on a date with.

# Architecture
Frontend Stack: React, Redux, Material UI

Backend Stack: Express, MongoDB, Docker, Redis, Websocket

Main architecture flow;

 Frontend <--> Microservice Gateway <--> Backend <--> MongoDB

Routes/Pages;

'/' -> index page (shows other pets in the area)

'/login' -> user login page

'/signup' -> user signup page

'/profile' -> user profile page showing all pets, likes, etc etc 

'/add' -> add new pet page

'/chats' -> show all matched pet conversations

'/chats/id' -> show petconversation detail


Models;

User -> first_name, last_name, email, password, age

Pet -> name, breed, age, likes: [], dislikes: []

Message -> date, message, responses: []



# Rough Sketches

Creating a new account

![Creating a new account](./sketch/register.jpg)

Viewing other pets in the area

![Viewing other pets](./sketch/homepage.jpg)