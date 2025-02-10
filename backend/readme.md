# **Revamped Event Management Platform - Backend**  

## **Project Overview**  
This is the backend of the **Revamped Event Management Platform**, built using **Node.js, Express, and MongoDB**. It provides APIs for **user authentication, event creation, RSVP management, and discussions**.  

---

## **Tech Stack**  
- **Backend Framework**: Node.js with Express.js  
- **Database**: MongoDB (Mongoose ODM)  
- **Authentication**: JWT (JSON Web Tokens)  
- **Middleware**: CORS, Cookie-Parser, Morgan  
- **File Uploads**: Multer  
- **Email Notifications**: Nodemailer  

---

## **Folder Structure**  
```
backend/
├── src/
│   ├── api/
│   │   ├── routes/         # API Route Definitions
│   │   ├── controllers/    # Business Logic for API Endpoints
│   │   ├── middleware/     # Authentication & Other Middleware
│   ├── models/             # Mongoose Schemas
│   ├── config/             # Database & Other Configs
│   ├── index.js            # Main Server File
├── .env                    # Environment Variables
├── package.json            # Node.js Dependencies
├── README.md               # Project Documentation
```

---

## **🔑 Installation & Setup**  
### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-repo/event-management-backend.git
cd event-management-backend
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Configure Environment Variables**  
Create a `.env` file and add the following:  
```
PORT=5000
MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/event_platform
JWT_SECRET=your_secret_key
```

### **4️⃣ Start the Server**  
```sh
npm run dev
```
✅ The server should now be running on `http://localhost:5000`

---

## **API Endpoints**  
### **Authentication**
| Method | Route             | Description           | Access  |
|--------|------------------|----------------------|---------|
| POST   | `/api/auth/register` | Register a new user | Public  |
| POST   | `/api/auth/login` | Login user & get token | Public  |
| GET    | `/api/auth/profile` | Get logged-in user profile | Private |

### **Events**
| Method | Route             | Description                  | Access  |
|--------|------------------|-----------------------------|---------|
| POST   | `/api/events` | Create a new event | Private |
| GET    | `/api/events` | Get all events | Public |
| GET    | `/api/events/:id` | Get event details | Public |

---

## **Deployment**  
- **Backend:** [Render](https://render.com/)
- **Database:** MongoDB Atlas  
