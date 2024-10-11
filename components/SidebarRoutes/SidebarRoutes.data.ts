import {
  BarChart4,
  Building2,
  PanelsTopLeft,
  Settings,
  ShieldCheck,
  CircleHelpIcon,
  Calendar,
} from "lucide-react";

export const dataGeneralSideebar = [
  {
    icon: PanelsTopLeft,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Building2,
    label: "Companies",
    href: "/companies",
  },
  {
    icon: Calendar,
    label: "Calendar",
    href: "/task",
  },
];

export const dataToolsSidebar = [
  {
    icon: CircleHelpIcon,
    label: "Faqs",
    href: "/faqs",
  },
  {
    icon: Calendar,
    label: "Calendar",
    href: "/task",
  },
  {
    icon: BarChart4,
    label: "Analytics",
    href: "/analytics",
  },
];

export const dataSupportSidebar = [
  {
    icon: Settings,
    label: "Setting",
    href: "/setting",
  },
  {
    icon: ShieldCheck,
    label: "Security",
    href: "/security",
  },
];
