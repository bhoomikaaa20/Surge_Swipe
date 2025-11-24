"use client"

import React from "react";
import { Menu, ChevronDown } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full shadow bg-white sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Left Logo */}
                <div className="text-2xl font-bold">Surge Swipe</div>

                {/* Main Menu */}
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/home" className="px-4 py-2">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* About Us Dropdown */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 w-64">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/about/surge-swipe" className="p-2 hover:bg-gray-100 rounded">About Surge Swipe</Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/about/online-training" className="p-2 hover:bg-gray-100 rounded">Online Training</Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/about/corporate-training" className="p-2 hover:bg-gray-100 rounded">Corporate Training</Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/about/college-collaboration" className="p-2 hover:bg-gray-100 rounded">College Collaboration</Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/about/projects-assistance" className="p-2 hover:bg-gray-100 rounded">Mini & Major Projects Assistance</Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Become A Dropdown */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Become A</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 w-52">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/become-a/partner" className="p-2 hover:bg-gray-100 rounded">Partner</Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/become-a/instructor" className="p-2 hover:bg-gray-100 rounded">Instructor</Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/hire-from-surge-swipe" className="px-4 py-2">Hire From Surge Swipe</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/careers" className="px-4 py-2">Careers</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/contact" className="px-4 py-2">Contact Us</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Auth Buttons */}
                <div className="flex gap-3">
                    <Link href="/login">
                        <Button variant="outline" className="rounded-xl">Login</Button>
                    </Link>
                    <Link href="/register">
                        <Button className="rounded-xl">Register</Button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}