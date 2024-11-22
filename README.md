<h1>Babel Fish 🐟</h1> 

<p>
    <b>The easiest way to understand your fish.</b>
</p>

<h2 id="tech-stack">Tech Stack 💻</h2>

[![My Skills](https://skillicons.dev/icons?i=nodejs,react,nextjs,ts,tailwind,vercel,prisma,docker)](https://skillicons.dev)

<h2 id="project-overview">Project Overview 📋</h2>

### Getting Started

#### 1. Create a `.env` file in the root directory and add your environment variables as follows:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-publishable-key-here"
CLERK_SECRET_KEY="your-clerk-secret-here"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
DATABASE_URL="postgresql://docker:docker@localhost:5432/mydb?schema=public"
SIGNING_SECRET="your-webhook-secret-here"
```

#### 3. Install required dependencies with pnpm

```bash
pnpm install
```

#### 2. Running the development server

```bash
pnpm dev
```

<h2 id="contribute">Contribute 🚀</h2>

If you want to contribute, clone this repo, create your work branch and get your hands dirty!

```bash
git clone https://github.com/aridanpantoja/babel-fish.git
```

```bash
git checkout -b feature/NAME
```

At the end, open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!

### Documentations that might help

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request) |
[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

<h2 id="license">License 📃 </h2>

This project is under [MIT](./LICENSE) license