# Next.js Auth App (TypeScript)

[![Deployment](https://img.shields.io/badge/deployed-live-green)](https://next-auth-app-nine-vert.vercel.app/)

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
- Email service: Mailtrap (Testing)
- Database: MongoDB 

---

## Directory Structure

```
├──src/
    ├── middleware.ts
    ├── app/
    │   ├── layout.tsx
    │   ├── ...
    │   ├── login/page.tsx
    │   ├── signup/page.tsx
    │   ├── profile/page.tsx
    │   ├── profile/[id]/page.tsx
    │   ├── verifyemail/page.tsx
    │   ├── forgotpassword/page.tsx
    │   ├── resetpassword/
    │   │    ├── page.tsx 
    │   │    └── ResetPasswordForm.tsx 
    │   └── api/
    │       └── users/
    │           ├── signup/route.ts
    │           ├── login/route.ts
    │           ├── logout/route.ts
    │           └── verifyemail/route.ts
    │           ├── forgotpassword/route.ts
    │           └── resetpassword/route.ts
├── helpers/
├── dbConfig/
├── models/
├── public
├── env
└── ...
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sohaibkundi2/Next-Auth-App.git
cd Next-Auth-App
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

MAILTRAP_USER= your_mailtrap_user_name
MAILTRAP_PASS= your_mailtrap_password
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
| POST   | `/api/users/forget-password`  | Send reset password email   |
| POST   | `/api/users/reset-password`   | Reset password using token      |

---

## Deployment

The project is deployed on **Vercel**:  
[view live](https://next-auth-app-nine-vert.vercel.app/)



## Author

**Sohaib Khan**  
Full-Stack Developer

- [ GitHub](https://github.com/Sohaibkundi2)
- [ LinkedIn](https://www.linkedin.com/in/sohaibkundi2)
---
