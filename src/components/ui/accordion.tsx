import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import basecolor from "@/constant/color";
import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("rounded-xl shadow-md overflow-hidden mb-4", className)}
      style={{
        backgroundColor: basecolor.darkBlue,
      }}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          `
          group flex w-full items-center justify-between
          px-8 py-6 text-left
          text-lg font-semibold
          transition-all duration-300
          data-[state=open]:font-bold
          `,
          className,
        )}
        style={{
          color: "white",
        }}
        {...props}
      >
        {children}
        <ChevronDownIcon className="size-5 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        `
        overflow-hidden
        data-[state=closed]:animate-accordion-up
        data-[state=open]:animate-accordion-down
        `,
        className,
      )}
      {...props}
    >
      <div
        className="px-8 py-6 text-base leading-relaxed rounded-md"
        style={{
          backgroundColor: basecolor.lightGrey,
          color: basecolor.darkgrey,
        }}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
