# Restaurant Reviews Web App
---
#### _responsive, accessible, offline-first_

## Project Overview:

Static design that lacks accessibility converted into mobile-ready web application, responsive on different sized displays and accessible for screen reader use. It includes a service worker which give seamless offline experience to the user.

## Service Worker File System

| Type       | Folder | Format         | Role |
| :--------- | :----- | :------------- | :--- |
| JavaScript | root   | sw.js          | Service worker itself |
| JavaScript | \js    | sw_setup.js    | Loading and registering |


### Project Rubric

Your project follows the [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view).

## The server / How to run the app?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer.
2. In a terminal, use `python -m http.server 8000`
3. To install Python navigate to Python's [website](https://www.python.org/). For Windows systems, Python 3.x is installed as `python` by default.
4. With your server running, visit the site: `http://localhost:8000`
5. If you get a MIME error with the service worker, please [contact me](mailto:rotem.abir@gmail.com).

### Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/), both are free to use.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code.
