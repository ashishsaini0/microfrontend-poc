# microfrontend-poc reviewer notes

## Architecture
This codebase implements a micro-frontend architecture using Module Federation with Webpack. It consists of three main applications: a Host App that integrates two micro-frontends (Chat App and Email App). Each app is independently deployable and can dynamically load its respective micro-frontend modules.

## Conventions
- **File Structure**: The project is organized into three distinct directories: `host-app`, `chat-app`, and `email-app`, each containing its own configurations, source files, and dependencies, as described in the `README.md` files located in each app subdirectory.
- **Webpack Configuration**: Each application uses a `webpack.config.js` file to set up Module Federation. The `chat-app/webpack.config.js` and `email-app/webpack.config.js` files expose their respective components (`ChatApp` and `EmailApp`) using the `ModuleFederationPlugin`.
- **TypeScript Usage**: TypeScript is preferred for type safety. All applications enforce strict compilation options in their `tsconfig.json` files, incorporating settings such as `"strict": true` and `"noFallthroughCasesInSwitch": true`, ensuring high code quality.
- **CSS Modules**: The applications make use of CSS modules to scope styles locally. Both `chat-app` and `email-app` include rules in their webpack configurations to handle `.module.css` and global CSS files appropriately.
- **Shared Libraries**: React and React DOM are set as shared dependencies in the Module Federation setup to ensure only one instance is loaded, which is crucial for avoiding version mismatches.

## Intentional non-standard choices
- **Ejecting Create React App**: While `chat-app`, `email-app`, and `host-app` are bootstrapped with Create React App, the team decides not to utilize the `npm run eject` option, which emphasizes keeping the configuration manageable without losing default settings.
- **Dynamic Ports in Development**: Each app runs on a different port (`3000`, `3001`, and `3002`). This decision is likely to avoid conflicts during development and is clearly documented in the setup instructions.

## Watch out for
- **Dependency Management**: Given the versioning of React and related libraries, be cautious of potential issues arising from mismatched versions if libraries are updated in one app but not others.
- **TypeScript Errors**: With strict TypeScript configurations in place, ensure that any new code follows the same strict typing practices to prevent build breaks.
- **Bundling Issues**: When modifying the shared libraries in Module Federation, double-check the `shared` configuration to avoid runtime errors caused by multiple versions of dependencies being loaded.