# MySpace Web

A Notion-inspired personal workspace built with Next.js.

## Run locally

Install Node.js 20+ and run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Upload the contents of this folder to a new GitHub repository (keep `app/`, `package.json`, etc. at the repository root).
2. Open https://vercel.com/new, import the repository, and deploy with the default Next.js settings.
3. Open your generated Vercel URL.

## Important storage and security information

- Pages and database items are stored in **localStorage in the current browser**. They do not sync across devices or browsers.
- Use the `...` menu to **Export backup** regularly; you can **Import backup** later.
- The application does **not** have authentication, cloud storage, file attachments, collaboration, or a full rich-text editor yet.
- Anyone who opens your deployment can use their own browser-local workspace; it is not a shared database. Do not store confidential information in this prototype.
- Future NAS migration will require implementing a server-backed database and user accounts. JSON exports provide a starting point for migration.
