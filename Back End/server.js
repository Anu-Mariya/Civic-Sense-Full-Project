const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./Routes/authRoutes");
const complaintRoutes = require("./Routes/complaintRoutes");

const app = express();

const PORT = 5000;

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);

app.get("/", (req, res) => {
    res.send("Civic Complaint Backend is running!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});