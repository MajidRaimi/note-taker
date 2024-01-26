# Note Taker 📝

Welcome to "Note Taker", a simple and easy-to-use note-taking website! This project emphasizes clean design and clean code, offering features like server actions to simplify state management. Dive into an intuitive and efficient note-taking experience.

## Technologies Used 🛠️

- [Next.js](https://nextjs.org/): A React framework for building server-rendered applications and static websites 🌐.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces 🖥️.
- [Prisma](https://www.prisma.io/): Next-generation ORM for Node.js and TypeScript 🗃️.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs 🎨.
- [TypeScript](https://www.typescriptlang.org/): A strongly typed programming language that builds on JavaScript 🔤.
- [ESLint](https://eslint.org/): A tool for identifying and reporting on patterns in JavaScript 🔍.
- [PostCSS](https://postcss.org/): A tool for transforming CSS with JavaScript ✨.
- [autoprefixer](https://github.com/postcss/autoprefixer): A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules 🔄.
- [clsx](https://github.com/lukeed/clsx): A tiny utility for constructing `className` strings conditionally ⚙️.
- [lucide-react](https://github.com/lucide-icons/lucide): Beautifully crafted open source icons 🖼️.
- [Radix UI](https://www.radix-ui.com/): Unstyled, accessible components for building high-quality design systems and web apps 📚.
- [Kinde](https://www.kinde.com/): Easy-to-integrate authentication for your Next.js applications 🔐.
- [tailwind-merge](https://github.com/dcastil/tailwind-merge): A library for merging Tailwind CSS classes 🌪️.
- [tailwindcss-animate](https://github.com/bentzibentz/tailwindcss-animate): An animation library for Tailwind CSS 💃.

## Features 💡

- 📚 Simple note-taking interface.
- 🎨 Clean and intuitive design.
- 🖥️ Server actions for efficient state management.
- 🚀 Fast and responsive user experience.

## Installation and Setup 🚀

- Clone the repository.

```bash
# Clone the repository
git clone https://github.com/MajidRaimi/note-taker.git
cd note-taker
```

- Add `.env` file with the following variables:

```bash
KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=

KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard

DATABASE_URL=
```

- Run the following commands:
```bash
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage 📘

To start taking notes, create an account and navigate to the dashboard. Simply begin typing your notes, and they will be automatically saved and managed without any additional effort.

## Contributing 🤝

Contributions are welcome! If you have ideas for improvements or find a bug, feel free to open an issue or submit a pull request.

## License 📄

This project is licensed under the [MIT License](LICENSE).

## Contact 📩

For more information or collaboration, please contact me at [majidsraimi@gmail.com](mailto:majidsraimi@gmail.com).
