'use client';

import { useState, useTransition } from 'react';
import { submitContactForm } from '@/app/actions/contactFormAction';
import CountrySelect from './CountrySelect';

export default function ContactForm() {
    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        countryCode: '+91',
        phone: '',
        query: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
        if (formData.address.trim().length < 5) newErrors.address = 'Address is required';
        if (formData.phone.replace(/[^0-9]/g, '').length < 10) newErrors.phone = 'Valid phone number is required';
        if (formData.query.trim().length < 10) newErrors.query = 'Query must be at least 10 characters';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validate()) return;
        
        setStatus('idle');
        setMessage('');

        startTransition(async () => {
            try {
                const payload = {
                    name: formData.name,
                    email: formData.email,
                    address: formData.address,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    query: formData.query
                };
                const result = await submitContactForm(payload);
                if (result.success) {
                    setStatus('success');
                    setMessage(result.message || 'Successfully sent.');
                    setFormData({ name: '', email: '', address: '', countryCode: '+91', phone: '', query: '' });
                } else {
                    setStatus('error');
                    setMessage(result.error || 'Something went wrong. Please try again.');
                }
            } catch (err) {
                setStatus('error');
                setMessage('A network error occurred. Please try again.');
            }
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const inputClasses = "w-full bg-obsidian-2 border border-alabaster/20 text-alabaster px-4 py-3 font-sans focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all duration-200 placeholder:text-alabaster/30";

    return (
        <form onSubmit={handleSubmit} className="w-full mx-auto flex flex-col gap-6 p-6 md:p-10 bg-obsidian border border-alabaster/10 relative">
            {/* Status Toast */}
            {status !== 'idle' && (
                <div className={`p-4 border ${status === 'success' ? 'border-green-500/50 bg-green-500/10 text-green-400' : 'border-red-500/50 bg-red-500/10 text-red-400'} font-sans text-sm`}>
                    {message}
                </div>
            )}

            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono tracking-wider text-alabaster uppercase">Full Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputClasses} ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Enter your full name"
                    aria-invalid={!!errors.name}
                />
                {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono tracking-wider text-alabaster uppercase">Email Address *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputClasses} ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Enter your email address"
                    aria-invalid={!!errors.email}
                />
                {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-mono tracking-wider text-alabaster uppercase">Phone Number *</label>
                <div className="flex gap-3 relative">
                    <CountrySelect
                        value={formData.countryCode}
                        onChange={(code) => {
                            setFormData(prev => ({ ...prev, countryCode: code }));
                            if (errors.phone) {
                                setErrors(prev => ({ ...prev, phone: '' }));
                            }
                        }}
                    />
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`flex-1 ${inputClasses} ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="enter your number"
                        aria-invalid={!!errors.phone}
                    />
                </div>
                {errors.phone && <span className="text-red-400 text-xs">{errors.phone}</span>}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="address" className="text-sm font-mono tracking-wider text-alabaster uppercase">Address *</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`${inputClasses} ${errors.address ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Enter your full address or region"
                    aria-invalid={!!errors.address}
                />
                {errors.address && <span className="text-red-400 text-xs">{errors.address}</span>}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="query" className="text-sm font-mono tracking-wider text-alabaster uppercase">How can we help? *</label>
                <textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClasses} resize-y min-h-[120px] ${errors.query ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Tell us about your equipment needs..."
                    aria-invalid={!!errors.query}
                />
                {errors.query && <span className="text-red-400 text-xs">{errors.query}</span>}
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="mt-4 w-full bg-champagne text-obsidian font-bold font-mono tracking-[0.2em] uppercase py-4 hover:bg-white hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
                {isPending ? 'Sending...' : 'Submit Inquiry'}
            </button>
        </form>
    );
}
