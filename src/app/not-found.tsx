import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";

export default function NotFound() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-start">
                <h1 className="text-[48px] font-bold">Not found</h1>
                <p className="mt-2 text-[24px] text-[#979797] font-semibold mb-20">Sorry, there is nothing at this URL.</p>
                <Link href="/" className="mt-4 text-[#FF4C4F] text-[20px] font-semibold hover:underline flex flex-row gap-2">
                    <FaArrowDown className="rotate-130" />
                    Go back home
                </Link>
            </div>
        </div>
    )
}
