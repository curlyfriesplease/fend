# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Introduction

This project is an exercise within the Udacity.com "Front End Developer" Course. It serves no functional purpose other than as a learning tool.


## Explanation

#### HTML

The HTML content has had little change from the original source files - I have changed section headers to be types of dog, and I have added a "Main" button to the navbar.

#### JS

Most of the changes have been to app.js. These are:
<ol><li>Finding all the Sections within the document, and adding buttons to the navbar for them</li>
<li>Make navbar buttons link to their relevant sections, smooth scroll down to them</li>
<li>Smooth scroll back to the top of the page if 'Main' is clicked</li>
<li>Hiding the navbar after 5 seconds, if the user has been inactive</li>
<li>Show the navbar again if the user scrolls or clicks again</li>
<li>Changing the CSS of the section being viewed, to provide a different background colour to highlight it. The is using the Intersection Observer API to detect when the section is fully in view.</li>
<li>Changing the CSS of the navbar button, so that the relevant button is highlighted when its corresponding section is being viewed</li>
<li>An event listener for the DOM content loading, to then create the navbar and the Intersection Observers.
</ol>

#### CSS

Changes:
<ol><li>The navbar buttons will become smaller when viewed on mobile</li>
<li>Background color and border for active section</li>
<li>Background color and border for active navbar button</li>
