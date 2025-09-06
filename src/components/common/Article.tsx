import Image from "next/image"
import Link from "next/link"

interface ArticleProps {
    title: string,
    content: string,
    link: string,
    image?: string,
    url?: string
}
const Article = ({ title, content, link, image, url }: ArticleProps) => {
    return (
        <div className="text-[10]">
            <div className="w-40">
                <div className="w-full h-20 bg-no-repeat bg-cover bg-[center_bottom_100%] rounded-lg mt-1"
                    style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className="pl-1 mt-3">
                    <h3 className="font-semibold text-[var(--foreground)] mt-1 mb-2">{title}</h3>
                    <p className="mb-2">{content}</p>
                    <Link href={`${url}`} className="font-semibold text-[var(--foreground)]">{link}</Link>
                </div>
            </div>
        </div>
    )
}

export default Article