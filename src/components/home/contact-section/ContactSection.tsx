"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ParaText from "@/components/shared/texts-type/ParaText";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/shared/Dropdown";
import {
    contactDropdownOptions,
    contactSectionPersonalContacts,
} from "@/data/data";
import Link from "next/link";
import SubText from "@/components/shared/texts-type/SubText";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "@/animation/animations";
import Input from "@/components/shared/Input";
import Textarea from "@/components/shared/Textarea";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const initialContact = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
};

export default function ContactSection() {
    const [contact, setContact] = useState(initialContact);
    const form = useRef<HTMLFormElement | null>(null);

    const { firstName, lastName, email, phoneNumber, message } = contact;

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;

        setContact((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        try {
            await emailjs.sendForm(
                "service_gelyb8q",
                "template_fi17a5j",
                form.current,
                {
                    publicKey: "etHvymkF89Q1J7NEi",
                },
            );

            alert(
                `Thank you ${firstName} ${lastName}! Your message has been sent successfully.`,
            );
            setContact(initialContact);
            console.log("SUCCESS!");
        } catch (error) {
            console.log("FAILED...", error);

            alert(
                "Sorry! We couldn't send your message. Please try again later.",
            );
        }
    };

    return (
        <section className="relative ">
            <Container className="py-10 md:py-20 lg:py-26">
                <div className="relative grid items-center gap-10 lg:grid-cols-[500px_1fr] lg:grid-cols-[620px_1fr] lg:gap-28">
                    {/* left form */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        className="order-2 md:order-1 rounded-2xl border border-pb-white/5 bg-pb-theme-accent-2 px-2 py-6 sm:p-10"
                    >
                        {/* text content */}
                        <div className="space-y-2">
                            <SectionTitle
                                sectionTitle="Let's work together!"
                                containerClassName="items-start"
                            />

                            <ParaText>
                                I design and code beautifully simple things and
                                i love what i do. Just simple like that!
                            </ParaText>
                        </div>

                        {/* form */}
                        <form
                            ref={form}
                            onSubmit={handleContactForm}
                            className="space-y-3 mt-6"
                        >
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                                <Input
                                    name="firstName"
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    name="lastName"
                                    placeholder="Last name"
                                    value={lastName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Phone number"
                                    value={phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* <Dropdown data={contactDropdownOptions} /> */}

                            <Textarea
                                name="message"
                                placeholder="Message"
                                value={message}
                                onChange={handleInputChange}
                            />

                            <Button type="submit">Send Message</Button>
                        </form>
                    </motion.div>

                    {/* right contact info */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.8,
                        }}
                        className="order-1 md:order-2 space-y-8"
                    >
                        {contactSectionPersonalContacts.map((info) => {
                            const Icon = info.icon;
                            return (
                                <div
                                    key={info.id}
                                    className="flex items-center gap-4 sm:gap-6"
                                >
                                    {/* icon */}
                                    <div className="p-2.5 rounded-full bg-linear-to-tl from-pb-theme-primary to-pb-theme-secondary">
                                        <Icon size={30} />
                                    </div>

                                    {/* text content */}
                                    <div>
                                        <ParaText className="capitalize text-pb-white/70">
                                            {info.contactType}
                                        </ParaText>

                                        {info.href ? (
                                            <Link href={info.href}>
                                                <SubText className="font-medium hover:text-pb-theme-primary duration-500 ease transition-colors cursor-pointer">
                                                    {info.contactTypeValue}
                                                </SubText>
                                            </Link>
                                        ) : (
                                            <SubText className="font-medium hover:text-pb-theme-primary duration-500 ease transition-colors cursor-pointer">
                                                {info.contactTypeValue}
                                            </SubText>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
