# Intensify

## Project’s Purpose or Goal:

* Allow user to choose a workout based on: Gym Equipment, Free Weights or Body Resistance and then choose which muscle group to work on.
* The user would then be able to choose the intensity or type of workout that would allow them to focus on Muscle Tone, Building Muscle or Muscle Endurance.
* Would also show Anatomy of human body with muscle groups the user could click on instead of scrolling through list of names of muscles. This would be beneficial if the user didn’t know what the muscle group was called. Of if the user just preferred that method.

* User would given a guide on how to use the equipment, weights or body resistance to achieve workout goal. Guide will change depending on the type/intensity of the workout.
  * Would show picture of gym equipment or free weights or picture of person doing specified workout based on body resistance.
  * Would like to include warning of how not to use workout machine or incorrect ways of doing body resistant workout.


### List the absolute minimum features the project requires to meet this purpose or goal:
 * Allow user to choose workout with Gym Equipment, Free Weights or Body Resistance
 * Provide guide (visual, verbal or both) on how to use Gym Equipment, Free Weights or Body Weight Exercise

### What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and yourlanguage) will you use to create this MVP? List them all here. Be specific.
* React JS
*  Firebase

### If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

* Visual muscle Anatomy - So user can click muscle group rather than selecting by Name of muscle group.
* User Login - Allow user to login and track their workout history.
  * Sign-in with google or facebook account.
* Use D3 or something similar to graph workout history
* Integrate workout
* EXTREME REACH GOAL
  * Leverage the following API’s to allow phone to sync with gym equipment
    * https://www.wahoofitness.com/development-api
    * https://lifefitness.com/home/products/lfconnect-app#developers

### What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
* Extreme Reach Goal
  * https://www.wahoofitness.com/development-api
  * https://lifefitness.com/home/products/lfconnect-app#developers




### July 20th - Work history & Research

* Finish generic cover letter - model after completed cover letter made for <b>Bigleaf</b>
* Merge react-native branch into master
  * Delete Angular files from parent directory
* Buy domain adriancodes.com
  * research using portfolio or building own site.

<br>
<br>
<br>
<br>
<br>
<br>
















#### By Adrian Messado
[Adrian Messado](https://github.com/adrianmess)

## Description

The Intensity web application is intended to make it easy for any user to achieve their workout goals at home or in a gym without the need for a trainer. It will allow the user to customize their workout by machine, weights, or body resistant. The user also chooses whether they want to build muscle, tone muscle or strengthen muscle. They will then be given a visual of the workout equipment or workout machine or weights. They will also receive a description of how many reps to do and how much weight or resistance to use if it applies. The user will be able to store previous workouts and the description of the workout, which includes the weight or resistance number used, how many reps, duration and or length (when running)

Also will help prevent people from using workout machines incorrectly, which can lead to them being recorded and turned into a meme. Ref to image below for example.

<table>
    <tr>
    <td><img src="https://media.giphy.com/media/vYNtXYafKufde/giphy.gif" height="200"></td>
    <td><img src="https://media.giphy.com/media/11RRDZCnvvyZdC/giphy.gif" height="200"></td>
    <td><img src="https://media.giphy.com/media/hpqeJ2vEHOMTe/giphy.gif" height="100"></td>
  </tr>
</table>

<div style="height: 15px;"> </div>


#### Options
* Choose which muscle groups they want to work on.
* Choose between the following 3 workout types:
  1. Building Muscle
  1. Toning Muscle
  1. Strengthening Muscle
* Choose if they want to use a machine, free weights or body resistance.
  * A picture of what the machine looks like and a description of the machine, how to use it, how not to use it will be displayed.

<div style="height: 15px;"> </div>

##### Possible options of allowing users to choose muscle groups visually.
<table>
<tr>
  <td>
  <p> </p>
  <img src="/src/assets/img/github/anatomy-ex-1.jpg">
  </td>
  <td>
  <img src="/src/assets/img/github/anatomy-ex-2.jpg" height="275">
  </td>
</tr>
</table>



<div style="height: 50px;"></div>

###### Protype early preview:<br>
<img src="/src/assets/img/github/small-preview.gif">

## Research

#### Different Training Methods
    Strength Training
    Muscle Building
    Muscular Endurance


#### Major Muscle Groups

11* Major Muscle Groups

    Quadriceps
    Hamstrings
    Calves
    Chest
    Back
    Shoulders
    Triceps
    Biceps
    Forearms
    Trapezius
    Abs



## User Story
As a user I want to be able to sign-up or sign-in with my social media accounts.

As a user I want to find a workout based on the muscle group

As a user I want to choose whether the workout should be for building muscle, strength training or maintenance.

As a user I want the app to tell me how many reps to do on a machine based on if i want to build muscle, strength train, or for maintenance/endurance.

As a user I want to be able to either choose a workout by machine or by muscle group i want to work on.

As a user I want to be able to store what weights i used on the machine

## Specifications
###NOTICE: This project is currently running in Angular but I plan on switching it to REACT over the next couple of weeks.
<!-- ## Setup/Installation Requirements
* To view project code, _clone repository from_
* To view project, _open in web browser_
  *  https://adrianmess.github.io/intensify -->


#### Pre-requisites

### NPM & Node Installation
* Install Node.js
  * https://www.npmjs.com/get-npm


  * Install Angularcli

      $ npm install -g @angular/cli@1.6.5


### Clone
  * Clone this repo to your local machine from: https://github.com/adrianmess/intensify

        $ git clone https://github.com/adrianmess/intensify

Open **Intensify** folder from terminal.


### NPM Installation
      $ npm install

## Start Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* The following command will start the server and automatically open the browser.

      $ng serve --open

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known Bugs
  * No known bugs at this time.


## Technologies Used

* HTML
* CSS
  * Bootstrap _(Bootstrap 4.1)_
* JavaScript
  * JQuery _(jQuery 3.2.1)_
* Node.js
* Webpack
* ESLint
* Jasmine
* Karma
* Babel

## License

* GPL

Adrian Messado © 2018

<link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.css"><style>


.flex-container {
  display: flex;
}

</style>
