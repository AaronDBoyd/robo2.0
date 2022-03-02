# _Mr. Roboger's Hood _

#### By _**Aaron Boyd**_

#### _This webpage will take any number given and return a translated string from Mr. Roboger._

## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap
* JQuery

## Description

_I have created this webpage to show as an example of the JavaScript and JQuery skills, as well as Looping techniques with Arrays that I have recently learned. This page also displays examples using conditionals to prioritize necessary changes._

[Link to my site hosted on gh_pages](https://aarondboyd.github.io/Robogers-Hood/)

## Setup/Installation Requirements

* _Access your computer's terminal shell_
* _Go to your Desktop or preferred directory by using the command $ cd Desktop_
* _create a new directory by using the command $ mkdir Aarons-MrRobogers-Project_
* _Navigate to the directory by using the command $ cd Aarons-MrRobogers-Project_
* _Initialize git by using the command $ git init_
* _Clone the repository by using the command $ git clone https://github.com/AaronDBoyd/Robogers-Hood
* _Access the HTML file by using the command $ code ._

## Known Bugs

* _No known bugs._

## Tests:

#### Describe: beepBoop()

- Test: "It should return an array of numbers from 0 to the user's inputted number."
- Code: beepBoop(5);
- Expected Output: [0, 1, 2, 3, 4, 5]
---
- Test: "It will recognize any number that contains a 3 and change the entire digit to the string 'Won't you be my neighbor?.'"
- Code: beepBoop(5);
- Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5]
---
- Test: "It will recognize any number that contains a 2 and change the entire digit to the string to 'Boop!' unless it contains a 3."
- Code: beepBoop(23);
- Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, "Boop!", "Won't you be my neighbor?", 14, 15, 16, 17, 18, 19, "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]
---
- Test: "It will any number that contains a 1 and change the entire digit to the string 'Beep!' unless it contains a 2 or a 3."
- Code: beepBoop(13);
- Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]
---
- Test: "It will recognize an input that isn't a number and return a message to the user to enter a number."
- Code: beepBoop("Number");
- Expected Output: "Please enter a number"
---
---

## License

_MIT_

Copyright (c) _2022_ _Aaron Boyd_