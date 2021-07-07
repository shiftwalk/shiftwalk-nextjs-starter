# Next Tailwind Framer Motion Boilerplate
Demo: [https://sg-next-tailwind-motion.vercel.app/](https://sg-next-tailwind-motion.vercel.app/)

A simple [Next.js](https://nextjs.org/) starter kit with [TailwindCSS](https://tailwindcss.com/) (JIT) and [Framer Motion](https://www.framer.com/motion/) preconfigured.

## ✨ Features
- [Next](https://nextjs.org/) 11
- [Tailwind](https://tailwindcss.com/) (With [JIT](https://tailwindcss.com/docs/just-in-time-mode) mode enabled)
- Custom [PostCSS](https://postcss.org/) setup to allow for `@import` and simple CSS nesting
- [Framer Motion 4](https://www.framer.com/motion/) (With `LazyMotion` setup for smaller bundle sizes)
- [Preact](https://preactjs.com/) configured instead of React for smaller bundle size*
- SEO preconfigured with [next-seo](https://github.com/garmeeh/next-seo)
- [Module Aliasing](https://nextjs.org/docs/advanced-features/module-path-aliases) with `jsconfig.json` - allows you to use `@/components/...@/public etc...` instead of relative paths)
- Feature branch with [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) configured for smooth, lerp based page scrolling

_*To remove Preact and switch back to React simply remove the code in `next.config.js`_

## 🚀 Quick start

1.  **Clone the repo**

    ```sh
    git clone https://github.com/samuelgoddard/next-tailwind-motion.git
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and install the local dependencies.

    ```sh
    npm i
    ```

    then

    ```sh
    cd next-tailwind-motion/
    npm run dev
    ```

3.  **Open the source code and start editing!**

    Your site is will be running at `http://localhost:3000`

## 🗄 Directory Structure
```
|-- components
    |-- container.js *// A simple container component to wrap areas in a max width*
    |-- fancyLink.js *// A simple wrapper around `next/link`
    |-- footer.js *// Example footer component*
    |-- header.js *// Example header component*
    |-- layout.js *// Layout component that can be used to wrap your pages in a global layout*
|-- helpers
    |-- seo.config.js *// default SEO configuration helper, imported in `pages/_app.js`*
    |-- transitions.js *// re-usable framer motion transition helper with a basic 'fade' transition to get started*
|-- pages
    |-- _app.js *// Includes default SEO component & Framer motion AnimatePresence init*
    |-- _document.js *// Default Next document component*
    |-- about.js
    |-- index.js
|-- public *// Next public assets*
|-- styles
    |-- _fonts.css *// custom webfont styles*
    |-- _typography.css *// custom typographical styles*
    |-- main.css *// Tailwind init and custom css imports*
|-- .gitignore
|-- jsconfig.json *// module aliasing*
|-- postcss.config.js *// Tailwind, CSS import, CSS nesting init*
|-- next.config.js *// Prefer Preact to React*
|-- package.json
|-- README.md
|-- tailwind.config.js
```
