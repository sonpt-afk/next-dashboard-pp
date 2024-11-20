import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent >Place content for the popover here.</PopoverContent>
</Popover>
    <h1 className="text-red-500">sfdg</h1>
    </div>
  );
}
