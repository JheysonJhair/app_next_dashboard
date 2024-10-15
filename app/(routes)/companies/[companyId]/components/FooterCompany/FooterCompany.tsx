"use client"
import { Button } from "@/components/ui/button";
import { FooterCompanyProps } from "./FooterCompany.types";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

export default function FooterCompany(props: FooterCompanyProps) {
  const { companyId } = props;
  const router = useRouter();
  const onDeleteCompany = async () => {
    try {
      axios.delete(`/api/company/${companyId}`);
      toast({
        title: "deleted company",
      });
      router.push("/companies");
    } catch (error) {
      toast({
        title: "somthin wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-end mt-5">
      <Button variant="destructive" onClick={onDeleteCompany}>
        <Trash className="w-4 h-4 mr-2" />
        Remove company
      </Button>
    </div>
  );
}
