'use server'

import { Resend } from 'resend';

// Only instantiate Resend if the API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function submitContactForm(formData: {
    name: string
    email: string
    address: string
    phone: string
    query: string
}) {
    try {
        // Server-side validation
        if (!formData.name || formData.name.trim().length < 2) {
            return { success: false, error: 'Valid name is required' };
        }
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            return { success: false, error: 'Valid email is required' };
        }
        if (!formData.address || formData.address.trim().length < 5) {
            return { success: false, error: 'Address is required' };
        }
        if (!formData.phone || formData.phone.replace(/[^0-9]/g, '').length < 10) {
            return { success: false, error: 'Valid phone is required' };
        }
        if (!formData.query || formData.query.trim().length < 10) {
            return { success: false, error: 'Query is required and must be at least 10 characters' };
        }

        // If no Resend key, simulate success (good for local testing before setting up Resend)
        if (!resend) {
            console.log('No RESEND_API_KEY found. Simulating email send for:', formData);
            
            // For local preview: save the email HTML so you can see what the owner receives
            const fs = require('fs');
            const path = require('path');
            const adminEmailHtml = `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
                    <h2 style="color: #111; margin-bottom: 20px; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">New Contact Form Submission</h2>
                    <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> ${formData.name}</p>
                    <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
                    <p style="margin: 10px 0;"><strong style="color: #555;">Phone:</strong> ${formData.phone}</p>
                    <p style="margin: 10px 0;"><strong style="color: #555;">Address:</strong> ${formData.address}</p>
                    <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 4px; border-left: 4px solid #d4af37;">
                        <strong style="color: #555; display: block; margin-bottom: 8px;">Query Details:</strong>
                        <p style="margin: 0; white-space: pre-wrap; line-height: 1.5;">${formData.query}</p>
                    </div>
                    <p style="margin-top: 30px; font-size: 12px; color: #888;">This is an automated notification from INDUS INC.</p>
                </div>
            `;
            const filePath = path.join(process.cwd(), 'public', 'mock-admin-email.html');
            fs.writeFileSync(filePath, adminEmailHtml);
            
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return { 
                success: true, 
                message: 'Your inquiry has been successfully sent. We will be in touch shortly.' 
            };
        }

        // Send Notification Email to Admin
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Update this when you verify a domain
            to: 'shauryacocid@gmail.com', // Using the email from the Google Form screenshot
            subject: `New Inquiry from ${formData.name} - INDUS INC`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone}</p>
                <p><strong>Address:</strong> ${formData.address}</p>
                <p><strong>Query:</strong><br/>${formData.query}</p>
            `
        });

        // Send Confirmation Email to User
        try {
            await resend.emails.send({
                from: 'INDUS INC <onboarding@resend.dev>', // Update when verified
                to: formData.email,
                subject: 'We have received your inquiry - INDUS INC',
                html: `
                    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                        <div style="background-color: #111111; padding: 30px; text-align: center; border-bottom: 3px solid #d4af37;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px;">INDUS INC.</h1>
                        </div>
                        <div style="padding: 40px 30px; color: #374151; line-height: 1.6;">
                            <h2 style="color: #111111; font-size: 20px; margin-top: 0; margin-bottom: 20px;">Inquiry Received</h2>
                            <p style="margin-bottom: 15px;">Dear ${formData.name},</p>
                            <p style="margin-bottom: 15px;">Thank you for reaching out to us. We have successfully received your inquiry regarding our agricultural equipment and solutions.</p>
                            <p style="margin-bottom: 25px;">One of our specialists is reviewing your requirements and will get back to you within 1-2 business days.</p>
                            
                            <div style="background-color: #f9fafb; border-left: 4px solid #d4af37; padding: 20px; border-radius: 0 4px 4px 0; margin-bottom: 25px;">
                                <h3 style="margin-top: 0; color: #111111; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px;">Your Message:</h3>
                                <p style="margin: 0; font-style: italic; color: #4b5563;">"${formData.query}"</p>
                            </div>
                            
                            <p style="margin-bottom: 5px;">Best regards,</p>
                            <p style="font-weight: 600; color: #111111; margin-top: 0;">The INDUS INC Team</p>
                        </div>
                        <div style="background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 5px 0;">© ${new Date().getFullYear()} INDUS INC. All rights reserved.</p>
                            <p style="margin: 0; letter-spacing: 0.5px;">JAIPUR · ACHHNERA</p>
                        </div>
                    </div>
                `
            });
        } catch (confirmError) {
            console.log("Could not send confirmation email (likely due to Resend free tier restrictions on unverified domains)", confirmError);
        }

        return { 
            success: true, 
            message: 'Your inquiry has been successfully sent. We will be in touch shortly.' 
        };
    } catch (error) {
        console.error('Resend Error:', error);
        return { 
            success: false, 
            error: 'Failed to send your inquiry. Please try again later or contact us directly.' 
        };
    }
}
