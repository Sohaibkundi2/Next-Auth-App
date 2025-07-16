This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Next.js Auth App (TypeScript)

<!-- [![Deployment](https://img.shields.io/badge/deployed-live-green)](https://next-auth-app.vercel.app) -->

A full-featured authentication system built with **Next.js 13+ App Router**, **TypeScript**, **Axios**, and **Tailwind CSS**. Includes signup, login, email verification, and profile handling.

---

## Features

- User Signup with input validation
- Login with JWT and API integration
- Email Verification via token
- Protected Profile pages
- TypeScript support
- Modern, responsive UI using Tailwind CSS
- Toast notifications for user feedback

---

## Tech Stack

- Framework: Next.js 13+ (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- HTTP Client: Axios
- Notifications: react-hot-toast
- Backend APIs: Node.js 
- Database: MongoDB 

---

## Directory Structure

```
src/
├── app/
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   ├── profile/page.tsx
│   ├── profile/[id]/page.tsx
│   └── verifyemail/page.tsx
│   └── api/
│       └── users/
│           ├── signup/route.ts
│           ├── login/route.ts
│           ├── logout/route.ts
│           └── verifyemail/route.ts
├── public/
├── styles/
├── utils/
└── ...
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/next-auth-app.git
cd next-auth-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment

Create a `.env.local` file in the root with the following variables:

```env
MONGODB_URI=your_mongo_connection
JWT_SECRET=your_jwt_secret
DOMAIN=http://localhost:3000
```

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## API Routes

| Method | Endpoint               | Description             |
|--------|------------------------|-------------------------|
| POST   | `/api/users/signup`    | Register new user       |
| POST   | `/api/users/login`     | Login user              |
| GET    | `/api/users/logout`    | Logout session          |
| POST   | `/api/users/verifyemail` | Email verification     |

---

## Deployment

<!-- The project is deployed on **Vercel**:  
[https://next-auth-app.vercel.app](https://next-auth-app.vercel.app) -->



## Author

```
Made by Sohaib Kundi
```

---
