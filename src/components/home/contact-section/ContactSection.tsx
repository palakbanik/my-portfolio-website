import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ParaText from "@/components/shared/texts-type/ParaText";
import Input from "@/components/shared/Input";
import Textarea from "@/components/shared/Textarea";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/shared/Dropdown";
import {
    contactDropdownOptions,
    contactSectionPersonalContacts,
} from "@/data/data";
import Link from "next/link";
import SubText from "@/components/shared/texts-type/SubText";

export default function ContactSection() {
    return (
        <section className="relative ">
            <Container className="py-10 md:py-20 lg:py-26">
                <div className="relative grid items-center gap-10 md:grid-cols-[500px_1fr] lg:grid-cols-[620px_1fr] lg:gap-28">
                    {/* left form */}
                    <div className="order-2 md:order-1 rounded-2xl border border-pb-white/5 bg-pb-theme-accent-2 px-2 py-6 sm:p-10">
                        {/* text content */}
                        <div className="space-y-2">
                            <SectionTitle
                                className="text-start"
                                text="Let's work together!"
                            />
                            <ParaText>
                                I design and code beautifully simple things and
                                i love what i do. Just simple like that!
                            </ParaText>
                        </div>

                        {/* form */}
                        <div>
                            <form className="space-y-3 mt-6">
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <Input
                                        placeholder="First name"
                                        type="text"
                                        name="first-name"
                                    />
                                    <Input
                                        placeholder="Last name"
                                        type="text"
                                        name="last-name"
                                    />
                                </div>

                                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <Input
                                        placeholder="Email address"
                                        type="email"
                                        name="email-address"
                                    />
                                    <Input
                                        placeholder="Phone number"
                                        type="text"
                                        name="phone-number"
                                    />
                                </div>

                                <Dropdown data={contactDropdownOptions} />

                                <Textarea placeholder="Message" />

                                <Button type="submit">Send Message</Button>
                            </form>
                        </div>
                    </div>

                    {/* right contact info */}
                    <div className="order-1 md:order-2 space-y-8">
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
                                        <Link href={info.href}>
                                            <SubText className="font-medium hover:text-pb-theme-primary duration-500 ease transition-colors">
                                                {info.contactTypeValue}
                                            </SubText>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
