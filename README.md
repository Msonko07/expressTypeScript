[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][ci-image]][ci-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]

```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(5000)
```

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- [Git] - [Download & Install Git] (https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
- [Node.js] - [Download & Install Node.js] (https://nodejs.org/en/download/) and the npm package manager.
  Node >= 14.15.1, npm >= 6.14.8
- [MongoDB] - [Download & Install MongoDB] (https://www.mongodb.com/download), and make sure to change the default port (27017).

```bash
$ npm install express
```

Follow [our installing guide](http://expressjs.com/en/starter/installing.html)
for more information.

## Features

  * Robust routing
  * Focus on high performance
  * Super-high test coverage
  * HTTP helpers (redirection, caching, etc)
  * View system supporting 14+ template engines
  * Content negotiation
  * Executable for generating applications quickly

## Docs & Community

  * [Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/expressjs/expressjs.com)]
  * [#express](https://webchat.freenode.net/?channels=express) on freenode IRC
  * [GitHub Organization](https://github.com/expressjs) for Official Middleware & Modules
  * Visit the [Wiki](https://github.com/expressjs/express/wiki)
  * [Google Group](https://groups.google.com/group/express-js) for discussion
  * [Gitter](https://gitter.im/expressjs/express) for support and discussion

**PROTIP** Be sure to read [Migrating from 3.x to 4.x](https://github.com/expressjs/express/wiki/Migrating-from-3.x-to-4.x) as well as [New features in 4.x](https://github.com/expressjs/express/wiki/New-features-in-4.x).

### Security Issues

If you discover a security vulnerability in Express, please see [Security Policies and Procedures](Security.md).

## Quick Start

  The quickest way to get started with express is to utilize the executable [`express(1)`](https://github.com/expressjs/generator) to generate an application as shown below:

  Install the executable. The executable's major version will match Express's:

```bash
$ npm install -g express-generator@4
```

  Create the app:

```bash
$ express /tmp/foo && cd /tmp/foo
```

  Install dependencies:

```bash
$ npm install
```

  Start the server:

```bash
$ npm start
```

  View the website at: http://localhost:5000

## Philosophy

  The Express philosophy is to provide small, robust tooling for HTTP servers, making
  it a great solution for single page applications, websites, hybrids, or public
  HTTP APIs.

  Express does not force you to use any specific ORM or template engine. With support for over
  14 template engines via [Consolidate.js](https://github.com/tj/consolidate.js),
  you can quickly craft your perfect framework.
  
  
  ## Server configuration

* Create an `.env` file from the` .env.example` file and give the values ​​of the environment variables

## Examples

  To view the examples, clone the Express repo and install the dependencies:

```bash
$ git clone https://github.com/Msonko07/expressTypeScript.git/ --depth 1
$ cd expressTypeScript
$ npm install
```

  Then run whichever example you want:

```bash
$ node examples/content-negotiation
```

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## Contributing

[Contributing Guide](Contributing.md)

## Support
This project is based on the Express framework.

## Architecture

```
 __src
    |__posts/ - Controllers, middlewares and routes folder
    |__config/ - all configurations
    |__auth/ - all auth configurations
    |__utils/ - helpers functions
    |__main.ts - App entry point
 __app.ts - App entry point
 __test/ - contains all tests logic
 __.env
 __package.json - contains project dependencies

## Stay in touch

- Author - [Mouhamed SONKO](https://github.com/Msonko07)
- Website - [TechFolio]()


## License

  [MIT](LICENSE)

[ci-image]: https://img.shields.io/github/workflow/status/expressjs/express/ci/master.svg?label=linux
[ci-url]: https://github.com/expressjs/express/actions?query=workflow%3Aci
[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express
[downloads-image]: https://img.shields.io/npm/dm/express.svg
[downloads-url]: https://npmcharts.com/compare/express?minimal=true
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/express/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express
[coveralls-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master
