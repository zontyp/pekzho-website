require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { OAuth2Client } = require("google-auth-library");

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const client = new OAuth2Client(CLIENT_ID);

app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, "users.json");

app.post("/auth/google", async (req, res) => {
  const { credential } = req.body;

  console.log("========== GOOGLE LOGIN DEBUG ==========");
  console.log("Backend CLIENT_ID:", CLIENT_ID);
  console.log("Credential received:", credential ? "YES" : "NO");

  if (!credential) {
    return res.status(400).json({
      success: false,
      message: "No credential received",
    });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();

    console.log("Verified payload:", payload);
    console.log("Payload audience (aud):", payload.aud);
    console.log("Expected audience:", CLIENT_ID);

    const user = {
      name: payload.name,
      email: payload.email,
      photo: payload.picture,
      googleId: payload.sub,
      createdAt: new Date().toISOString(),
    };

    let users = [];

    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      users = JSON.parse(fileData || "[]");
    }

    const existingUser = users.find((u) => u.email === user.email);

    if (!existingUser) {
      users.push(user);
      fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Google Auth Verify Error:", error.message);
    console.error("Full error:", error);

    return res.status(401).json({
      success: false,
      message: "Invalid Google token",
      error: error.message,
    });
  }
});

app.get("/users", (req, res) => {
  try {
    if (!fs.existsSync(filePath)) {
      return res.json([]);
    }

    const data = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(data || "[]");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error reading users" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});