# 💬 Chatify — Next-Gen Real-Time Messaging Platform

<div align="center">

![Chatify Banner](https://raw.githubusercontent.com/namanindoria/chatify/main/dist/login.png)

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://chatify-lovat-five.vercel.app)
[![Backend API](https://img.shields.io/badge/API_Status-Render-46E3B7?style=for-the-badge&logo=render)](https://chatify-zknw.onrender.com)
[![License](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](LICENSE)

### 🚀 Connect instantly. Chat effortlessly. Built for speed and style.

**Chatify** is a sleek, full-stack real-time messaging application engineered with React 19, Node.js, and Socket.IO. Packed with instant media sharing, live presence indicators, satisfying mechanical typing sound effects, and shielded by enterprise-grade Arcjet security.

[🌐 Experience Live Demo](https://chatify-lovat-five.vercel.app) • [🔌 Backend API](https://chatify-zknw.onrender.com) • [🐛 Report Bug](https://github.com/namanindoria/chatify/issues)

</div>

---

## 🌟 Key Features

- **⚡ Real-Time Messaging**: Instant two-way communication powered by Socket.IO with zero polling latency.
- **🟢 Live Online Presence**: Instant status badges showing which friends and contacts are currently active.
- **🖼️ Rich Media Sharing**: Seamless photo sharing within chats powered by Cloudinary cloud storage.
- **🔊 Tactile Audio Feedback**: Satisfying mechanical keystroke sound effects as you type, paired with chime notification alerts.
- **🛡️ Enterprise Security with Arcjet**:
  - **Attack Shield**: Proactive defense against SQL/NoSQL injections and cross-site scripting attacks.
  - **Bot Detection**: Automated bot filtering while keeping public routes accessible.
  - **Rate Limiting**: Sliding window rate limiting (100 requests/min) to eliminate spam and abuse.
- **🔐 Secure Authentication**:
  - JWT tokens stored in HTTP-only, secure cross-site cookies with header fallback.
  - Salted and hashed passwords with Bcrypt.
- **📧 Automated Welcome Emails**: Instant branded onboarding emails sent to newly registered users via Resend.
- **🎨 Futuristic Cyber-Dark UI**: Glassmorphism aesthetic, subtle glowing gradients, and responsive layouts built with Tailwind CSS & DaisyUI.
- **📱 Fully Responsive**: Fluid experience across mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Real-Time Client**: [Socket.IO Client](https://socket.io/)
- **Icons & Notifications**: [Lucide React](https://lucide.dev/) & [React Hot Toast](https://react-hot-toast.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express.js](https://expressjs.com/)
- **Real-Time Engine**: [Socket.IO Server](https://socket.io/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose ODM](https://mongoosejs.com/)
- **Security**: [@arcjet/node](https://arcjet.com/) (Shield, Bot Detection, Sliding Window Rate Limiting)
- **Authentication**: `jsonwebtoken` & `bcryptjs`
- **Cloud Media Storage**: [Cloudinary SDK](https://cloudinary.com/)
- **Email Delivery**: [Resend SDK](https://resend.com/)

---

## 📂 Project Architecture

```plaintext
chatify/
├── backend/
│   ├── models/
│   │   ├── Message.js            # Chat message schema (sender, receiver, text, image)
│   │   └── User.js               # User account schema (name, email, password, avatar)
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authcontroller.js # Signup, login, logout, profile update
│   │   │   └── message.controller.js # Message exchange & conversation history
│   │   ├── emails/
│   │   │   ├── emailHandlers.js  # Resend email trigger logic
│   │   │   └── emailTemplates.js # HTML welcome email template
│   │   ├── lib/
│   │   │   ├── arcjet.js         # Arcjet security configuration
│   │   │   ├── cloudinary.js     # Cloudinary media config
│   │   │   ├── db.js             # MongoDB connection logic
│   │   │   ├── env.js            # Environment variable validation
│   │   │   ├── socket.js         # Socket.IO instance and user connection mapping
│   │   │   └── utils.js          # JWT generator
│   │   ├── middleware/
│   │   │   ├── arcjet.middleware.js
│   │   │   ├── auth.middleware.js
│   │   │   └── socket.auth.middleware.js
│   │   ├── routes/
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   └── server.js             # Express server entry point
│   └── package.json
├── frontend/
│   └── chatify/
│       ├── public/
│       │   └── sounds/           # Audio assets for keystrokes & notifications
│       ├── src/
│       │   ├── components/       # Chat container, headers, list, loaders
│       │   ├── hooks/            # Keyboard sound hook
│       │   ├── pages/            # LoginPage, SignUpPage, ChatPage
│       │   ├── store/            # useAuthStore & useChatStore (Zustand)
│       │   ├── App.jsx           # Routing & layout setup
│       │   └── main.jsx
│       └── package.json
├── vercel.json                   # Vercel deployment rewrites & env
└── package.json                  # Root build script
```

---

## ⚙️ Getting Started

### 1. Prerequisites
- **Node.js**: `v18.x` or later
- **MongoDB**: Connection string (Local or MongoDB Atlas)
- **Cloudinary Account**: For image upload credentials
- **Arcjet Account**: For API key and security shielding
- **Resend Account**: For sending welcome emails

---

### 2. Clone the Repository

```bash
git clone https://github.com/namanindoria/chatify.git
cd chatify
```

---

### 3. Environment Variables Configuration

#### Backend Configuration
Create a `.env` file inside the `backend/` directory:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Cloudinary Config
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Arcjet Security
ARCJET_KEY=your_arcjet_api_key
ARCJET_ENV=development

# Resend Email Config
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=onboarding@resend.dev
EMAIL_FROM_NAME=Chatify
```

#### Frontend Configuration
Create a `.env` file inside `frontend/chatify/`:

```env
VITE_API_URL=http://localhost:5001/api
VITE_BASE_URL=http://localhost:5001
```

---

### 4. Install Dependencies & Run Locally

#### Start the Backend:
```bash
cd backend
npm install
npm run dev
```
> The server will start on `http://localhost:5001`.

#### Start the Frontend:
In a separate terminal window:
```bash
cd frontend/chatify
npm install
npm run dev
```
> The client will be available at `http://localhost:5173`.

---

## 🌐 API Reference

### Authentication Routes (`/api/auth`)
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/signup` | Register a new user and send welcome email |
| `POST` | `/login` | Authenticate user credentials & set cookie |
| `POST` | `/logout` | Clear auth cookie |
| `PUT` | `/update-profile` | Update user avatar (Cloudinary) |
| `GET` | `/check` | Verify current user session token |

### Message Routes (`/api/messages`)
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/users` | Get all registered contacts (excluding current user) |
| `GET` | `/chat-partners` | Get contacts with active conversation history |
| `GET` | `/:id` | Fetch all messages between user and contact |
| `POST` | `/send/:id` | Send a new text or image message (Socket notification) |

---

## ⚡ Socket.IO Events

| Event Name | Direction | Description |
|---|---|---|
| `connection` | Client -> Server | Establishes authenticated socket handshake |
| `getOnlineUsers` | Server -> Client | Emits array of active user IDs currently connected |
| `newMessage` | Server -> Client | Pushes incoming message to the recipient in real-time |
| `disconnect` | Client -> Server | Handles user disconnect and updates active user list |

---

## 🚀 Deployment

- **Frontend**: Configured for **Vercel** with single-page routing rules specified in [`vercel.json`](./vercel.json).
- **Backend**: Ready to deploy on **Render**, **Railway**, or any Node.js cloud platform. Ensure all environment variables are populated in the deployment dashboard.

---

## 👤 Author

**Naman Indoria**
- GitHub: [@namanindoria](https://github.com/namanindoria)
- Live App: [chatify-lovat-five.vercel.app](https://chatify-lovat-five.vercel.app)

---

## 📝 License

This project is licensed under the [ISC License](LICENSE).
