import CustomIcon from "@/components/CustomIcon/CustomIcon";
import { BarChart } from "lucide-react";
import GraphicSuscribers from "../GraphicSuscribers/GraphicSuscribers";

export default function SalesDistributor() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
      <div className="flex gap-x-2 items-center">
        <CustomIcon icon={BarChart} />
        <p className="text-xl">Sales distriubutor</p>
      </div>
      <GraphicSuscribers/>
    </div>
  );
}
