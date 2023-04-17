# Employee-Review-System
## Description 
  A project which is use to submit review against each other for employees. And there is an admin
  who can see all employees, he can delete any of employee and he can create any employee. An admin can 
  create any employee to admin
  
## Tech stack used
  MongoDB is used for database, nodejs express as a server and ejs for views templates, javascript for coding
  and html, css for designing.
 
## Deployment Link
https://cyan-galoshes.cyclic.app/
   
# How to setup the project on local system
  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory by : Using
  ```
  cd Employee Review System
  
  ```
  
  After reaching to the this preoject directory yo have to run this following command :
  ```
  $ npm install
  $ nodemon index.js or npm start
  ```
  
  Entering login admin point (important)
  using this email and pass login into project please
  ``` 
  email : wankhadeabhi3@gmail.com
  password : 123
  ```
  
  ## Features
  * Admin View
  Add/ remove/ update/ view employees
 ![emp-list](https://user-images.githubusercontent.com/87888969/232309538-aad78dbd-b59a-4a16-85e2-7dac764311ec.png)
 
  Assign employees to participate in another employee's performance review
![admin-page](https://user-images.githubusercontent.com/87888969/232309696-f6af8e7e-d5df-4fbb-b75f-273cb354281d.png)

  Admin can add new employee also by registring

  * Employee View
    * List of performance review requiring feedback
    * Submit feedback
 ![emp-reviews](https://user-images.githubusercontent.com/87888969/232309585-39e7cdfc-4a86-4d5c-8d87-8eeb60faccb3.png)
  * Login
  ![login](https://user-images.githubusercontent.com/87888969/232309935-5dc0887b-2755-46c0-8e8f-15b0ba973edc.png)
  * Register
  ![signup](https://user-images.githubusercontent.com/87888969/232309947-2ba12e19-2a87-4a16-984a-6349a359f161.png)
  
  ## Directory Structure
  * ```/assets/css``` - all css code
  * ```/assets/img``` - all the images
  * ```/config``` - MongooDB Atlas Configuration
  * ```/controllers``` - questions & option controllers code
  * ```/model``` - review and users. 
  * ```/routes``` - all routes according to admin and employee is here
  * ```/views``` - all ejs files
  * ```index.js``` - entry file
  
  
