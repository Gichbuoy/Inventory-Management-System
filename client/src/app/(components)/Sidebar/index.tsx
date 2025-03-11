"use client";

import { Menu } from 'lucide-react';
import React from 'react'

const Sidebar = () => {
    return (
        <div>
          {/* TOP LOGO */}
          <div
            className="flex gap-3 justify-between md:justify-normal items-center pt-8">
            {/* <Image
              src="https://s3-inventorymanagement.s3.us-east-2.amazonaws.com/logo.png"
              alt="edstock-logo"
              width={27}
              height={27}
              className="rounded w-8"
            /> */}
            <div>logo</div>
            <h1
              className="font-extrabold text-2xl"
            >
              STOCKFLOW
            </h1>
    
            <button
              className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
              onClick={() => {}}
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
    
          {/* LINKS */}
          <div className="flex-grow mt-8">
            {/* <SidebarLink
              href="/dashboard"
              icon={Layout}
              label="Dashboard"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink
              href="/inventory"
              icon={Archive}
              label="Inventory"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink
              href="/products"
              icon={Clipboard}
              label="Products"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink
              href="/users"
              icon={User}
              label="Users"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink
              href="/settings"
              icon={SlidersHorizontal}
              label="Settings"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink
              href="/expenses"
              icon={CircleDollarSign}
              label="Expenses"
              isCollapsed={isSidebarCollapsed}
            /> */}
          </div>
    
          {/* FOOTER */}
          <div>
            <p className="text-center text-xs text-gray-500">&copy; 2025 StockFlow</p>
          </div>
        </div>
    );
};

export default Sidebar;