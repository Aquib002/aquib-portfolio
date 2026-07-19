const express = require("express");
const router = express.Router();

const { Resend } = require("resend");
const Contact = require("../models/Contact");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
    try {
        const {
            name,
            email,
            subject,
            message
        } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Save message to MongoDB
        const contact = new Contact({
            name,
            email,
            subject,
            message
        });

        await contact.save();

        // Send email
        const { data, error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",

            to: [
                "aquibrizvi13@gmail.com"
            ],

            subject: `New Portfolio Message: ${subject}`,

            html: `
                <div style="font-family: Arial; padding: 20px;">

                    <h2>New Portfolio Contact Message</h2>

                    <hr>

                    <p>
                        <strong>Name:</strong>
                        ${name}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        ${email}
                    </p>

                    <p>
                        <strong>Subject:</strong>
                        ${subject}
                    </p>

                    <p>
                        <strong>Message:</strong>
                    </p>

                    <p>
                        ${message}
                    </p>

                </div>
            `
        });

        // Resend error
        if (error) {
            console.log("RESEND ERROR:", error);

            return res.status(500).json({
                success: false,
                message: "Message saved but email could not be sent",
                error: error.message || error
            });
        }

        // Success
        return res.status(201).json({
            success: true,
            message: "Message sent successfully",
            emailId: data.id
        });

    } catch (error) {
        console.log("SERVER ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
});

module.exports = router;