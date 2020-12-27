# Example TypeScript Package ready to be published on npm

Example TypeScript Package ready to be published on npm.

It generates CommonJS (in **cjs** folder), ES Modules (in **esm** folder), bundled and minified UMD (in **umd** folder), as well as TypeScript declaration files (in **types** folder).

It uses yarn, TypeScript compiler, jest, webpack, eslint, prettier, and primarily designed to be used with VS Code.

## Development

```bash
yarn
yarn build
```

## Notes

* It uses yarn but you can easily switch to npm, of course (remember to change `scripts`.`build` in **package.json**)
  * Whether you use npm as your package manager ≠ Whether you can publish to the npm registry

* Works fine in VS Code. Consider installing VS Code extensions [ES Lint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). In my configuration **.eslintrc** and **.prettierrc** cooperate perfectly
  * You probably already know that: the shortcuts for formatting of a code file are <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> (Windows); <kbd>Shift</kbd> + <kbd>Option (Alt)</kbd> + <kbd>F</kbd> (MacOS); <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> (Linux)

* See `scripts`.`build` in **package.json** for other predefined script commands
