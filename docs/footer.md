Here is a clean, concise, **professional PRD** (Product Requirements Document) for the footer you just implemented.

---

# **📄 Product Requirements Document (PRD)

SurgeSwipe – Global Website Footer Component**

## **1. 🧠 Purpose**

The purpose of this footer is to provide a **clean, modern, professional, and scalable** global footer for the SurgeSwipe website.
It must improve navigation, establish brand identity, enhance SEO, and ensure users can easily access high-value pages (courses, resources, support, contact).

The footer should function as a **unified site-wide component** across all SurgeSwipe pages.

---

## **2. 🎯 Goals & Objectives**

* Create a **visually appealing**, enterprise-grade footer for SurgeSwipe.
* Ensure the footer is **responsive**, clean, and minimal (inspired by ShadcnStudio’s best UI patterns).
* Provide clear access to important site areas:

  * Courses
  * Resources
  * Enterprise services
  * Technologies
  * Support
  * Contact
* Display SurgeSwipe’s brand identity, including social media presence.
* Add legal links and copyright section.

---

## **3. 🧩 Scope**

### **In Scope**

✔ Footer UI and structure
✔ Navigation link groups
✔ Contact information
✔ Social icons
✔ Responsive grid layout (mobile, tablet, desktop)
✔ Hover-interactive links
✔ Professional typography & spacing
✔ Light-neutral color scheme (`#fafafa`)
✔ Shadcn UI + TailwindCSS compatibility

### **Out of Scope**

✘ Backend integrations
✘ Newsletter subscription
✘ Authentication-based dynamic footer content
✘ Dark mode version (can be added later)

---

## **4. 🏗 Functional Requirements**

### **4.1 Layout Structure**

The footer must include the following sections:

#### **A. Brand Overview**

* Company name: *SurgeSwipe*
* Short brand description
* Social media icons: Facebook, Twitter, Youtube, Instagram

#### **B. Navigation Columns**

1. **Trending Courses**
2. **Resources**
3. **Technologies**
4. **Enterprise**
5. **Programs**
6. **Support**

#### **C. Contact Section**

* Address
* Email
* Phone number

#### **D. Legal Section**

* Privacy Policy
* Terms & Conditions

---

## **5. 🎨 Design Requirements**

### **5.1 Visual Design**

* Clean, minimal, professional
* Plenty of white space
* Neutral light theme
* TailwindCSS utility classes
* Hover animation: link text turns black
* Icons: Lucide React icons, size 20–24px

### **5.2 Responsive Behavior**

* Mobile: 2-column layout
* Tablet: 4-column layout
* Desktop: 4–5 column grid
* Columns collapse gracefully without overflow

---

## **6. 🛠 Technical Requirements**

* React + JSX compliant component
* Uses TailwindCSS for layout + styling
* Uses Shadcn components: `Separator`
* Uses `lucide-react` icons
* Must not use inline styles except for Tailwind utility classes
* Must export as a default React component
* Code must be readable and modular

---

## **7. 🧪 Testing Requirements**

### **Functional Test Cases**

| Test Case                   | Expected Result                                                 |
| --------------------------- | --------------------------------------------------------------- |
| Footer renders on all pages | Footer is visible and responsive                                |
| Social icons are clickable  | Icons should be interactive (optional: link to real URLs later) |
| Links display hover effect  | Text becomes darker/black                                       |
| Footer adapts on mobile     | Columns stack into 2-column layout                              |
| Contact info visible        | Address, email, phone appear correctly                          |
| © Year auto-updates         | Displays `© 2025 SurgeSwipe` etc                                |

### **Responsive Test Cases**

* Test on 320px width (mobile)
* Test on tablet 768px
* Test on full HD (≥ 1280px)
* Verify spacing and alignment

---

## **8. 📦 Acceptance Criteria**

* Footer must match the structure in the implementation
* No console errors
* JSX must compile without warnings
* Should be pixel-consistent across breakpoints
* Should reflect a high-end, corporate look
* No broken or overflowing elements at any screen size

---

code:


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
