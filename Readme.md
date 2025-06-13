OVA IA4K12
 
This project use astro, tailwind and typescript. 

To run this project you needs node js installed and run

npm install

npm run dev

We use Screaming Architecure

project/
├── public/
├── src/
│ ├── pages/ # Public views like index, about
│ ├── activities/ # Activity-related logic and views
│ ├── games/ # Game-related logic and views
│ ├── data/ # Static data (JSON or other)
│ ├── components/
│ │ ├── ui/ # Generic components like buttons
│ │ ├── layout/ # Navbar, footer
│ │ ├── activities/ # Activity-specific components
│ │ └── games/ # Game-specific components
│ ├── layouts/ # General layouts like MainLayout
│ ├── styles/ # Global CSS, themes, etc.
│ ├── utils/ # Utilities like helpers, formatters
│ ├── services/ # Service layer (data handling)
│ └── config/ # Site configuration, global constants
├── astro.config.mjs # Astro config
└── package.json # Scripts and dependencies

License MIT