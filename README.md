![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

# Adalab Web Starter Kit

Ahoy! This is our Starter Kit built with **Node.js and Vite**. What is a Starter Kit? It’s a **project template with preinstalled, preconfigured features**.

This kit includes an HTML templating engine, the SASS preprocessor, a local development server, and much more. It helps us work more comfortably by automating many tasks.

Inside the kit you’ll find three kinds of files and folders:

* Files in the repo root—like `vite.config.js`, `package.json`, etc.—contain project configuration and generally don’t need to be modified (except this `README.md`, where you describe your own project).
* The `src/` folder holds your web app’s source files (HTML, CSS, JS…).
* The `public/` folder contains static assets such as images, fonts, favicon, and legacy JavaScript libraries (e.g. jQuery).
* The `docs/` folder is generated automatically when you build or run the project. Vite processes files from `src/` and `public/`, then outputs them into `public/` and `docs/`.

## Quick Start Guide

> **NOTE:** You need [Node.js](https://nodejs.org/) version 14 or higher to work with this Starter Kit.

### Every time you start a new project:

1. **Create your own GitHub repository.**
2. **Download this Starter Kit from GitHub.**

   * We don’t recommend cloning this repo directly, because you won’t be able to push commits to it.
3. **Copy all files** from the Starter Kit into the root of your new repo.

   * Don’t forget hidden files (those starting with a dot).
   * If you cloned the kit, do **not** copy the `.git` folder, or you’ll overwrite your repo’s history.
4. **Open a terminal** at your repo root.
5. **Install dependencies** by running:

   ```bash
   npm install
   ```

### To start the development server:

Once dependencies are installed, start the project (you need to do this every time you code) by running:

```bash
npm run dev
```

That command will:

* **Open a browser window** showing your web app (similar to VS Code Live Server).
* **Watch** all files in `src/` and auto-refresh the page in the browser whenever you change something.
* **Process** your HTML, SASS/CSS, and JS:

  * Compile SASS into CSS.
  * Bundle or combine HTML partials into final HTML files.

After `npm run dev`, you can edit anything inside `src/` and enjoy live reloading.

### To publish on GitHub Pages:

Build the production version with:

```bash
npm run build
```

Then:

1. **Push the newly generated `docs/` folder** to your repo.
2. Go to your repo’s **Settings** → **Pages**.
3. Select the **main branch** and the **/docs folder** as the source.
4. Save, and your site will be live!

Alternatively, you can run:

```bash
npm run push-docs
```

or

```bash
npm run deploy
```

These scripts build the project and push `docs/` in one step. Check `package.json` to see how they work.

## Folder Structure

Here’s how the folders are organized:

```
src
 ├─ api        # copied to public/api/
 |   └─ data.json
 ├─ images
 |   └─ logo.jpg
 ├─ js         # concatenated into public/main.js
 |   ├─ main.js
 |   └─ events.js
 ├─ scss
 |   ├─ components
 |   ├─ core
 |   ├─ layout
 |   └─ pages
 └─ html
     └─ partials
```

> **NOTE:** The HTML and SASS partials provided are just examples. Use whatever structure you like and delete what you don’t need.

## Missing Something?

Want the kit to do more? Open an issue or send us a PR!
