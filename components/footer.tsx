import React from "react";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

export default function SurgeSwipeFooter() {
    return (
        <footer className="w-full bg-[#fafafa] text-[#111] pt-20 pb-12 px-6 md:px-16 lg:px-28 border-t">
            <Separator className="mb-12" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-base font-semibold mb-3">SurgeSwipe</h3>
                    <p className="opacity-70 leading-relaxed text-sm pr-6">
                        An upskilling platform offering online programs, workshops, and corporate training
                        across technologies, cloud, analytics, and enterprise tools.
                    </p>

                    <div className="flex space-x-4 mt-4">
                        <Facebook className="w-5 h-5 cursor-pointer hover:text-black transition" />
                        <Twitter className="w-5 h-5 cursor-pointer hover:text-black transition" />
                        <Youtube className="w-5 h-5 cursor-pointer hover:text-black transition" />
                        <Instagram className="w-5 h-5 cursor-pointer hover:text-black transition" />
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Trending Courses</h3>
                    <ul className="space-y-2 opacity-80">
                        {["Salesforce Business Analyst", "DevOps Engineer", "Agile Scrum Master", "Data Analytics with R", "Cloud Architect", "Automation Testing"].map((item) => (
                            <li key={item} className="hover:text-black cursor-pointer transition">{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 opacity-80">
                        {["Workshops", "Blogs", "Documentation", "Partner Program", "Campus Training", "Instructor Program"].map((item) => (
                            <li key={item} className="hover:text-black cursor-pointer transition">{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Contact</h3>
                    <ul className="space-y-3 opacity-80 text-sm">
                        <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-1" />
                            <span>46/4, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Bengaluru, 560068</span>
                        </li>
                        <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@surgeswipe.co.in</li>
                        <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 08062179537</li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs opacity-70">
                <div>
                    <h4 className="font-semibold mb-2">Technologies</h4>
                    <ul className="space-y-1">
                        {["SAS", "Big Data", "Cloud", "Testing", "Analytics"].map((c) => (
                            <li key={c} className="hover:text-black transition cursor-pointer">{c}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Enterprise</h4>
                    <ul className="space-y-1">
                        {["Corporate Training", "Custom Programs", "Onboarding", "Team Upskilling"].map((c) => (
                            <li key={c} className="hover:text-black transition cursor-pointer">{c}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Programs</h4>
                    <ul className="space-y-1">
                        {["Career Tracks", "Workshops", "Capstone Projects", "Hands-on Labs"].map((c) => (
                            <li key={c} className="hover:text-black transition cursor-pointer">{c}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Support</h4>
                    <ul className="space-y-1">
                        {["Help Center", "FAQs", "Student Support", "Instructor Support"].map((c) => (
                            <li key={c} className="hover:text-black transition cursor-pointer">{c}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <Separator className="my-10" />

            <div className="text-xs flex flex-col md:flex-row justify-between opacity-70">
                <p>© {new Date().getFullYear()} SurgeSwipe. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <span className="hover:text-black cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-black cursor-pointer">Terms & Conditions</span>
                </div>
            </div>
        </footer>
    );
}