# Atlas-AI 🤖

Atlas-AI is a full-stack AI chat application inspired by modern conversational AI platforms such as ChatGPT. It provides a clean chat interface where users can start conversations, maintain multiple chat threads, and receive AI-generated responses through an Express backend.

The project is built with **React + Vite** on the frontend and **Node.js + Express + MongoDB** on the backend. AI responses are generated through an OpenAI-compatible API configuration using **OpenRouter**.

## ✨ Features

- 💬 AI-powered conversational chat interface
- 🆕 Create a new chat/thread
- 🗂️ Maintain multiple conversation threads
- 🔄 Load previous conversations from MongoDB
- 💾 Persist chats and threads in the database
- 🤖 Generate AI responses through OpenRouter
- ⏳ Loading indicator while waiting for an AI response
- ⌨️ Token-by-token style response rendering
- 🗑️ Delete chat history/thread from the sidebar
- 📜 Scrollable conversation history
- 🎨 ChatGPT-inspired responsive UI
- ⚡ React + Vite for a fast frontend development experience
- 🔌 Axios-based communication between frontend and backend
- 🌐 CORS-enabled API communication

## 🏗️ Architecture

```text
                    ┌──────────────────────┐
                    │      User / UI       │
                    │   React + Vite       │
                    └──────────┬───────────┘
                               │
                         Axios / HTTP
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Node.js Backend    │
                    │ Express REST API     │
                    └──────────┬───────────┘
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
                 ▼                           ▼
        ┌─────────────────┐        ┌──────────────────┐
        │     MongoDB     │        │    OpenRouter    │
        │ Threads + Chats │        │    AI Models     │
        └─────────────────┘        └──────────────────┘
```

## 📁 Project Structure

```text
Atlas-AI/
│
├── Backend/
│   ├── models/              # MongoDB/Mongoose models
│   ├── routes/              # Backend API routes
│   ├── controllers/         # Backend request handling
│   ├── index.js             # Express server entry point
│   ├── package.json
│   └── .env                 # Environment variables
│
├── Frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.jsx          # Main application component
│   │   └── ...
│   ├── public/              # CSS and public assets
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

> The exact internal file organization may evolve as the project continues to be developed.

## 🛠️ Tech Stack

### Frontend

- **React 19**
- **Vite**
- **Axios**
- **React Spinners**
- **UUID**
- HTML5
- CSS3
- Bootstrap / custom CSS
- Font Awesome icons

### Backend

- **Node.js**
- **Express 5**
- **MongoDB**
- **Mongoose 9**
- **Axios**
- **dotenv**
- **CORS**
- **OpenAI SDK**

### AI

Atlas-AI uses an OpenAI-compatible API configuration pointing to **OpenRouter**, allowing the application to communicate with supported AI models.

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

- [Node.js](https://nodejs.org/)
- npm
- MongoDB Atlas account or a local MongoDB server
- OpenRouter API key

## 1. Clone the Repository

```bash
git clone https://github.com/vishalranmale-projects/Atlas-AI.git
cd Atlas-AI
```

## 2. Setup the Backend

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` directory.

Example:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key
```

> Use the environment-variable names expected by your current backend implementation. Never commit API keys or database credentials to GitHub.

Start the backend:

```bash
node index.js
```

For development with Nodemon:

```bash
npx nodemon index.js
```

The backend runs on:

```text
http://localhost:3000
```

## 3. Setup the Frontend

Open another terminal:

```bash
cd Frontend
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

## 🔐 Environment Variables

The backend requires configuration for the database and AI provider.

Typical configuration:

| Variable | Description |
|---|---|
| `PORT` | Port used by the Express server |
| `MONGODB_URI` | MongoDB connection string |
| `OPENROUTER_API_KEY` | API key used for AI requests |

Keep `.env` private and make sure it is included in `.gitignore`.

## 💬 Chat Flow

When a user sends a message:

```text
User enters prompt
       ↓
React ChatWindow
       ↓
Axios request
       ↓
Express backend
       ↓
Create/find Thread
       ↓
Save User Chat
       ↓
Send prompt to AI provider
       ↓
Receive AI response
       ↓
Save Assistant Chat
       ↓
Return response to frontend
       ↓
Display AI response
```

