"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavigationMenuDemo } from "./navMenu"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button className="text-black"><GiHamburgerMenu/></Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>SHOP.CO</SheetTitle>

            </SheetHeader>
               {/* navbar */}
    <ul className=''>
        <li className='grid grid-cols-1 gap-y-4 '>
            <Link href={""} className="hover:text-gray-700">
            <NavigationMenuDemo/>
            </Link>
            <Link href={"/shop"} className="hover:text-gray-700">On Sale</Link>
            <Link href={""} className="hover:text-gray-700">New Arrivals</Link>
            <Link href={""} className="hover:text-gray-700">Brands</Link>
        </li>
    </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
