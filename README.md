# Team Profile Generator 
![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Description 
This application was created to generate a team profile based on user input using the Inquirer module from Node.js and displaying the information on a newly created html page with a style sheet. This project demonstrates use of OOP and TDD using Jest. 

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Screenshot](#screenshot)
- [Walkthrough Video](#walkthrough-video)
- [Credits](#credits)
- [License](#license)

# User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Screenshot
This is a screenshot of the generated HTML webpage.

![DreamTeam-Generator HTML Webpage Screenshot](https://github.com/DonL44/dreamteam-generator/blob/14c5ed7bdbfda2770eaa0175a92ee94917b0fe1c/assets/html-screenshot.png)

## Walkthrough Video
![Team Generator Walkthrough Video](https://github.com/DonL44/dreamteam-generator/blob/01875e76747decb3182987c7dedde0474919349a/assets/dreamteam-generatordemo.gif)<br> 
Or view link here - [Screencastify](https://drive.google.com/file/d/1fg8xvvBba2PF5kidGrRD1LhYkr7_AfqG/view)

## Credits
- Bootstrap: https://getbootstrap.com/
- NodeJS: https://nodejs.org/en/
- Jest: https://www.npmjs.com/package/jest
- Inquirer: https://www.npmjs.com/package/inquirer

## License

This project was created by DonL as part of the curriculum for the Vanderbuilt Coding Boot Camp

© 2022 Module 10, LLC, Inc. Confidential and Proprietary. All Rights Reserved.
