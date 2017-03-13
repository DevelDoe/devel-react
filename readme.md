<!--
@Author: Andreee Ray <develdoe>
@Date:   2017-03-10T00:42:05+01:00
@Email:  me@andreeray.se
@Filename: readme.md
@Last modified by:   develdoe
@Last modified time: 2017-03-13T21:17:25+01:00
-->



# DevelStrap

Bootstrapping react app development, now with Redu

## Bundling

This project is bundling with webpack and the usual plugins, like babel to use ES2015.

## Testing

There is also a comprehensive tests suit included to get you up and running. We are using karma, mocha and expect as our suit.
In order to learn how to set up your test, beside the included examples,  please visit [mjackson/expect](https://github.com/mjackson/expect).

## Redux

The redux implementation is ready to use with redux devtools extension in chrome and you have 3 different type of states to start you up:

* Simple text field
* An array
* api call

## Serving

npm start uses supervisor, install it globaly (as I do), or localy.

----

### Install

```
npm install
```

```
webpack
```

```
npm test
```

```
node server.js
```
