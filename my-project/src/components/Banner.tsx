import Image from "next/image"

export const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image  src='https://links.papareact.com/0fm' alt="bannerImage"
         fill
         style={{objectFit:'cover'}}
        />
        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm sm:text-lg font-semibold">Not sure where to go?</p>
            <button className=" my-3 text-sm sm:text-lg font-semibold text-purple-500 bg-white px-6 py-3 shadow-md rounded-full hover:shadow-xl active:scale-90 transition duration-150 ">I'm flexible!</button>
        </div>
    </div>
  )
}
