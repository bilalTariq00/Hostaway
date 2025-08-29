"use client";

import React from "react";

import { useState } from "react";
import {
  Home,
  Calendar,
  Inbox,
  CalendarDays,
  List,
  DollarSign,
  FileText,
  CheckSquare,
  Star,
  CreditCard,
  Lock,
  Settings,
  Smartphone,
  ChevronRight,
  ChevronDown,
  BadgeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    id: "overview",
    label: "Overview",
    icon: <Home className="h-5 w-5" />,
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: <Calendar className="h-5 w-5" />,
    children: [
      {
        id: "multi",
        label: "Multi",
        icon: <CalendarDays className="h-4 w-4" />,
      },
      {
        id: "monthly",
        label: "Monthly",
        icon: <CalendarDays className="h-4 w-4" />,
      },
      {
        id: "yearly",
        label: "Yearly",
        icon: <CalendarDays className="h-4 w-4" />,
      },
    ],
  },
  {
    id: "inbox",
    label: "Inbox",
    icon: <Inbox className="h-5 w-5" />,
    badge: { text: "99+", color: "bg-orange-500" },
    children: [
      { id: "inbox-main", label: "Inbox", icon: <Inbox className="h-4 w-4" /> },
      {
        id: "message-templates",
        label: "Message Templates",
        icon: <FileText className="h-4 w-4" />,
      },
      {
        id: "automations",
        label: "Automations",
        icon: <Settings className="h-4 w-4" />,
      },
      {
        id: "manage-messages",
        label: "Manage Messages",
        icon: <Inbox className="h-4 w-4" />,
      },
    ],
    defaultPage: "inbox-main",
  },
  {
    id: "reservations",
    label: "Reservations",
    icon: <CalendarDays className="h-5 w-5" />,
    children: [
      {
        id: "reservations-main",
        label: "Reservations",
        icon: <CalendarDays className="h-4 w-4" />,
      },
      {
        id: "custom-fields-res",
        label: "Custom Fields",
        icon: <FileText className="h-4 w-4" />,
      },
      {
        id: "guestbook",
        label: "Guestbook",
        icon: <FileText className="h-4 w-4" />,
      },
      {
        id: "coupons",
        label: "Coupons",
        icon: <BadgeIcon className="h-4 w-4" />,
      },
    ],
    defaultPage: "reservations-main",
  },
  {
    id: "listings",
    label: "Listings",
    icon: <List className="h-5 w-5" />,
    children: [
      {
        id: "listings-main",
        label: "Listings",
        icon: <List className="h-4 w-4" />,
      },
      {
        id: "custom-fields-list",
        label: "Custom Fields",
        icon: <FileText className="h-4 w-4" />,
      },
    ],
    defaultPage: "listings-main",
  },
  {
    id: "financial-reporting",
    label: "Financial Reporting",
    icon: <DollarSign className="h-5 w-5" />,
    children: [
      {
        id: "analytics",
        label: "Analytics",
        icon: <DollarSign className="h-4 w-4" />,
      },
      {
        id: "rental-activity",
        label: "Rental Activity",
        icon: <DollarSign className="h-4 w-4" />,
      },
      {
        id: "occupancy-report",
        label: "Occupancy Report",
        icon: <DollarSign className="h-4 w-4" />,
      },
      {
        id: "quickbooks",
        label: "QuickBooks",
        icon: <DollarSign className="h-4 w-4" />,
      },
    ],
    defaultPage: "analytics",
  },
  {
    id: "expenses",
    label: "Expenses and Extras",
    icon: <CreditCard className="h-5 w-5" />,
    isNew: true,
    children: [
      {
        id: "expenses-main",
        label: "Expenses",
        icon: <CreditCard className="h-4 w-4" />,
      },
      {
        id: "extras",
        label: "Extras",
        icon: <CreditCard className="h-4 w-4" />,
      },
      {
        id: "categories",
        label: "Categories",
        icon: <List className="h-4 w-4" />,
      },
      {
        id: "automations-exp",
        label: "Automations",
        icon: <Settings className="h-4 w-4" />,
      },
    ],
    defaultPage: "expenses-main",
  },
  {
    id: "owner-statements",
    label: "Owner Statements",
    icon: <FileText className="h-5 w-5" />,
    children: [
      {
        id: "statements",
        label: "Statements",
        icon: <FileText className="h-4 w-4" />,
      },
      {
        id: "auto-statements",
        label: "Auto Statements",
        icon: <FileText className="h-4 w-4" />,
      },
    ],
    defaultPage: "statements",
  },
  {
    id: "tasks",
    label: "Tasks",
    icon: <CheckSquare className="h-5 w-5" />,
    children: [
      {
        id: "manage-tasks",
        label: "Manage Tasks",
        icon: <CheckSquare className="h-4 w-4" />,
      },
      {
        id: "manage-auto-tasks",
        label: "Manage Auto-tasks",
        icon: <CheckSquare className="h-4 w-4" />,
      },
      {
        id: "checklist-templates",
        label: "Checklist Templates",
        icon: <CheckSquare className="h-4 w-4" />,
      },
      {
        id: "archived",
        label: "Archived",
        icon: <CheckSquare className="h-4 w-4" />,
      },
      {
        id: "custom-fields-tasks",
        label: "Custom Fields",
        icon: <FileText className="h-4 w-4" />,
      },
    ],
    defaultPage: "manage-tasks",
  },
  {
    id: "reviews",
    label: "Reviews",
    icon: <Star className="h-5 w-5" />,
    children: [
      {
        id: "manage-reviews",
        label: "Manage Reviews",
        icon: <Star className="h-4 w-4" />,
      },
      {
        id: "auto-reviews",
        label: "Auto-reviews",
        icon: <Star className="h-4 w-4" />,
        isNew: true,
      },
      {
        id: "review-templates",
        label: "Review Templates",
        icon: <FileText className="h-4 w-4" />,
      },
    ],
    defaultPage: "manage-reviews",
  },
  {
    id: "guest-payments",
    label: "Guest Payments",
    icon: <CreditCard className="h-5 w-5" />,
    children: [
      {
        id: "charges",
        label: "Charges",
        icon: <CreditCard className="h-4 w-4" />,
      },
      {
        id: "auto-payments",
        label: "Auto-payments",
        icon: <CreditCard className="h-4 w-4" />,
      },
      {
        id: "document-templates",
        label: "Document Templates",
        icon: <FileText className="h-4 w-4" />,
      },
    ],
    defaultPage: "charges",
  },
  {
    id: "smart-locks",
    label: "Smart Locks",
    icon: <Lock className="h-5 w-5" />,
  },
  {
    id: "channel-manager",
    label: "Channel Manager",
    icon: <Settings className="h-5 w-5" />,
    children: [
      {
        id: "listing-mapping",
        label: "Listing Mapping",
        icon: <Settings className="h-4 w-4" />,
      },
      {
        id: "channels",
        label: "Channels",
        icon: <Settings className="h-4 w-4" />,
      },
    ],
    defaultPage: "listing-mapping",
  },
  {
    id: "booking-engine",
    label: "Booking Engine",
    icon: <Smartphone className="h-5 w-5" />,
    children: [
      {
        id: "design",
        label: "Design",
        icon: <Smartphone className="h-4 w-4" />,
      },
      {
        id: "listing-be",
        label: "Listing",
        icon: <List className="h-4 w-4" />,
      },
      { id: "pages", label: "Pages", icon: <FileText className="h-4 w-4" /> },
      {
        id: "settings-be",
        label: "Settings",
        icon: <Settings className="h-4 w-4" />,
      },
      {
        id: "translations",
        label: "Translations",
        icon: <FileText className="h-4 w-4" />,
      },
    ],
    defaultPage: "design",
  },
];

