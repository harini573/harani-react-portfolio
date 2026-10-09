const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

// Home API
app.get("/", (req, res) => {
    res.json({
        message: "Harani's Portfolio API is running!"
    });
});

// About API
app.get("/api/about", (req, res) => {
    res.json({
        name: "Harani Vijaykumar",
        degree: "B.E. Computer Science Engineering",
        college: "Coimbatore Institute of Engineering and Technology",
        graduationYear: 2027,
        cgpa: 8.44
    });
});

// Skills API
app.get("/api/skills", (req, res) => {
    res.json({
        skills: [
            "Python",
            "Java",
            "React.js",
            "Node.js",
            "Express.js",
            "MySQL",
            "MongoDB",
            "Machine Learning"
        ]
    });
});

// Projects API
app.get("/api/projects", (req, res) => {
    res.json({
        projects: [
            {
                name: "Blood Group Detection Using Fingerprint",
                technology: ["Python", "TensorFlow", "OpenCV", "FastAPI"]
            },
            {
                name: "PHP and MySQL Blog Platform",
                technology: ["PHP", "MySQL", "HTML", "CSS"]
            },
            {
                name: "Hospital Appointment Booking",
                technology: ["HTML", "CSS", "Bootstrap"]
            }
        ]
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Portfolio API running at http://localhost:${PORT}`);
});