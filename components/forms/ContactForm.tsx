// components/forms/ContactForm.tsx
"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "918218822812";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `Hi TATTOOMI, my name is ${name} (${email}).\n\n${message}`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit} className="w-full sm:max-w-lg flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
                <label htmlFor="name" className="sr-only">Your name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name*"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 bg-transparent border border-neutral-600 text-neutral-200 placeholder-neutral-400 p-4 rounded-md focus:outline-none focus:border-rose-600"
                />
                <label htmlFor="email" className="sr-only">Your e-mail</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your e-mail*"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent border border-neutral-600 text-neutral-200 placeholder-neutral-400 p-4 rounded-md focus:outline-none focus:border-rose-600"
                />
            </div>
            <label htmlFor="message" className="sr-only">Your message</label>
            <textarea
                name="message"
                id="message"
                placeholder="Your message*"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-transparent border border-neutral-600 text-neutral-200 placeholder-neutral-400 p-4 rounded-md resize-none focus:outline-none focus:border-rose-600"
            />
            <button
                type="submit"
                className="self-start bg-rose-500 hover:bg-rose-600 transition-colors text-white font-semibold px-8 py-3 rounded-md"
            >
                Send Message
            </button>
        </form>
    );
};