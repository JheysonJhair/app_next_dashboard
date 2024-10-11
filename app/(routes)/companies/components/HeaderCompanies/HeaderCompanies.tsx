"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import FormCreateCustomer from "../FormCreateCustomer/FormCreateCustomer";

export default function HeaderCompanies() {
  const [openModalCreate, setopenModalCreate] = useState(false);
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl">list of comapnies</h2>
      <Dialog open={openModalCreate} onOpenChange={setopenModalCreate}>
        <DialogTrigger asChild>
          <Button>Create compnies</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Create custormer</DialogTitle>
            <DialogDescription>Create a confirgure customer</DialogDescription>
          </DialogHeader>
          <FormCreateCustomer/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
