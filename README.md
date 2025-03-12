# React Vite Remix MUI

This is a Vite-powered project that integrates Remix with Material-UI (MUI) for a modern React-based web application.

## Features

- **Vite**: Fast development server and optimized build system.
- **Remix**: Full-stack React framework for enhanced performance and routing.
- **React** – A powerful library for building user interfaces
- **Material-UI (MUI)**: UI library for designing sleek and responsive interfaces.
- **TypeScript**: Strongly-typed JavaScript for better development experience.
- **ESLint & Prettier**: Linting and formatting support for clean and maintainable code.
- **Tailwind CSS**: Utility-first CSS framework for quick styling.

## Installation

Ensure you have Node.js (>=20.0.0) installed.

```sh
# Clone the repository
git clone https://github.com/your-repo/vite_remix_mui.git
cd vite_remix_mui

# Install dependencies
npm install
```

## Development

To start the development server:

```sh
npm run dev
```

The server will start at [http://localhost:3000](http://localhost:3000).

## Build

To create a production-ready build:

```sh
npm run build
```

## Start Production Server

After building, start the server with:

```sh
npm run start
```

## Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Compiles the project for production.
- `npm run start` - Serves the built application.
- `npm run lint` - Runs ESLint to check for coding errors.
- `npm run typecheck` - Runs TypeScript compiler to check types.

## Technologies Used

### Core Dependencies

- **React** - UI library for building interactive UIs.
- **Remix** - Full-stack web framework for React applications.
- **Vite** - Next-generation frontend tooling for fast builds and development.
- **Material-UI (MUI)** - Component library for modern UI design.

### Dev Dependencies

- **TypeScript** - Strongly-typed JavaScript.
- **ESLint** - Linter for maintaining code quality.
- **Tailwind CSS** - Utility-first CSS framework.

## Configuration

### Vite Configuration

Located in `vite.config.js`, the configuration includes:

- Custom port (3000)
- `vite-plugin-remix-router` for automatic route handling
- TypeScript path resolution with `vite-tsconfig-paths`

### Remix Configuration

Located in `remix.config.js`:

- Uses Vite as the build tool
- Enables experimental Remix features

## License

This project is licensed under the MIT License.
