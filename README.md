# 🛍️ Mini E-Commerce SPA

A modern, minimal single-page e-commerce application that allows users to browse products, view details, and manage a shopping cart — no authentication required.

## 🌟 Live Demo

👉 [Live Site](https://mini-shop-mocha.vercel.app)

## 💻 Tech Stack

### Frontend
- **React.js** with **TypeScript**
- **Tailwind CSS** for rapid, responsive UI
- **DaisyUI** for clean component styling

### Backend
- **Node.js** with **Express.js**
- **MongoDB** as the database
- **TypeScript** for type safety
- Hosted on **Vercel**

## 🌐 API Endpoints

### Products
- **Get all products**:  
  `GET https://mini-ecom-backend.vercel.app/api/products`

- **Get single product**:  
  `GET https://mini-ecom-backend.vercel.app/api/products/:id`

### Cart
- **Get cart items**:  
  `POST https://mini-ecom-backend.vercel.app/api/products/cart-items`  
  Payload: `{ "productIds": ["id1", "id2", ...] }`

## ⚙️ Installation & Running Locally

```bash
# Clone the repo
git clone https://github.com/towhid046/mini-shop.git
cd mini-shop

# Frontend setup
cd ../frontend
npm install

## Create a .env file and put this line to .env file
VITE_SERVER_URL=https://mini-ecom-backend.vercel.app/api

## run the project 
npm run dev

# Backend setup
cd ../backend
npm install

## Create a .env file and put this two lines to .env file
DB_USER=yourmongodbdbname
DB_PASS=yourmongodbpass

## run the project 
npm run dev
