# B42_WEB_068_Cloud-Constructors - **Revamped Event Management Platform**  

![Eventify](Eventify.png)

## **Introduction**  
The **Revamped Event Management Platform** is a **full-stack web application** that allows users to **create, manage, and attend events** effortlessly. Users can:  
- Create events with **date, time, location, and media uploads**  
- **RSVP** to events and track responses via a **dashboard**  
- Engage with attendees through an **event discussion forum**  
- Receive **automated reminders** for upcoming events  
This platform simplifies event planning, increasing engagement and attendance through a seamless user experience.  

---

## **Project Type**  
**Fullstack** (MERN Stack: MongoDB, Express.js, React, Node.js)  

---

## **🚀 Deployed App**  
- **Frontend**: [Live Site](https://deployed-frontend.whatever)  
- **Backend**: [API Server](https://deployed-backend.whatever)  
- **Database**: [MongoDB Atlas](https://cloud.mongodb.com/)  

---

## **Directory Structure**  
```
my-app/
backend/
├── src/
│   ├── api/
│   │   ├── routes/         
│   │   ├── controllers/    
│   │   ├── middleware/      
│   ├── models/             
│   ├── config/             
│   ├── index.js            
├── .env                    
├── package.json            
├── README.md  
```

---

## **📹 Video Walkthrough of the Project**  
🎥 [Click here to watch the demo](https://your-video-link.com)  

---

## **📹 Video Walkthrough of the Codebase**  
🎥 [Click here to watch the code walkthrough](https://your-video-link.com)  

---

## **Features**  
- User Authentication (JWT-based Login & Signup) 
- Interactive Event Creation Wizard
- Google Maps Integration for Location Selection 
- Drag & Drop Media Upload for Event Banners
- RSVP System with Color-coded Responses 
- Automated Email Reminders for RSVP  
- Event Timeline & Filters
- Social Media Sharing Options 
- Event Discussion Forum 

---

## **Design Decisions & Assumptions**  
- **Modular Folder Structure** for better scalability  
- **JWT-based Authentication** for security  
- **MongoDB as Database** for flexible schema design  
- **Google Maps API** for venue selection  
- **Multer for File Uploads** to handle event media  
- **REST API with Express.js** for backend services  

---

## **Installation & Getting Started**  
Clone the repository:  
```bash
git clone https://github.com/your-repo/event-management-platform.git
cd event-management-platform
```

### **Backend Setup**  
```bash
cd backend
npm install
npm run dev  # Runs on http://localhost:5000
```
Ensure you have a `.env` file with:  
```
PORT=5000
MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/event_platform
JWT_SECRET=your_secret_key
```

### **🔹 Frontend Setup**  
```bash
cd frontend
npm install
npm start  # Runs on http://localhost:3000
```

---

## **📌 Usage**  
### **1️⃣ User Authentication**  
- Register/Login to access event creation  

### **2️⃣ Create an Event**  
- Fill in the event details (title, description, date, time, location, media)  
- Click "Publish"  

### **3️⃣ RSVP to Events**  
- View event invitations  
- Accept/Decline invitations  
- Track RSVPs via the dashboard  

### **4️⃣ Event Engagement**  
- Comment and discuss within the event discussion forum  
- Share the event via social media  

---

## **📌 Credentials**  
Use the following test credentials for authentication:  
```
Email: testuser@example.com
Password: Test@123
```

---

## **📌 APIs Used**  
- **Google Maps API** – For location selection  
- **JWT (JSON Web Token)** – For authentication  
- **Nodemailer** – For email reminders  

---

## **📌 API Endpoints**  
### **🔹 Authentication**
| Method | Route             | Description           |
|--------|------------------|----------------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login` | Login & get token |

### **🔹 Event Management**
| Method | Route             | Description                  |
|--------|------------------|-----------------------------|
| POST   | `/api/events` | Create a new event |
| GET    | `/api/events` | Get all events |
| GET    | `/api/events/:id` | Get event details |

---

## **📌 Technology Stack**  
- **Frontend**: React.js (Vite, React Router, Tailwind CSS)  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose ODM)  
- **Authentication**: JWT (JSON Web Token)  
- **APIs & Services**: Google Maps API, Nodemailer  
- **Deployment**: Vercel (Frontend), Render (Backend), MongoDB Atlas (Database)  
