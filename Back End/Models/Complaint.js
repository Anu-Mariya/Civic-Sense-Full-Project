const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    citizen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    image: {
        type: String,
        required: true
    },

    description: {
        type: String,
        default: ""
    },

    category: {
        type: String,
        enum: [
            "Pothole",
            "Garbage Overflow",
            "Broken Streetlight",
            "Drainage Issue"
        ],
        required: true
    },

    severity: {
        type: String,
        enum: ["Low", "Medium", "High"],
        required: true
    },

    location: {
        latitude: {
            type: Number,
            required: true
        },

        longitude: {
            type: Number,
            required: true
        }
    },

    department: {
        type: String,
        enum: [
            "Roads Department",
            "Waste Management Department",
            "Electrical Department",
            "Drainage Department"
        ],
        required: true
    },

    status: {
        type: String,
        enum: [
            "Submitted",
            "In Progress",
            "Resolved"
        ],
        default: "Submitted"
    },

    upvotes: {
        type: Number,
        default: 0
    },

    isDuplicate: {
        type: Boolean,
        default: false
    },

    duplicateOf: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Complaint",
        default: null
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Complaint", complaintSchema);