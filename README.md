# Sinapis calculator Server



## Table of Contents

- [Prerequisites](#prerequisites)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Directory Structure](#directory-structure)
  - [Available Routes](#available-routes)
  - [Available Scripts](#available-scripts)
- [License](#license)

## Prerequisites

You need to install [Node.js](https://nodejs.org/en/download/) on your machine.

## Features

- [TypeScript](https://www.typescriptlang.org/) as Language

- Framework: [Express.js](https://expressjs.com/)

- Linting and formatting code using [TSLint](https://palantir.github.io/tslint/) & [Prettier](https://prettier.io/)

- Easy configuration of environment variables thanks to [dotenv](https://github.com/motdotla/dotenv)

- [EditorConfig](https://editorconfig.org/)
  for maintain consistent coding style

- [Morgan](https://github.com/expressjs/morgan)
  for logging request

- Using the last ES6 / ES7 features as `async-await`

- Versioned routes for better scalability

## Getting Started

### Installation

1. install the dependencies using `npm install` or `npm i`

2. Rename the file `.env.example` to `.env`, then you need to configure the file `config.ts` located in `src/config`

3. Start the app using `npm run dev`

4. After that, go to: `http://localhost:3000/v1/calculator/sum`

### Directory Structure

```
├── src
│   ├── apiV1
│   │   ├── calculator
│   │   │   └── calculator.controller.ts
│   │   │   └── calculator.helpers.ts
│   │   │   └── calculator.route.ts
│   │   └── index.ts
│   ├── config
│   │   ├── config.ts
│   ├── helpers
│   │   ├── errorHandler.ts
│   ├── .env.example
│   ├── App.ts
│   └── index.ts
├── .editorconfig
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── tslint.json
```

### Available routes

| Method   | Resource        | Description                                                                                                                                 |
| :------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `POST`   | `/calculator/sum`     | It sums two numbers. You need to specify in the body the following attribute(s): `numbers: Array<number>`.                    |

### Available scripts

- `build` - Transpile TypeScript to ES6,
- `lint` - Lint your TS code,
- `dev` - To run the app without transpile to ES6,
- `clean` - Remove dist, node_modules, coverage folders,
- `start` - Run the transpiled app
- `prod` - Build & run the transpiled app

## License

MIT © Mudassar Ali
