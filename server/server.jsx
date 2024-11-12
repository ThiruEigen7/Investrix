const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth.jsx'); // Make sure the filename ends in .js, not .jsx
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
const PORT = 3002;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));
app.use(express.json());

mongoose.connect('mongodb+srv://investrix:surya123@cluster0.agqgr.mongodb.net/myDatabaseName')
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.VITE_GPT_API_KEY,
});

// Chatbot route
app.post('/api/chatbot', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }],
        });
        const botReply = response.choices[0].message.content;
        res.json({ reply: botReply });
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        res.status(500).json({ error: 'Failed to fetch chatbot response' });
    }
});

// Auth routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
