# ## 🧠 Context

The Surge Swipe website requires a **global navigation bar** that appears across all pages, driven by the existing **Next.js App Router folder structure**.
Currently, there is no central navbar implementation, and users navigate using direct URLs.
The goal is to implement a **Shadcn-powered, responsive, multi-dropdown Navigation Menu** integrated inside the **root layout**, covering all sections like Home, About Us pages, Become A, Careers, Hire, Authentication, etc.

This ensures:

* **Consistent global navigation** across all routes
* **Accurate linking** that matches the folder structure inside the `app/` directory
* **Clean UX** with dropdowns for grouped sections like *About Us* and *Become A*
* **Modern UI** using Shadcn components for visual consistency
* **Scalability** to easily add more sections or dropdowns in the future

---

# ## ✅ Task Breakdown

---

### **1. Create a Global Navbar Component**

* Add file: `/components/navbar.tsx`
* Implement navbar using **Shadcn NavigationMenu** + TailwindCSS.
* Add sections:

  * Home
  * About Us (Dropdown – 5 pages)
  * Become A (Dropdown)
  * Hire From Surge Swipe
  * Careers
  * Contact Us
  * Login / Register buttons

---

### **2. Implement About Us Dropdown (5 Pages)**

Each item links to an existing route:

| Label                            | Path                           |
| -------------------------------- | ------------------------------ |
| About Surge Swipe                | `/about/surge-swipe`           |
| Online Training                  | `/about/online-training`       |
| Corporate Training               | `/about/corporate-training`    |
| College Collaboration            | `/about/college-collaboration` |
| Mini & Major Projects Assistance | `/about/projects-assistance`   |

Use Shadcn:

* `NavigationMenuTrigger`
* `NavigationMenuContent`
* `NavigationMenuLink`

---

### **3. Implement Become A Dropdown (2 Pages)**

| Label      | Path                   |
| ---------- | ---------------------- |
| Partner    | `/become-a/partner`    |
| Instructor | `/become-a/instructor` |

---

### **4. Integration With Root Layout**

In `app/layout.tsx`:

* Import Navbar component
* Render it above `{children}` so it appears on all pages

Example:

```tsx
<body>
  <Navbar />
  {children}
</body>
```

---

### **5. Routing & Linking**

* Use Next.js `<Link>` for all navigation routes
* All paths must strictly follow the folder structure under `app/`

Example:

```
/app/about/surge-swipe/page.tsx → /about/surge-swipe
```

---

### **6. Authentication Buttons (Right Side)**

* Login → `/login`
* Register → `/register`
* Use Shadcn `<Button>` components
* Styling: outline for Login, filled for Register

---

### **7. Responsive Behavior**

* Desktop → full horizontal navbar with dropdowns
* Mobile → collapsible hamburger (Phase 1 optional)
* Dropdowns should remain functional on mobile.

---

# ## 📋 Test Cases

---

### **Navigation & Links**

✅ Clicking **Home** navigates to `/home`
✅ All **About Us** dropdown links navigate correctly
✅ **Become A** dropdown links work
✅ Hire From Surge Swipe → `/hire-from-surge-swipe`
✅ Careers → `/careers`
✅ Contact Us → `/contact`
✅ Login & Register buttons navigate correctly

### **UI / UX**

✅ Dropdown opens using Shadcn animation
✅ Navbar appears on all pages (via layout.tsx)
✅ No visual shift on page navigation
✅ Buttons are styled consistently with Shadcn

### **Responsiveness**

✅ Navbar collapses gracefully on mobile
✅ Menu items remain accessible on smaller screens

### **Code Quality**

✅ No TypeScript errors
✅ No Shadcn imports missing
✅ Follows folder structure correctly

---

# ## 🧪 Acceptance Criteria

* **UI**: Navbar matches client menu hierarchy and uses Shadcn NavigationMenu components
* **Routes**: All menu items correctly map to existing Next.js routes
* **Global Rendering**: Navbar is included globally via `/app/layout.tsx`
* **Design**: Buttons, spacing, and dropdowns follow Shadcn + Tailwind patterns
* **No Errors**: Zero console or TypeScript issues
* **Scalable**: New menu items can be added with minimal changes

---

# ## ⚙️ Technical Constraints / Guidelines

---

### **Frontend (Next.js App Router)**

* Use **Shadcn Navigation Menu** components:

  * `NavigationMenu`
  * `NavigationMenuList`
  * `NavigationMenuTrigger`
  * `NavigationMenuContent`
  * `NavigationMenuItem`
  * `NavigationMenuLink`
* Use **TailwindCSS** for layout and spacing
* Navbar component goes inside `components/navbar.tsx`

### **Folder Structure Alignment**

Must strictly link menu items to existing directories such as:

```
app/about/surge-swipe
app/become-a/partner
app/hire-from-surge-swipe
```

### **Routing**

Use:

```tsx
import Link from "next/link";
```

### **Layout Integration**

In `/app/layout.tsx`:

```tsx
import Navbar from "@/components/navbar";
```

Place before `{children}`.

---

# ## 🔗 References / Designs / Docs

* Shadcn Navigation Menu: [https://ui.shadcn.com/docs/components/navigation-menu](https://ui.shadcn.com/docs/components/navigation-menu)
* TailwindCSS Docs: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
* Next.js App Router Navigation: [https://nextjs.org/docs/app/building-your-application/routing](https://nextjs.org/docs/app/building-your-application/routing)

---

# ## ⏱️ Priority

**High** – Needed for complete site navigation and for aligning with client UI expectations.

---

## shadcn code for the navbar implementation

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

export default function ClientNavbar() {
  return (
    <header className="w-full shadow bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Logo */}
        <div className="text-2xl font-bold">Surge Swipe</div>

        {/* Main Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">Home</NavigationMenuLink>
            </NavigationMenuItem>

            {/* About Us Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-64">
                  <li className="p-2 hover:bg-gray-100 rounded">About Surge Swipe</li>
                  <li className="p-2 hover:bg-gray-100 rounded">Online Training</li>
                  <li className="p-2 hover:bg-gray-100 rounded">Corporate Training</li>
                  <li className="p-2 hover:bg-gray-100 rounded">College Collaboration</li>
                  <li className="p-2 hover:bg-gray-100 rounded">Mini & Major Projects Assistance</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Become A Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Become A</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-52">
                  <li className="p-2 hover:bg-gray-100 rounded">Partner</li>
                  <li className="p-2 hover:bg-gray-100 rounded">Instructor</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">Hire From Surge Swipe</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">Careers</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2">Contact Us</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl">Login</Button>
          <Button className="rounded-xl">Register</Button>
        </div>
      </nav>
    </header>
  );
}




Follow exact  code and  styling 
