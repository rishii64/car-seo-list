# Car Listing SEO App (Next.js)

## Features
- Dynamic car detail routing
- SEO optimization (meta tags, OpenGraph, Twitter Cards)
- JSON-LD Schema for each car
- Static sample car data

## Run Locally
```bash
npm install
npm run dev



## Backend-Task Folder Structure
Implemented a basic backend API using **Next.js API routes**, designed for a car listing system with login and JWT authentication.
---

## 📁 Folder Structure
```
root/
├── pages/
│   └── api/
│       ├── cars.js           # Handles GET and POST car APIs
│       └── login.js          # Dummy login endpoint that returns a token
│
├── lib/
│   ├── auth.js              # JWT generation and verification helpers
│   └── carsStore.js         # In-memory data storage for cars
│
├── middleware/
│   └── authMiddleware.js    # Token validation middleware (optional if you use inside handlers)
│
├── .env.local               # Stores your JWT_SECRET
├── README.md                # Project documentation
└── package.json
```

---
## 🔧 Endpoints

### `POST /api/login`
Returns a JWT token (no actual auth logic, dummy for testing).

#### Body
```json
{
  "username": "admin",
  "password": "1234"
}
```

#### Response
```json
{
  "token": "<JWT>"
}
```

---

### `GET /api/cars`
Returns a list of available cars. No authentication required.

#### Response
```json
[
  {
    "brand": "Mercedes",
    "model": "GLS",
    "year": "2023",
    "price": "$90,000",
    "status": "Available"
  }
]
```

---

### `POST /api/cars`
Adds a new car to the in-memory store. **JWT token required.**

#### Headers
```
Authorization: Bearer <JWT>
```

#### Body
```json
{
  "brand": "BMW",
  "model": "X5",
  "year": "2023",
  "price": "$75,000",
  "status": "Available"
}
```

---

## 🔐 Authentication
- Tokens are generated using **JWT**
- Add your secret key in `.env.local`:

```
JWT_SECRET=your_super_secret_key
```

---

## 🧪 Testing APIs
- Use [Postman](https://www.postman.com/) or `curl`
- Ensure `Authorization` header is used for protected routes

---

## 🛠️ Future Enhancements
- Add MongoDB support
- Integrate Swagger for API docs
- Add persistent authentication with session or refresh tokens

---

## 📄 License
MIT
