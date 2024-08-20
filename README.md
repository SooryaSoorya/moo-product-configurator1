# MOO Product Configurator for Hardcover Notebook

This project is a configurable product application built using React and TypeScript. The user can select different options (such as notebook color and layout), and a summary of the selected options is dynamically updated in real-time.
This is a simple **React** application that allows users to configure a **Hardcover Notebook** by selecting different options such as cover color and page layout. The configurator dynamically updates a summary showing the user's selections and the total price of the notebook.

## Built With

React - JavaScript library for building user interfaces.

TypeScript - Typed superset of JavaScript that compiles to plain JavaScript.

Styled-Components - For styling React components.

Jest - JavaScript testing framework.

React Testing Library - For testing React components.

## Features

- **Select Cover Color**: Choose from a variety of colors.
- **Select Page Layout**: Choose between lined or dotted page layouts.
- **Real-Time Summary**: The selected options are displayed in real-time.
- **Dynamic Pricing**: The total price changes based on the selected options.
- **Responsive UI**: Styled with **styled-components** for modern, flexible UI design.

## Project Structure

```bash
.
├── public/               # Public directory for assets (JSON data, images)
│   └── product.json       # Sample JSON file with product data
├── src/                  # Main source folder
│   ├──── components/
│   │   ├──── ProductConfigurator.tsx  # Main product configurator component
│   │   ├──── Summary.tsx              # Component displaying the summary of selected options
│   ├──── tests/             # Test folder containing unit and behavioral tests
│   │   ├──── ProductConfigurator.test.tsx  # Tests for the ProductConfigurator
│   │   ├──── Summary.test.tsx  # Tests for the ProductConfigurator
│   ├──── data
│   │   ├──── products.json  # Sample JSON file with product data**
│   ├──── App.tsx           # Main App component
│   ├──── index.tsx         # Entry point of the application
│   ├──── styles/           # Folder for styled-components if applicable
├── README.md             # This README file
├── package.json          # Project dependencies and scripts
├── vite.config.ts        # Vite configuration file
└── tsconfig.json         # TypeScript configuration

```

\*\* Find the JSON file and other assets here https://github.com/moo-print/frontend-tech-test-data.

## Project Setup

Project directory:

- Visit the live application and view the code: : https://codesandbox.io/p/devbox/moo-product-configurator-forked-f6pw47
  or
- Access the code from the repository: https://github.com/SooryaSoorya/moo-product-configurator1.git

```bash
git clone https://github.com/SooryaSoorya/moo-product-configurator1.git
```

````

### Prerequisites

Before running this project, Ensure that you have the following installed:

Node.js (version 14.x or later)
npm (version 6.x or later)

## Running the application

Navigate to the project directory:: https://codesandbox.io/p/devbox/moo-product-configurator

### Run the following command to install all the required packages:

```bash
npm install
````

### Project Configuration

If needed, you can modify the JSON data located in the src/data/productOptionsData.json file to adjust the available product options.

### Running the Project

To start the development server:

```bash
npm run dev
```

This will launch the app in development mode. You can view it in your browser at:

[localhost](http://localhost:5173/)
The app will automatically reload if you make changes to the code.

### Testing

The project includes unit and UI tests using Jest and React Testing Library.

To run the tests:

```bash
npm run test
```

This will launch the test runner in interactive watch mode.

### Building the Project

To create a production build:

```bash
npm run build
```

#### Notes:

Build Output: The production build will be optimized with minimized JavaScript, CSS, and assets to ensure faster loading times and better performance.
Deployment: Once the production build is ready, you can deploy the contents of the dist/ folder to any static hosting platform like Netlify, Vercel, or even traditional server environments.
Let me know if you need more information or further help!

Coverage:
To generate a test coverage report:

```bash
npm run coverage
```

The report will be saved in the coverage folder.

#### Acknowledgments

Project uses:

- React
- Vite
- Vitest
- Styled-components

# Key Additions:

- \*\*code Documentation and Comments: To ensure clarity and ease of understanding, comments have been added throughout the components in this project. These comments explain the purpose and logic behind different sections of the code, making it easier for other developers to follow along and contribute to the project.
- **setupTests.ts**: This file sets up global utilities like `jest-dom` for easier testing with **Vitest** and **React Testing Library**.
- **Vitest Configuration**: The `vite.config.ts` now includes a reference to `setupTests.ts` to ensure the setup is properly initialized when running tests.

## Vite and Vitest

### Vite

Vite is the build tool used for this project. It provides a fast and efficient development environment optimized for modern front-end frameworks. Vite achieves this speed by leveraging native **ES Modules** (ESM) during development and **Rollup** for optimized production builds.

#### Key Benefits of Using Vite:

- **Blazing Fast Development**: Vite's instant server start and Hot Module Replacement (HMR) make development much faster.
- **Efficient Production Builds**: For production, Vite bundles the application using **Rollup**, offering features like tree-shaking, code-splitting, and optimized output.
- **Modern Tooling**: It comes with sensible defaults and modern features that improve both development and production.

#### Vite Commands:

- **Development Mode**: Start the development

Let me know if you need any more details or further customization!
