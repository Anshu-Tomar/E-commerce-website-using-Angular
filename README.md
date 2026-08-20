# E-commerce Website using Angular

A full-stack e-commerce platform with two user roles — **buyers** and **sellers** — built with Angular on the frontend and a Node.js/Express/MongoDB backend.

## Features

**Buyer (User) side**
- User registration & login (`user/user-auth`)
- Browse products and add items to cart (`user/carts`)
- View past orders (`user/my-order`)

**Seller side**
- Seller registration & login (`seller/seller-auth`)
- Seller dashboard / storefront (`seller/seller-home`)
- Add new products (`seller/seller-add-product`)
- Edit/update existing products (`seller/seller-update-product`)

**Shared**
- Common auth module (`auth`)
- Landing/home and other public pages (`main-pages`)
- Reusable shared components (`shared-pages`)
- 404 page (`page-not-found`)

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Angular 14, Bootstrap 5, ng-multiselect-dropdown, RxJS |
| Backend | Node.js, Express 5 |
| Database | MongoDB (Mongoose ODM) |
| Mock data (optional) | `db.json` (for local prototyping with `json-server`) |

## Project Structure

```
E-commerce-website-using-Angular/
├── Backend/                 # Express + Mongoose API
│   ├── index.js              # Server entry point
│   └── package.json
└── src/
    └── app/
        ├── auth/              # Shared authentication logic
        ├── main-pages/        # Landing / public pages
        ├── models/            # TypeScript interfaces
        ├── page-not-found/    # 404 page
        ├── seller/
        │   ├── seller-auth/
        │   ├── seller-home/
        │   ├── seller-add-product/
        │   └── seller-update-product/
        ├── service/           # Shared Angular services
        ├── shared-pages/      # Reusable UI components
        └── user/
            ├── user-auth/
            ├── carts/
            └── my-order/
```

## Installation Guide

### Prerequisites
- Node.js 16+
- npm
- MongoDB running locally
- Angular CLI (`npm install -g @angular/cli`)

### 1. Clone the repository
```bash
git clone https://github.com/Anshu-Tomar/E-commerce-website-using-Angular.git
cd E-commerce-website-using-Angular
```

### 2. Backend setup
```bash
cd Backend
npm install
node index.js
```
The API server starts on `http://localhost:3001` and connects to a local MongoDB instance (database: `e-comm-store-db`).

### 3. Frontend setup
Open a second terminal:
```bash
npm install
ng serve
```
The app runs on `http://localhost:4200`.

## Usage Examples

- Visit `http://localhost:4200` to browse the storefront as a guest.
- Register as a **User** to add products to your cart and place orders.
- Register as a **Seller** to access the seller dashboard, list new products, and manage your inventory.

## Notes for Future Improvement
- Add JWT-based auth guards to protect seller/user routes
- Move MongoDB connection string to environment variables
- Add product search & filtering
- Add payment gateway integration
