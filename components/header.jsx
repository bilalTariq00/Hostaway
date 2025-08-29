"use client";

import React from "react";

import { useState } from "react";
import { Search, Menu, Bell, HelpCircle, Home, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Header({ onToggleSidebar, sidebarCollapsed }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Implement search functionality
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sticky top-0 z-50">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleSidebar}
          className="p-2"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="text-2xl font-bold text-orange-500 cursor-pointer">
          Hostaway
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-64"
          />
        </form>

        {/* Newsletter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="relative p-2">
              <Mail className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center animate-bounce">
                1309
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Latest Changes</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">News</Badge>
                  <span className="text-sm">New feature updates available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Update</Badge>
                  <span className="text-sm">System maintenance completed</span>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="relative p-2">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">
                5
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-96">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="reservations">Reservations</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="others">Others</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="p-4">
                <div className="space-y-3">
                  <div className="text-sm">New reservation received</div>
                  <div className="text-sm">Message from guest</div>
                  <div className="text-sm">Payment processed</div>
                </div>
              </TabsContent>
              <TabsContent value="reservations" className="p-4">
                <div className="text-sm">Reservation notifications</div>
              </TabsContent>
              <TabsContent value="messages" className="p-4">
                <div className="text-sm">Message notifications</div>
              </TabsContent>
              <TabsContent value="others" className="p-4">
                <div className="text-sm">Other notifications</div>
              </TabsContent>
            </Tabs>
            <div className="border-t p-4 flex justify-between">
              <Button variant="ghost" size="sm">
                Mark all as seen
              </Button>
              <Button variant="ghost" size="sm">
                See all notifications
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Help */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
            >
              <HelpCircle className="h-5 w-5" />
              <span className="text-sm">Need help?</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>User Guide</DropdownMenuItem>
            <DropdownMenuItem>Email Support</DropdownMenuItem>
            <DropdownMenuItem>Call Support</DropdownMenuItem>
            <DropdownMenuItem>View Support Tickets</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Terms of Service</DropdownMenuItem>
            <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="relative p-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <Home className="h-4 w-4" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Home className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Team Name</div>
                  <div className="text-sm text-gray-500">team@example.com</div>
                </div>
              </div>
              <select className="w-full p-2 border rounded mb-3">
                <option>Select Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
              <Button className="w-full mb-2">Edit Profile</Button>
              <Button variant="outline" className="w-full bg-transparent">
                Logout
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
