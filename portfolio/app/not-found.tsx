import Image from "next/image"
import Image404 from "@/public/assets/404.png"
export default function NotFound() {
  return (
    <div className="font-raleway flex flex-col items-center justify-center">
      <Image src={Image404} alt="404" className="desktop:w-1/2 mt-10" />
    </div>
  )
}