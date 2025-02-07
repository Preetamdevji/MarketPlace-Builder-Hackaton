import { Button } from "@/components/ui/button";
 
export function ButtonDemo() {
  return (
    <div className="flex justify-center mt-6">
      <Button className="border p-5 px-14 text-md text-black rounded-[18px] hover:bg-black hover:text-white shadow-lg">
        View All
      </Button>
    </div>
  );
}
