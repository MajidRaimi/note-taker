import { Home, Settings, CreditCard } from "lucide-react";
import { NavItemsProps } from "../types";

const navItems: NavItemsProps[] = [
  {
    name: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    name: "Billing",
    href: "/billing",
    icon: CreditCard,
  },
];

export default navItems;
