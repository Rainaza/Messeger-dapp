
import Image from "next/image"
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid"
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        <div className="cursor-pointer my-auto">
            <Image
            src='https://links.papareact.com/qd3'
            alt="logo"
            width={200}
            height={200}
            />
        </div>
        <div className="flex items-center justify-center">
            <input type="text" placeholder="Start your search" />
            <MagnifyingGlassIcon className="h-5 w-5"/>
        </div>
        <div></div>
    </header>
  )
}