## 🗃️ Data Model

Atlas-AI uses MongoDB with Mongoose to persist conversations.

### Thread

A thread represents one conversation.

```text
Thread
├── title
├── createdAt
├── updatedAt
└── chats[]
```

### Chat

A chat represents an individual message.

```text
Chat
├── role
│   ├── user
│   └── assistant
├── content
└── createdAt
```

The `Thread` stores references to its associated chat messages.

## 🔌 Backend API

The backend exposes REST endpoints for operations such as:

### Create / Continue Chat

```http
POST /chat
```

Example request:

```json
{
  "thread_id": "THREAD_ID",
  "message": "Explain React useEffect"
}
```

### Get All Threads

```http
GET /chats/threads
```

### Get Thread Details

```http
GET /chats/threads/:id
```

> Endpoint names should be kept synchronized with the backend routes if the API is changed during development.

## 🎨 Frontend Components

The frontend is organized around the main chat experience.

### Sidebar

Responsible for:

- Displaying conversation history
- Showing thread titles
- Opening previous conversations
- Providing delete controls
- Creating a new chat

### ChatWindow

Responsible for:

- Displaying messages
- Accepting user prompts
- Sending messages to the backend
- Showing loading state
- Rendering AI responses
- Handling the current thread

### App

Acts as the main state-management layer between the sidebar and chat window.

It coordinates:

- Current thread
- Chat history
- New-chat state
- Current prompt
- AI response
- Loading state
- Thread refresh

## 🧠 AI Provider

The backend uses the OpenAI SDK with an OpenAI-compatible base URL configured for OpenRouter.

This makes it possible to change the selected AI model without rewriting the complete frontend chat architecture.

Example configuration concept:

```javascript
const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1"
});
```

## 📦 Available Scripts

### Frontend

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Backend

```bash
node index.js
```

or, during development:

```bash
npx nodemon index.js
```

## 🔒 Security Notes

- Never expose your OpenRouter API key in React/frontend code.
- Store secrets in `.env`.
- Add `.env` to `.gitignore`.
- Do not commit MongoDB credentials.
- If an API key is accidentally committed, revoke/rotate it immediately.

## 🐛 Troubleshooting

### MongoDB connection error

Check:

- MongoDB URI
- Network access/IP whitelist in MongoDB Atlas
- Database username/password
- Internet connection

### CORS error

Make sure the Express backend allows requests from the Vite frontend origin.

Typical development origins:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:3000
```

### AI API error

Check:

- OpenRouter API key
- Selected model
- API usage/limits
- Request format
- Backend `.env` configuration

### Frontend cannot connect to backend

Verify that the backend is running before starting/testing chat requests:

```text
http://localhost:3000
```

Then verify that frontend Axios requests use the correct backend URL.

## 🚧 Future Improvements

Possible future enhancements include:

- 🔐 User authentication
- 👤 Multiple user accounts
- 📝 Rename conversations
- 🗑️ Better thread deletion handling
- 🌙 Theme switching
- 📎 File uploads
- 🖼️ Image input
- 🎤 Voice input
- 📋 Copy response button
- 👍 Like/dislike feedback
- 🔎 Search conversations
- ⚙️ Model selection
- 🧠 Streaming AI responses using Server-Sent Events
- 📱 Improved mobile responsiveness
- 🚀 Production deployment
- 🧪 Automated frontend and backend tests

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Test the application.
5. Commit your changes.

```bash
git commit -m "Add your feature"
```

6. Push the branch.

```bash
git push origin feature/your-feature
```

7. Open a Pull Request.

## 📄 License

This project currently does not specify a license in the repository. If you intend to distribute or accept external contributions, consider adding an appropriate open-source license.

## 👨‍💻 Author

**Vishal Ranmale**

GitHub: [vishalranmale-projects](https://github.com/vishalranmale-projects)

Project: [Atlas-AI](https://github.com/vishalranmale-projects/Atlas-AI)

---

⭐ If you find Atlas-AI useful, consider giving the repository a star!
