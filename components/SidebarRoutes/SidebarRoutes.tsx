"use client"

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  dataGeneralSideebar,
  dataToolsSidebar,
  dataSupportSidebar,
} from "./SidebarRoutes.data";
import SidebarItem from "../SidebarItem/SidebarItem";

export default function SidebarRoutes() {
  return (
    <div className="flex flex-col  h-full">
      <div>
        <div>
          <div className="p-2 md:p-6">
            <p className="text-slate-500 mb-2">GENERAL</p>
            {dataGeneralSideebar.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </div>
        </div>{" "}
        <Separator />
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">TOOLS</p>
          {dataToolsSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
        <Separator />
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">SUPPORT</p>
          {dataSupportSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>
      <div>
        <div className="text-center p-6">
          <Button variant="outline" className="w-full">Upgrade Plan</Button>
        </div>
        <Separator />
        <footer className="mt-3 p-3 text-center"> 2024. All right reserved</footer>
      </div>
    </div>
  );
}
