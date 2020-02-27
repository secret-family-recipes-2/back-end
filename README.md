## Secret Family Recipes Cookbook - Back End

#### [Product Vision Document](https://www.notion.so/Product-Vision-9cfa483ff42d494f8cb21be15fc215f7)

### Heroku

https://secret-recipes-2.herokuapp.com/

## Endpoint Summary

| Method | Endpoint             | Description           |
 | ------ | -------------------- | --------------------- |
 | POST   | /api/auth/register   | Register user         |
 | POST   | /api/auth/login      | Login                 |

 ## Registration

 POST to /api/auth/register

 ```
 {
     "username": "string", //required, unique
     "password": "string" //required
 }
 ```

 returns an object containing the created user data and a token

 ## Login

 POST to /api/auth/login

 ```
 {
     "username": "string", //required
     "password": "string" //required
 }
 ```

 \*returns an object containing the username and a token