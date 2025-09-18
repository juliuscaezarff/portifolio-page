"use client";

import {
  Activity,
  Component,
  Home,
  Mail,
  Package,
  SunMoon,
} from "lucide-react";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

const data = [
  {
    title: "Home",
    icon: (
      <Home className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Products",
    icon: (
      <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Activity",
    icon: (
      <Activity className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  // {
  //   title: 'Change Log',
  //   icon: (
  //     <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
  //   ),
  //   href: '#',
  // },
  {
    title: "Email",
    icon: (
      <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Theme",
    icon: (
      <SunMoon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

export function DockComponent() {
  return (
    <div className="absolute bottom-2 left-1/2 max-w-full -translate-x-1/2">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
