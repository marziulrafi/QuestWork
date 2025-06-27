# 💼 QuestWork – Freelance Task Marketplace

QuestWork is a modern freelance task marketplace that connects clients with skilled freelancers across various categories. Users can post tasks, bid on them, and manage their workflow easily and securely using a smooth and responsive web interface.

### 🔗 **Live Site:** [QuestWork Live Demo](https://marziul-questwork.web.app/)
### 🔗 **Server Side Repository:** [QuestWork Server Side](https://github.com/marziulrafi/QuestWork-Server)

---

## 🧩 Overview

QuestWork bridges the gap between task providers and freelancers by offering a platform where tasks can be posted, bids can be placed, and work can be tracked efficiently. With Firebase-powered authentication and role-based access, the app ensures a secure and professional experience for users on both ends.

---

## ✨ Features

- 🔐 **Authentication System**  
  - Secure user registration and login via Firebase Authentication  
  - Google Sign-In supported  
  - Profile update and role-based access (Client / Freelancer)

- 📝 **Task Posting & Browse**  
  - Clients can post tasks with budget, description, and deadline  
  - Freelancers can browse available tasks

- 📬 **Bid Management**  
  - Freelancers can submit bids for any listed task  
  - Clients can view and manage received bids

- 🎨 **Responsive UI**  
  - Styled with **Tailwind CSS** and **DaisyUI**  
  - Fully responsive for desktop, tablet, and mobile devices

- ⚙️ **Protected Routes**  
  - Route-level protection using `react-router`  
  - Unauthenticated users are redirected to login

---

## 🛠️ Technologies Used

- **React** – UI library  
- **Firebase** – Authentication and hosting  
- **React Router** – Client-side routing  
- **Tailwind CSS + DaisyUI** – Modern responsive styling  
- **LocalStorage** – For storing role and bid data  
- **JavaScript (ES6+)** – Functional logic and interactivity  

---

## 📦 NPM Dependencies

- `firebase` – Authentication and backend hosting  
- `react-router` – Page-based routing  
- `react-toastify` – Toast notifications  
- `daisyui` – Tailwind component library  
- `react-icons` – Icons in UI  
- `classnames` – Conditional class handling  
- `framer-motion` – (If animation used in any section)

---

## 🖥️ How to Run the Project Locally

### ✅ Prerequisites
- Node.js and npm installed
- Code editor like VS Code

### 📁 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/marziulrafi/QuestWork.git](https://github.com/marziulrafi/QuestWork.git)
   cd QuestWork
2. **Install Dependencies**
   ```bash
   npm install
3. **Firebase Configuration**
4. **Start the Development Server**
   ```bash
   npm run dev
