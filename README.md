# Employee-Review-System
## Description 
  A project which is use to submit review against each other for employees. And there is an admin
  who can see all employees, he can delete any of employee and he can create any employee. An admin can 
  create any employee to admin
  
## Tech stack used
  MongoDB is used for database, nodejs express as a server and ejs for views templates, javascript for coding
  and html, css for designing.
  
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
  email : abhiwankhaded67@gmail.com
  password : 123
  ```
  
  ## Features
  * Admin View
  Add/ remove/ update/ view employees
 ![emp-list](https://user-images.githubusercontent.com/87888969/232309538-aad78dbd-b59a-4a16-85e2-7dac764311ec.png)

  Add/update/view performance reviews
 ![admin-page](https://user-images.githubusercontent.com/87888969/232309550-2a2c2a7e-9bce-44cf-8b4f-84c0458652be.png)

  Assign employees to participate in another employee's performance review
 ![emp-reviews](https://user-images.githubusercontent.com/87888969/232309585-39e7cdfc-4a86-4d5c-8d87-8eeb60faccb3.png)

  Admin can add new employee also by registring

  * Employee View
    * List of performance review requiring feedback
    * Submit feedback
  ![test4](https://github.com/ashishpal07/Employee-Review-System/blob/main/assets/image/employe-task.png)
  * Login
  ![test5](https://github.com/ashishpal07/Employee-Review-System/blob/main/assets/image/login.png)
  * Register
  ![test6](https://github.com/ashishpal07/Employee-Review-System/blob/main/assets/image/register.png)
  
  ## Directory Structure
  * ```/assets/css``` - all css code
  * ```/assets/img``` - all the images
  * ```/config``` - MongooDB Atlas Configuration
  * ```/controllers``` - questions & option controllers code
  * ```/model``` - review and users. 
  * ```/routes``` - all routes according to admin and employee is here
  * ```/views``` - all ejs files
  * ```index.js``` - entry file
  
  
