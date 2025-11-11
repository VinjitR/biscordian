# Biscordian

Biscordian is a Discord frontend clone built with modern web technologies, designed to connect with a Firebase database. This project aims to provide a Discord-like user experience, handling real-time messaging, channels, and user presence via Firebase as the backend.

---

## ✨ Overview

Biscordian replicates key UI and UX elements from Discord, providing a familiar chat environment. It is ideal for developers seeking to understand how to build chat applications or for those wanting a customizable alternative to Discord’s frontend.

- **Frontend Clone:** Biscordian mimics Discord’s web app, including server lists, channels, chat, and user profiles.
- **Firebase Integration:** All authentication, data storage, and real-time features leverage Firebase (Firestore and Auth).
- **Customizable:** Easily extendable and adaptable for custom chat solutions.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/VinjitR/biscordian.git
cd biscordian
```

### 2. Install dependencies

If using npm:
```bash
npm install
```
Or using yarn:
```bash
yarn install
```

### 3. Setup Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Register a new web app in your Firebase project settings.
3. Copy your Firebase config (apiKey, authDomain, projectId, etc.).
4. Create a `.env` file in the root directory and add your Firebase configuration like:
    ```
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

### 4. Start the development server

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) (the actual port may vary). You should see the Biscordian interface.

---

## 🛠️ Features

- Discord-like UI for channels, chats, and users
- Real-time chat using Firebase Firestore
- User authentication (Google/Email via Firebase Auth)
- Persistent chat history and presence updates
- Extensible with custom plugins and themes

---

## 🔧 Contributing

Pull requests are welcome! To suggest a feature or report a bug, please open an issue first and discuss your idea.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

*Repository created and maintained by [VinjitR](https://github.com/VinjitR).*
