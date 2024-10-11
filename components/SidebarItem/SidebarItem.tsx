"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SiderbarItemProps } from "./SidebarItem.type";

export default function SidebarItem(props: SiderbarItemProps) {
  const { item } = props;
  const { href, icon: Icon, label } = item;

  const pathname = usePathname();
  const activePath = pathname === href
  return (
    <Link
      href={href}
      className={cn(
        `flex gap-x-2 mt-2 light:text-salte-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 roundend-lg cursor-pointer`,activePath && 'bg-slate-400/20'
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1}></Icon>
      {label}
    </Link>
  );
}
