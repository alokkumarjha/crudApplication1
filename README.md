# crudApp

a [Sails](http://sailsjs.org) application

STEPS TO RUN CRUDAPP

1.  npm i (It will install all the required packages)

2.  npm start (It will run the server)

3.  User Creation Api URL (POST API) : http://localhost:1337/user
    body : {
    "dob" : "19/08/1997",
    "name" : "Alok",
    "description" : "hi There",
    "address": "Delhi"
    }

4.  User fetch Api URL (GET API) : http://localhost:1337/user/609ccfc7b70f4e74fddd757a

5.  User update Api URL (PUT API) : http://localhost:1337/user/609ccfc7b70f4e74fddd757a
    body : {
    "dob" : "19/08/1996"
    }

6.  User delete Api URL (DELETE API) : http://localhost:1337/user/609ccfc7b70f4e74fddd757a


Advance Requirements

1. User auth can be done by using jwt

2. In the response of login api, user will get jwt, whatever resource user want to access, it will be checked whether the user is authorized to access that resource or not.

3. Nearby Friends : It can be done simply by using Google maps api
