# selmachessapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Documentaion

Purpose of creating this application:

This application is an attempt to introduce the game of chess to individuals that are not familiar with the game.

```
Tech Stack:
```

Frontend: <br />
&nbsp;&nbsp;&nbsp;&nbsp;Vue <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notable Node Dependencies:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vuetify, Vuex <br />

Testing: <br />
&nbsp;&nbsp;&nbsp;&nbsp;Unit:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jest<br />

Backend:<br />
&nbsp;&nbsp;&nbsp;&nbsp;AWS<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cognito, Lambda<br />

```
Notable Features:
```

A toolbar that displays different color themes.<br />
This includes a dark/light mode and a secondary color that's relative to the four high schools in Selma, Alabama. <br />

```
Issues:
```

January 10th, 2021:<br />
&nbsp;&nbsp;&nbsp;&nbsp;The leftmost column of a table that appears inside a v-dialog is misaligned.<br />
&nbsp;&nbsp;&nbsp;&nbsp;Possible Solution: Implement the table using the dataTables module; https://datatables.net/<br />