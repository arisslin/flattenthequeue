# Flatten the queue

An app to see the degree of capacity utilisation at supermarkets.

## Table Of Contents

1. [Tech Stack & Toolchain](#tech-stack)
2. [Setup](#setup)
3. [Run the app in development mode on your local machine](#dev-mode)
4. [Available Scripts](#scripts)
5. [Git Actions](#git-actions)

## <a name="tech-stack"></a> Tech Stack & Toolchain

- [Create React App](https://github.com/facebook/create-react-app)
- [styled-components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [Husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
- [storybook](https://storybook.js.org/)

## <a name="setup"></a> Setup

Clone this repository to your local machine:

`git clone git@github.com:arisslin/flattenthequeue.git`

Make sure npm is installed on your local machine. Then switch into the repo and install the projects dependencies.

```
cd flattenthequeue
npm i
```

### VS Code

If you use VS Code, you can use `Eslint` and `Prettier` as an extension.

In genereal we recommend you to edit your settings in the `settings.json`. Add or adjust following lines between the curly braces in your editor:

```
{
  "editor.formatOnSave": true,
  "[javascript]": {
      "editor.formatOnSave": false
  },
  "eslint.alwaysShowStatus": true,
  "prettier.disableLanguages": [
      "js"
  ],
  "prettier.requireConfig": true
}
```

## <a name="dev-mode"></a> Run the app in development mode on your local machine

Make sure you are in the repos root folder. Then run the npm start script.
Therefor type following command into your console:

> `npm start`

You can see the app in your browser at http://localhost:3000.

## <a name="scripts"></a> Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.<br/>

This will generate and test snapshots as well. When a snapshot test fails

- and you modified the component under test or it's story: generate a new snapshot either by running `npm run update-snapshot`, interactively via the jest test runner or the vscode plugin
- else: you introduced a bug ;) go and fix it!

### `npm run update-snapshot`

Discards all snapshots and generates new ones.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run eslint`

Eslint checks all `*.js` files in the `src` folder for problems and logs them in the console.

### `npm run eslint:fix`

Eslint checks all `*.js` files in the `src` folder for problems and automatically fix them.

## <a name="git-actions"></a> Git Actions

The repository comes with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged). The tools will ensure to run different scripts at specific **git commands**. This will ensure to format and check the code for problems before commit or push it.

### `pre-commit`

Triggers Eslint to check all `*.js` files in the `src` folder for problems and automatically fix them.

If the fixes fail the commit will not be done and the fix has to be done manually.

### `pre-push`

Trigger Eslint to check all `*.js` files in the `src` folder for problems and logs them in the console.

If the check finds problems the push will not be done and the problems have to be fixed manually.
