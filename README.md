# TU-Sofia PWA

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/medium.svg)](https://astro.build)

![application splash](https://raw.githubusercontent.com/tu-sofia-lessons/TU-Sofia-PWA/refs/heads/main/.github/application.webp)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
.
├── src
│  ├── assets -- Mostly static assets (located in src instead of public because of optimizations)
│  ├── components -- UI components (astro)
│  ├── content -- Blog items
│  ├── icons -- SVG icons for the 'astro-svg' integration
│  ├── layouts -- The base Layout and BlogLayout files are located here
│  ├── lib -- Lib folder containing helpful utils for the application
│  ├── pages -- The routes as files system
│  ├── styles -- Contains main css file and tailwind classes
│  ├── env.d.ts -- Types
│  ├── pwa.ts -- PWA worker
│  └── vite-env.d.ts -- Types
├── astro.config.ts -- AStro config
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

If you need more help or have faced an a problem, open an issue describing the problem and tag [@Fractal-Tess](https://github.com/Fractal-Tess)
