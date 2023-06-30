
import Image from "next/image"
import {MagnifyingGlassIcon,UserCircleIcon} from "@heroicons/react/24/solid"
import {GlobeAltIcon,Bars3Icon} from "@heroicons/react/24/outline"
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-4 md:px-10">
        <div className="cursor-pointer my-auto">
            <Image
            src='https://links.papareact.com/qd3'
            alt="logo"
           
            width={100}
            height={100}
            />
        </div>
        <div className="flex items-center justify-between  md:border-2 rounded-full md:shadow-sm ">

            <input type="text" className="ml-4 transparent outline-none md:flex-grow text-sm text-gray-600 placeholder:text-gray-400" placeholder="Start your search" />
            <MagnifyingGlassIcon className="h-8 w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden lg:inline-block mr-1"/>
        </div>
        <div className="flex space-x-4 items-center justify-end text-gray-500">
          <p className="hidden md:inline">Become a host</p>
          <GlobeAltIcon className="h-6 w-6 cursor-pointer"/>
          <div className="flex border-[1px] border-gray-500 p-2 rounded-full items-center gap-2">
            <Bars3Icon  className="h-5 w-5 cursor-pointer"/>
            <UserCircleIcon  className="h-5 w-5 cursor-pointer"/>
          </div>
        </div>
    </header>
  )
}
