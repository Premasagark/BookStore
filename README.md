live: https://premasagark.github.io/BookStoreClient/
for docs: check book store FSD Documentation 

# 📚 **BooksMall - Full Stack Bookstore**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow![React](https://img.shields.io/badge/React-18-blue![Node.js](https://img.shields.io/badge/Node-20-green![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green**Multi-role e-commerce platform** (User/Admin/Seller) built with **MERN Stack + Tailwind CSS**. Live on GitHub Pages + Vercel.

## ✨ **Live Demo**
```
Frontend: https://premasagark.github.io/BookStoreClient/
Backend API: https://bookstore-server.vercel.app/api
```

## 📋 **Table of Contents**
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Setup](#quick-setup)
- [Running Locally](#running-locally)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Role-Based Access](#roles)
- [Deployment](#deployment)

## ✨ **Features**

| **User** | **Admin** | **Seller** |
|----------|-----------|------------|
| 🔍 Book search | 📊 Dashboard stats | 📦 Add/Edit books |
| 🛒 Shopping cart | 👥 Manage users | 📋 Manage orders |
| ❤️ Wishlist | 👨‍💼 Manage sellers | 📈 Seller analytics |
| 📦 Order tracking | 📚 Manage books | 🖼️ Image upload |

**Security:** JWT + Role-Based Auth + bcrypt + CORS + Rate Limiting

## 🛠️ **Tech Stack**

```
Frontend: React 19 + Vite + Tailwind CSS 4 + React Router
Backend: Node.js 20 + Express 5 + MongoDB + Redis
Auth: JWT (15min) + bcrypt (12 rounds)
Payments: Razorpay (Ready)
Upload: Cloudinary (Ready)
Deployment: Vercel + GitHub Pages
```

## 🚀 **Quick Setup**

### **Prerequisites**
```
Node.js 18+ | MongoDB Atlas | Redis Labs | Git
```

### **Clone & Install**
```bash
git clone https://github.com/premasagark/BookStore.git
cd BookStore

# Backend
cd server && npm install

# Frontend  
cd ../client && npm install
```

### **Environment (.env)**
```env
# server/.env
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-64-char-secret
CORS_ORIGIN=http://localhost:5173

# client/.env
VITE_API_URL=http://localhost:5000
```

## ▶️ **Running Locally**

```
# Terminal 1 - Backend
cd server
npm run dev
# http://localhost:5000

# Terminal 2 - Frontend
cd client
npm run dev
# http://localhost:5173
```

## 📚 **API Documentation**

**Base URL:** `http://localhost:5000/api`

| **Endpoint** | **Method** | **Auth** | **Description** |
|--------------|------------|----------|-----------------|
| `/auth/login` | POST | No | User login |
| `/user/cart` | POST | USER | Add to cart |
| `/admin/stats` | GET | ADMIN | Admin dashboard |
| `/seller/books` | POST | SELLER | Create book |

**Full API docs:** [Section 6](#api-documentation)

## 📁 **Project Structure**

```
📁 BookStore/
├── 📁 client/                 # React Frontend
│   ├── 📁 src/
│   │   ├── 📁 components/     # Login, Navbar
│   │   ├── 📁 pages/
│   │   │   ├── 📁 User/       # UHome, UCart
│   │   │   ├── 📁 Admin/      # AHome, AUsersList
│   │   │   └── 📁 Seller/     # SHome, AddBook
│   └── vite.config.js
│
├── 📁 server/                 # Node.js Backend
│   ├── 📁 controllers/        # Business logic
│   ├── 📁 middlewares/        # authMiddleware.js
│   ├── 📁 routes/             # userRoutes.js
│   └── server.js
```

## 👥 **Role-Based Access**

| **Role** | **Dashboard** | **Permissions** |
|----------|---------------|-----------------|
| **USER** | `/` | Cart, Wishlist, Orders |
| **ADMIN** | `/admin` | Manage Users/Sellers/Books |
| **SELLER** | `/seller` | Manage Books/Orders |

## 🚀 **Deployment**

### **Frontend (GitHub Pages)**
```bash
cd client
npm run predeploy
npm run deploy
```

### **Backend (Vercel)**
```bash
cd server
vercel --prod
```

## 🔧 **Role Redirect Fix (Known Issue)**
**Problem:** Admin/Seller login → lands on `/` instead of `/admin` or `/seller`  
**Workaround:** Manual navigation after login  
**Status:** High priority fix planned

## 📱 **Screenshots**
```
[Add screenshots of dashboards, login, cart, etc.]
```

## 🤝 **Contributing**
```
1. Fork repository
2. Create feature branch
3. npm install && npm test
4. Submit PR to main
```

## 📄 **License**
MIT License - See [LICENSE](LICENSE) file.

## 🙏 **Acknowledgements**
Built for BE CSE 1st Year project submission. Ready for IT placements!

***

**⭐ Star this repo if helpful!**  
**👨‍💻 Author: Premasagar K** | **📧 premasagar@example.com**

```
Made with ❤️ using React + Node.js + MongoDB
```

***

*Production-ready full-stack e-commerce platform with JWT auth and role-based dashboards.*[1]

[1](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/84147176/b679d27e-2d9b-4ec0-b368-43c85cce9824/FSD-Documentation-Format.docx)
