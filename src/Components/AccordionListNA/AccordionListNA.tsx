import React, { useState } from "react";
import { AccordionListProps } from "../../interfaces";
import AccordionNA from "../AccordionNA/AccordionNA";

const AccordionListNA: React.FC<AccordionListProps> = ({ accordions }) => {
  const [openAccordion, setOpenAccordion] =useState<number | null>(accordions[0]?.id || null);

  const handleToggle = (id: number) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
    console.log(id)
    
  };
  return (
    <div className="flex flex-col gap-y-7.5">
      {accordions.map((accordion) => (
        <AccordionNA
          key={accordion.id}
          accordion={accordion}
          isOpen={openAccordion === accordion.id}
          onToggle={() => handleToggle(accordion.id)}
        />
      ))}
    </div>
  );
};

export default AccordionListNA;
