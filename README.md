# Woedgame

he wordGame is a simple JavaScript game where players take turns guessing the name of an animal based on its picture. The game keeps track of each player's score, and the first player to reach a score of 5 wins.

Installation
![](Wireframes/diferentsviews.png)

# Table of Contents
* [UX](#ux "UX")
    * [User Goals](#user-goals "User Goals")
    * [User Stories](#user-stories "User Stories")
    * [Site Owners Goals](#site-owners-goals)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
         * [Requirements](#requirements)
         * [Expectations](#expectations)
     * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Icons](#icons)
        * [Colours](#colours)
        * [Structure](#structure)
    * [Wireframes](#wireframes)
    * [Features](#features)
        * [Existing Features](#existing-features)
            * [Navigation Bar](#navigation-bar)
            * [Landing Page](#landing-page)
            * [About Section](#about-section)
            * [Classes Section](#classes-section)
            * [Gallery Section](#gallery-section)
            * [Contact Section](#contact-section)
            * [Footer](#footer)
        * [Features to be implemented](#features-to-be-implemented)
    * [Technologies used](#technologies-used)
        * [Languages](#languages)
        * [Tools and Libraries](#tools-and-libraries)
    * [Testing](#testing)
        * [Unfixed Bugs](#unfixed-bugs)
    * [Deployment](#deployment)
    * [Credits](#credits)
* Ux

## User Goals
* Visually appealing, including images.
* Easily navigated around.
* Quality and valuable content.
* Easily found contact details.
* Form to directly contact the Gym.

## User Stories
* As a user, I want the website to give me information about the Gym.
* As a user, I want to be able to easily contact the Gym.
* As a user, I want to be able to make contact with the Gym via several different methods, i.e. social media.
* As a user, I want to be able to easily navigate through the website.
* As a user, I want to know what type of classes the gym offers, any section whith free wheights and other equipment.

## Site Owners Goals
* Promote the Gym.
* Increase the number of members.
* Increase rankings on search engines.

## Requirements
* Easy to navigate on various screen sizes.
* Clear information what the Gym has to offers.
* Keep the user interested with small bits of information to make them want to engage with the Gym.
* Simple methods of contacting the Gym.
* Apelative so users do not leave.

## Expectations
* I expect to know if a form has been submitted properly and if items are not filled in, to be prompted.
* I expect all links to social media sites to be opened in a new tab.
* I expect all navigation links to work correctly.
* I expect screen size not to affect the quality of the website.
* I expect all information to be correct and accurate.

# Design Choices

## Fonts
In order to move away from the basic fonts available, I have used 
[Google Fonts](https://fonts.google.com/ "Google Fonts") 
to find a text that best suits the feel of the website.
 For the main text I have chosen 
 [Exo](https://fonts.google.com/specimen/Exo?query=mon "Exo") 
 as I feel it is has a sharp, simple and easy to read look. 
 To make the headers and the navigation bar stand out form the text, 
 I decided to use 
 [Roboto](https://fonts.google.com/specimen/Roboto?query=rob "Roboto").
 
 ## Icons
 
I will used some icons for my website from the Font Awesome library. These icons will only be used where there is no explination needed to their meaning, social media links, contact links and a hamburger for navigational links on smaller devices. All icons used will be styled and in keeping with the appearance of the website.

#

I will explain the uses of the varius colours below, starting from top to bottom.

## Colours

 * #292929 - This colour will be used as navbarand footer background colour submit buttom color and text content  Color.

 * #616161 - This colour will be used on the "back to the top" buttom as hover colour .

 * #FFFFFF - This colour will be used as a background colour, Navbar and Footer as a text colour.

## Wireframes
I have used [Balsamic](https://balsamiq.com/wireframes/ "Balsamic") to develop my wireframes for my website. I initially created the mobile version and then the wireframes and then scalled it up for both tablet and desktop. Because a requirement is to give little but quality information to the user to make them want to engage with the club, a one-page website is used. This gets the user through the content and quickly to the contact form and details via scrolling or directly via the navigation bar.

The wireframes are below:

###   [desktop view](Wireframes/desktopview.png)

###   [phone view](Wireframes/phoneview.png)

###   [tablet view](Wireframes/tabletview.png)


## Structure
I will be building my website with a mobile first mindset using the iPhone 5/SE (320px) as the smallest screen size for styling to look good on. The screen size breakpoints that I will be using are from [Bootstrap breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/ "Bootstrap").

| Screen Size | Breakpoint |
| ----------- | ---------- |
| x-small     | <576px     |
| small       | => 576px   |
| medium      | => 768px   |
| large       | => 992px   |
| x-large     | => 1200px  |

# Deployment

Following writing the code then commiting and pushing to GitHub, this project was deployed using GitHub by the following steps.

+ Navigate to the repository on github and click 'Settings'.
+ Then select 'Pages' on the side navigation.
+ Select the 'None' dropdown, and then click 'master'.
+ Click on the 'Save' button.
+ Now the website is now live on https://emanuelcaires.github.io/Factorygym/
+ If any changes are required, they can be done, commited and pushed to GitHub and the changes will be updated.

# Testing

I feel that the site has hit the goals required by all parties. 
The site responds nicely to all different screen sizes, 
the images look clean and sharp on all device sizes with very little, 
large blank spaces. It allows the user to navigate around easily and
 aslo make contact via the contact form or social media simply. It the content is simple and to the point and the site is not overcrowded as to put the user off.
\
&nbsp;

 To test the website i will use chrome develepor tools to resize my browser to emulate three mobile devices,(iphone 12 pro, iphone se pixel 5 ) and two tablets device (ipad air, ipad mini) and compare whit the wireframes that i created.The website it was responsive in all the mobile phone view and the tablet view,with one particular issue that was the burguer menu it did not collapse.after investigate i found that was using diferent version of bootstrap that was blocking to not colapse the nav menu.
 
+ During the validate of html ans css on validatewc3.org i found out div whitout closer and some duplicated, after amending this my html passed whitout error.whit css i did the same procedure found out that was some error that i amend and passed on the css validator whitout any errors.
    - HTML (index.html) validator [results](https://validator.w3.org/nu/#l75c45")
    - CSS validator [results](https://jigsaw.w3.org/css-validator/validator#css")

+ After all i felt that the site has hit the goals.The site responds nicely to all types of devices that was tested, the images look clean and sharp this allow user to navigaate easily throuth the site not puting the user off.

+ While using the lighthouse dev tools to test the site I was prompt with delays to load the images due to the format i am  using.

\
&nbsp;

# Tech Stacks

## Languages
* [HTML](https://en.wikipedia.org/wiki/HTML "HTML")
* [CSS](https://en.wikipedia.org/wiki/CSS "CSS")
* [JS](https://en.wikipedia.org/wiki/JavaScript "JAVASCRIP")
## Libraries & Framework
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
* [Font Awesome library](https://fontawesome.com/ "Font Awesome")
## Tools
* [Gitpod](https://www.gitpod.io/ "Gitpod")
* [Balsamic](https://balsamiq.com/wireframes/ "Balsamic")
* [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML")
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS")
* [Bootstrap](https://getbootstrap.com "Bootstrap")
* [Font Awesome library](https://fontawesome.com/ "Font Awesome")
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
# Features

## Existing Features

### Navigation Bar

+ The navigation bar is fully responsive to allow for various screen sizes. It includes links to manover around the site easily and the Gym logo which doubles as a link back to the home screen.

![](Wireframes/NavBar.png)

+ Small devices (<992px)

+ As the navigation bar would be unuseable in the desktop version on smaller devices, it takes on a hamburger style.

![](Wireframes/SmallDevice.png)

![](Wireframes/SmallDeviceMenu.png)

### Landing Page

+ The landing page image gives the user instant knowledge of what is involved in the Gym amd a good motivation to scroll down to find out more.

![](Wireframes/LandingPage.png)

### About Section

+ The about section gives a description of the type of classes, membership prices and some offers that will find at the Gym.
+ It is also responsive to suit the different screen sizes.
 
![](Wireframes/About.png)

### Classes Section

+ The classes section gives am idea about the type of classesexiste at the Gym  and a dropdown buttom, when pressed  open up with small descripition of class.

![](Wireframes/Classes.png)

### Gallery Section

+ The gallery section show a slideshow of pictures of the Gym.

![](Wireframes/Gallery.png)

### Contact Section

+ The contact section allows the user to quickly send a message to the Gym.

![](Wireframes/Contact.png)

### Footer Section

+ The footer contains the social media links related to Gym.
+ These social links all open in a new tab for ease of use to the user and also, so the user has an ability to easily come back to Gym's site.
 
![](Wireframes/Footer.png)



+ Add a menbership Page where will be able to gym subcription and classes booked.
+ Add a booking in system classes.
+ Add a Merchandise page whit  sport clothes and suplements.



# Credits

For code insperation, help and advice,
* [Simen Daehlin](https://github.com/Eventyret "Simen Daehlin")

For Content and style insperation,
* [Pexels](https://www.pexels.com/)
* [convertimage](https://convertimage.net/index.asp)
* [Les Miles](https://www.lesmills.com/)
* [Jasper](https://www.jasper.ai/)
