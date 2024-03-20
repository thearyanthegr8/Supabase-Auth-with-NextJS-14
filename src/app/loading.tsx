import { Icons } from "@/components/ui/icons";
import React from "react";

function loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Icons.spinner className="animate-spin" color="black" />
    </div>
  );
}

export default loading;