export function Sidebar({ collapsed }) {
  const [activeItem, setActiveItem] = useState("overview");
  const [expandedItems, setExpandedItems] = useState(["calendar"]);

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleItemClick = (item) => {
    if (item.children) {
      toggleExpanded(item.id);
      if (item.defaultPage) {
        setActiveItem(item.defaultPage);
      }
    } else {
      setActiveItem(item.id);
    }
  };

  const renderMenuItem = (item, level = 0) => {
    const isExpanded = expandedItems.includes(item.id);
    const isActive = activeItem === item.id;
    const hasChildren = item.children && item.children.length > 0;

    const menuButton = (
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 h-10 px-3 text-left font-normal",
          level > 0 && "ml-6 h-9",
          isActive &&
            "bg-[#E2FAFA] text-[#2F9F9F] hover:bg-[#E2FAFA] hover:text-[#2F9F9F]",
          collapsed && "justify-center px-2"
        )}
        onClick={() => handleItemClick(item)}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {item.icon}
          {!collapsed && (
            <>
              <span className="truncate">{item.label}</span>
              {item.isNew && (
                <Badge className="bg-green-500 text-white text-xs px-1.5 py-0.5 h-5">
                  new
                </Badge>
              )}
              {item.badge && (
                <Badge
                  className={cn(
                    item.badge.color,
                    "text-white text-xs px-1.5 py-0.5 h-5"
                  )}
                >
                  {item.badge.text}
                </Badge>
              )}
            </>
          )}
        </div>
        {!collapsed && hasChildren && (
          <div className="flex-shrink-0">
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </div>
        )}
      </Button>
    );

    if (collapsed) {
      return (
        <TooltipProvider key={item.id}>
          <Tooltip>
            <TooltipTrigger asChild>{menuButton}</TooltipTrigger>
            <TooltipContent side="right" className="flex items-center gap-2">
              {item.label}
              {item.badge && (
                <Badge className={cn(item.badge.color, "text-white text-xs")}>
                  {item.badge.text}
                </Badge>
              )}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return (
      <div key={item.id}>
        {menuButton}
        {hasChildren && isExpanded && !collapsed && (
          <div className="ml-3">
            {item.children?.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={cn(
        "fixed left-0  h-[calc(100vh)] bg-white border-r border-gray-200 transition-all duration-300 z-40",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto py-4 px-2">
          <nav className="space-y-1">
            {menuItems.map((item) => renderMenuItem(item))}
          </nav>
        </div>

        {/* Social Media Icons */}
        {!collapsed && (
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-center ">
              <Button variant="ghost" size="sm" className="p-2">
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">▶</span>
                </div>
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center">
                  <span className="text-white text-xs">T</span>
                </div>
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">f</span>
                </div>
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <div className="w-6 h-6 bg-blue-700 rounded flex items-center justify-center">
                  <span className="text-white text-xs">in</span>
                </div>
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">ig</span>
                </div>
              </Button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
