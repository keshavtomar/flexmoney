Installation
use git clone <link> to clone it in your system and then install all dependencies using command "npm i"
use command "npm start" to start the localhost server on server 3000
This is a frontend application only and hence it will work in coordination of a backend repository at link
https://github.com/keshavtomar/flexmoney-backend


Used technologies
Database - cockroachDB
Frontend - React
Backend - Node.js with prisma 
- all other npm libraries are stated in package.json

App.js Documentation
App.js is the main entry point of the application. It sets up the routing for the application and wraps the entire application in the AuthProvider context.

Imports
Login, Register, Home, Enrollment, History: These are the different screens or pages of the application.
BrowserRouter as Router, Routes, Route: These are components from react-router-dom used for routing in the application.
AuthProvider: This is a context provider for authentication. It wraps the entire application so that any component can access the authentication context.
Function: App
This is the main function component of the file. It returns the JSX for the application.

JSX Structure
AuthProvider: This wraps the entire application. It provides an authentication context to all the components inside it.
Router: This component from react-router-dom wraps all the Routes and Route components. It provides the routing functionality.
Routes: This component wraps all the Route components. It's where you define all the possible routes for the application.
Route: These components define individual routes. Each Route has an exact path prop which is the URL for that route, and an element prop which is the component that should be rendered when that URL is visited.
Routes
/: The home page of the application.
/login: The login page of the application.
/register: The registration page of the application.
/payment: The payment or enrollment page of the application.
/history: The order history page of the application.
Export
The App component is exported as the default export of this module.



Home page
Home.jsx is a component that represents the home page of the application.

Imports
React, { useEffect, useState }: These are imports from the react library. React is the main library, while useEffect and useState are hooks that allow you to use state and other React features without writing a class.
Navbar: This is a component that represents the navigation bar of the application.
Card: This is a component that represents a card element in the application.
useAuth: This is a custom hook that provides authentication context. It allows you to access the isLoggedIn state and other authentication-related states and functions.
Function: Home
This is the main function component of the file. It uses the useAuth hook to get the isLoggedIn state, which can be used to conditionally render different parts of the component based on whether the user is logged in or not.

JSX Structure
<div>: This is the main container for the component. All other elements will be nested inside this.
Export
The Home component is exported as the default export of this module.

Note: The code provided is incomplete, so the documentation might not cover all aspects of the Home.jsx file.

<img width="960" alt="image" src="https://github.com/keshavtomar/flexmoney/assets/100251921/e6d3105d-99c7-4356-9bd8-73239f2f95d5">



Login/Register page:

Security is taken care of in login and Register
<img width="960" alt="image" src="https://github.com/keshavtomar/flexmoney/assets/100251921/0c85c8e5-f9f2-4a47-9837-205136e19dd5">

Enrolloment for current month:
This is handled by enroll button which will take you to route /payment
The age factor is filtered during the current month payment because DOB of user is saved in the database and age is a dynamic variable
<img width="960" alt="image" src="https://github.com/keshavtomar/flexmoney/assets/100251921/169ee9a7-530a-4a85-99b7-2fb32ea67aa4">


My History:
History of previous batches taken can be seen at the route /history after login
<img width="960" alt="image" src="https://github.com/keshavtomar/flexmoney/assets/100251921/b04bd58d-08c2-48e6-8a68-defaba63c26c">

Current batch status:
<img width="232" alt="image" src="https://github.com/keshavtomar/flexmoney/assets/100251921/b004eb56-6fa0-48ac-bb1b-7ec1d6202074">

Thank You for Reading ...



