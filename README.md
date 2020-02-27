# back-end
Secret Family Recipes back end

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


