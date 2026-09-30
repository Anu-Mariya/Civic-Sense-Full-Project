const express = require("express");
const Complaint = require("../Models/Complaint");
const authMiddleware = require("../middleware/authmiddleware");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();

router.get("/test", (req, res) => {
    res.json({
        message: "Complaint route is working"
    });
});

// ADD THE NEW CODE HERE
router.post("/create", authMiddleware, upload.single("image"), async (req, res) => {
    try {
       const {
    description,
    category,
    severity,
    latitude,
    longitude,
    department
} = req.body;

       const complaint = await Complaint.create({
    citizen: req.userId,
            image: req.file.filename,
            description,
            category,
            severity,
            location: {
                latitude,
                longitude
            },
            department
        });

        res.status(201).json({
            message: "Complaint created successfully",
            complaint
        });

    } catch (error) {
        res.status(500).json({
            message: "Complaint creation failed",
            error: error.message
        });
    }
});

module.exports = router;