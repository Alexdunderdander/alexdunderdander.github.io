# React + TypeScript + Vite

A minimal React project scaffolded with Vite and TypeScript. This repo includes:

- **React 19** with the React Compiler enabled
- **Vite 7.x** for fast development and build
- **TypeScript 5.9** strict configuration
- ESLint setup with basic rules for linting `.ts`/`.tsx` files

---

## 🚀 Getting Started

Follow the steps below to set up the project locally.

1. **Clone the repository**

   ```bash
   git clone https://github.com/alexdunderdander/alexdunderdander.github.io.git
   cd alexdunderdander.github.io
   ```

2. **Ensure you have Node.js installed**
   - Recommended version: **18.x or later** (tested with Node 20)
   - Verify with:
     ```bash
     node -v
     npm -v
     ```

3. **Install dependencies**

   ```bash
   npm ci
   ```

   This will install the packages listed in `package.json` at the locked versions.

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

5. **Build for production**

   ```bash
   npm run build
   ```

   Output will be generated in the `dist/` directory.

6. **Deploy**
   - A simple `gh-pages` deploy script is provided:
     ```bash
     npm run deploy
     ```
   - That will publish the `dist/` folder to GitHub Pages.

---

## 📦 Packages & Versions

The core dependencies used by this project are pinned in `package.json`:

| Package                       | Version | Purpose                                 |
| ----------------------------- | ------- | --------------------------------------- |
| `react`                       | ^19.2.0 | UI library                              |
| `react-dom`                   | ^19.2.0 | React DOM renderer                      |
| `vite`                        | ^7.3.1  | Build tool                              |
| `@vitejs/plugin-react`        | ^5.1.1  | React plugin for Vite                   |
| `typescript`                  | ~5.9.3  | TypeScript compiler                     |
| `eslint`                      | ^9.39.1 | Linter                                  |
| `@eslint/js`                  | ^9.39.1 | ESLint configuration                    |
| `eslint-plugin-react-hooks`   | ^7.0.1  | Hooks-specific lint rules               |
| `eslint-plugin-react-refresh` | ^0.4.24 | Fast Refresh lint integration           |
| `babel-plugin-react-compiler` | ^1.0.0  | Enables React Compiler during dev/build |
| `gh-pages`                    | ^6.3.0  | Deploy to GitHub Pages                  |
| `@types/*`                    | various | Type definitions for Node/React etc.    |

_Note:_ Minor/patch updates to dev dependencies are safe but make sure to re-run `npm ci` and test before committing.

---

## ⚙️ ESLint & TypeScript

For a production application, you may want to enable type-aware lint rules. See the configuration section below to expand the ESLint setup.

> The existing `eslint.config.js` in the repo already provides a starting point. You can plug in `tseslint.configs.recommendedTypeChecked` or stricter profiles as shown earlier.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
