# GTH-Barcelona-ConsoleLu
Project submission for the `Global Travel Hackathon in Barcelona, by console.lu team`.

**Write one sentence explaining what does your project.**
Our idea is make travelling more accessible for people with special needs. For this reason we create Kiwi-them, wich is an app that will connect volunteers with people that needs help to travel. 

![Add a screenshot from your project. For example the main website page.](https://raw.githubusercontent.com/Global-Travel-Hackathon/GTH-Location-TeamName/master/screenshots/Global-Travel-Hackathon-image.png)

## :books: Description

Our project is focused in the accesibility and we use ReactJS in the Frontend and NodeJS and Mongoose in the back to developed. 

![* SDKs used in the project;
* APIs used in the project; 
Tequila by kiwi
Unsplash API
* Any assets used in the project;

* Any libraries used in the project;
React
socket.io
* Any components not created at the hackathon;]


## :hugs: Maintainers

List all the team members. For example:
* [Jesus Cebader - Zebader](https://github.com/zebader)
* [Rundi Ye - Jundi](https://github.com/Rundiye)
* [Jan Giménez - Jan](https://github.com/JanGimenezLayola)
* [Adri Porcel - Illo](https://github.com/prrrcl)
* [Lu Ye Zhan - Lu](https://github.com/LuYeZhan)


## :tada: Why is this so awesome?

* It's the first app focused in the accesibility.
* Connect people.
* Make a better society by help each other.

## :hammer_and_wrench: Installation

1. Clone the Repo.
2. Open the project directory and run npm install in the command line
3. Run npm start to execute the project in local.

## :bulb: Devstack

...


## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **500:** As an anon/user I can see a 500 page if the server isn't working
-  **Signup:** As a user I want to sign up on the webpage so that I can see my privates screens
-  **Login:** As a user I want to be able to log in on the webpage so that I can get back to my account
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Trips:** As a user I can add a trips
-  **Join Trips:** As a user I can join to coleague trip
-  **Edit Trips:** As a user I can edit a trip

## Backlog

Mailing: confirmation by mailing
Ratings: user's rate each other
SplashPage:
Create Profile Em:

# Client / Frontend

## Routes
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/auth/signup`            | Signup               | anon only   | Signup form, link to login, navigate to '/' after signup|
| `/auth/login`             | Login                | anon only   | Login form, link to signup, navigate to '/' after login |
| `/auth/logout`            | n/a                  | anon only   | Navigate to '/' after logout, expire session            |
| `/trip/add`            | TripAdd           | me user only   | Create a trip                                           |
| `/trip/edit/:id`            | TripEdit           | me user only   | Update a trip                                         |
| `/trip/delete/:id`            | n/a                  | me user only   | Delete a trip and redirect to '/'                   |
| `/me`            | n/a                  | me user only   | Delete a trip and redirect to '/'                   |
| `/em`            | n/a                  | em user only   | Delete a trip and redirect to '/'                   |


## Components

...

## Services

- Auth Service

  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
  
- Trip Service

  - trip.add(id)
  - trip.edit(id)
  - trip.joinrequest(id)
  - trip.delete(id)
  

# Server / Backend


## Models

- User model

```javascript
{
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  myTrips: [{
    type: ObjectId,
    ref: 'Trip'
  }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
}
```

- Trip model

```javascript
   username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  myTrips: [{
    type: ObjectId,
    ref: 'Trip'
  }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
```

- Comment model


- Message model


- Chat model

## Slides

https://docs.google.com/presentation/d/1tSe81_jLoUn6ojFT_cLBAUsuWlUVQUJWR3gswHzyxhA/edit?usp=sharing

## :warning: Licence

>The code in this project is licensed under MIT license. By contributing to this project, you agree that your contributions will be licensed under its MIT license.
