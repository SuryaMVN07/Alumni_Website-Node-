const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock Database (Stores data while server runs)
const usersDB = [];

// --- Page Routes ---
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// --- API Routes ---
app.post('/register', (req, res) => {
    const { username, email, password, fullName } = req.body;

    setTimeout(() => {
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: "Required fields are missing!" });
        }

        const userExists = usersDB.find(u => u.email === email);
        if (userExists) {
            return res.status(400).json({ success: false, message: "Email is already registered. Please sign in." });
        }

        usersDB.push({ username, email, password, fullName });
        console.log('New User Registered:', email);

        res.json({
            success: true,
            message: "Registration successful! Redirecting...",
            redirectUrl: "/signin.html"
        });
    }, 800);
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    setTimeout(() => {
        const user = usersDB.find(u => u.email === email && u.password === password);
        const isAdmin = email === "test@test.com" && password === "password";

        if (user || isAdmin) {
            const userName = user ? user.fullName : "Admin";
            console.log(`User ${email} logged in.`);
            res.json({
                success: true,
                message: `Welcome back, ${userName}!`,
                redirectUrl: "/profile.html"
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }
    }, 800);
});

app.post('/update-profile', (req, res) => {
    setTimeout(() => {
        res.json({ success: true, message: "Profile updated successfully!" });
    }, 600);
});

// Start Server with Port Fallback
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${server.address().port}`);
    console.log(`Test account -> Email: test@test.com | Password: password`);
});

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} is in use, trying an alternative port...`);
        const fallbackServer = app.listen(0, () => {
            console.log(`Server running on http://localhost:${fallbackServer.address().port}`);
            console.log(`Test account -> Email: test@test.com | Password: password`);
        });
    } else {
        console.error("Server error:", e);
    }
});