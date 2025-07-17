# Next.js Auth App (TypeScript)

<!-- [![Deployment](https://img.shields.io/badge/deployed-live-green)](https://next-auth-app.vercel.app) -->

A full-featured authentication system built with **Next.js 13+ App Router**, **TypeScript**, **Axios**, and **Tailwind CSS**. Includes signup, login, email verification, forgot passwoed and profile handling.

---

## Features

- User Signup with input validation
- Login with JWT and API integration
- forgot password option
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
- Email: mailtrap
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
git clone https://github.com/sohaibkundi2/next-auth-app.git
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
