import Link from "next/link"

interface ArticleProps {
    title: string,
    content: string,
    link: string
}
const Article = ({ title, content, link }: ArticleProps) => {
    return (
        <div className="text-[10]">
            <div className="w-40">
                <div className="w-full h-20 bg-[#D9D9D9] rounded-lg mt-1"></div>
                <div className="pl-2">
                    <h3 className="font-semibold text-black mt-1 mb-1">{title}</h3>
                    <p className="mb-1">{content}</p>
                    <Link href="/" className="font-semibold text-black">{link}</Link>
                </div>
            </div>
        </div>
    )
}

export default Article