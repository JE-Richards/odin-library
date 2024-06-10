# Personal Library: An Intermediate JavaScript Project

## Table of Contents
1. [Overview](#overview)
2. [Project Scope](#project-scope)
3. [The Library Webpage](#the-library-webpage)
4. [Known Bugs](#known-bugs)
5. [Future Considerations](#future-considerations)
6. [Acknowledgements](#acknowledgements)

## Overview
This is a mini JavaScript project from the [JavaScript course](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript) hosed by [The Odin Project](https://www.theodinproject.com/).

The aim of this project is to create a simple website that allows a user to input books they have read or want to read. This information is then stored and displayed on the webpage.

This is my attempt to complete this project.

## Project Scope
This project will be improved upon throughout the course. Each time, this will slightly change the scope of the project. 

### Initial Scope:
- **Completed on:** 10/06/2024
- [x] Project is to use HTML, CSS, and JavaScript.
- [x] All books input are to be stored in an array
- [x] Write a functon to display each book in the array.
- [x] Include a button the user can click that brings up a form for them to input data on the books.
- [x] Within the book display, add a button to allow the user to delete the book.
- [x] Within the book display, add a toggle for whether the book has been read or not.
    - [x] The toggle changes the data in the underlying array.

## The Library Webpage
To use the library, please visit the following website: https://je-richards.github.io/odin-library/

## Known Bugs
- When submitting the form for adding a new book, the following error is thrown in the console: 'An invalid form control with name=" is not focusable'
    - The bug has appeared since introducing the `required` attribute onto several form inputs. Removing `required` solves the issue, however, the desired functionality will then be lost.
    - The bug doesn't prevent the form from functioning for what is needed, therefore `required` has been left on the input.

## Future Considerations
- The form contains an interactive star rating system (built with radio buttons). It would be good to extend both the stars and the functionality to the table display on the webpage.
- The checkboxes used in both the form and table don't align with the webpage theme. 
    - Spent a couple of hours trying to implement a custom checkbox, but had trouble getting it to function correctly within the dialog pop-up. Would be good to revisit and resolve this.
- Add additional client-side validation to the form.
    - Current validation is minimal in the form of minimum values on text input and ensuring non-negative numbers on number inputs.
    - Additional validation could improve the robustness of the form. Some to consider would be:
        - Prevent non-characters from being input into the author's name field.
        - It's currently possible to input the same book multiple times. Validation to prevent duplication would resolve this.

## Acknowledgements
- The star rating system used within the form was taken from Neil Pomerleau's codepen: https://codepen.io/neilpomerleau/pen/wzxzQM?editors=1111
