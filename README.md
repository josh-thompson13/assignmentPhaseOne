# ChatApp

This is the beginning of a chat app

## Repository Layout

The repository is laid out in a straight forward way. There has not been a need for branches as of yet as I have not implemented any 'risky' code **yet**. I used GIT for version control. 

## Data Structures

The Users are represented with an email, password, system_role, [groups], and [rooms]
The groups are represented with a group_id, group_name, and [rooms]
The rooms are represented with a room_name

## REST API

There are 6 routes in the nodejs backend.

A post request to the '/login' endpoint which will check if a user exists based on the inputted username and password, if exists, the response sends a value of true and the user is logged in, else it sends a response with a value of false and prompts the user to login again.

The second route is a get to the '/users' endpoint. This route responds with a list of all users, so the super_admin can delete and edit each one as they please.

The third route is a post request to '/createuser'. This route checks if a user exists (based on username), and if the user does not exist, will add the user to the users.json file with a username, email and automatically set password, returning true. If the user exists or all inputted fields are not inputted, it will return an error.  

The fourth route is a post request to '/deleteuser'. This route deletes the relevant user from the mongo database. 

The fifth route is a post request to '/creategroup.' This route will insert a document into the Users table adding the newly created group to all users that have a system_role of 'Super_Admin' or 'Group_Admin.' Then those users will be able to see the groups and if it was implemented would then be able to assign users. 

The sixth and final route is a get request to '/chat' which will return the chat screen with sockets enabled. 

## Angular Architecture

### Components - There are six components that make up this project

1. App Component - This component is responsible for the navigation bar and the logout() function
2. Login Component - This component is responsible for handling user login as well as localStorage setting. 
3. Groups Component - This component will show the logged in user the groups that they are apart of. It will also allow users (with permission) to create new groups or delete old ones.
4. Group Component - This component will display the rooms in a particular group. 
5. Users Component - This component displays all registered users and will allow the super_admin and group_admin to delete/edit them if needed
6. Create User Component - This component is responsible for creating users with a supplied username and email.
7. Create Group Component - This component is responsible for creating a group
8. Chat Component - This component is responsible for displaying the chat screen with sockets enabled. 

### Services - There is currently one service (more to come)

1. Authguard Service - This service will redirect the user to the login component if the user is not logged in and tries to access any part of the site other than the login page. 
