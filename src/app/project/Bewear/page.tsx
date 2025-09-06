import Article from "@/components/common/Article";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Section, SectionContent, SectionTitle } from "@/components/common/Section";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { FaReact } from "react-icons/fa";

export default function NotFound() {
    return (
        <>
            <div className="mx-5">
                <div className="py-5">
                    <Header />
                </div>

                <FaArrowLeft size={18} className="mt-10" />



                <Section id="Hero" className="mt-20">
                    <SectionTitle>
                        <h2 className="text-[32px]">Project Name</h2>
                    </SectionTitle>
                    <SectionContent>
                        <p>Through my studies, I've gained a solid understanding of computer science and web development concepts, and have dedicated a lot of my free time to apply these concepts to real-world scenarios and applications.</p>
                    </SectionContent>
                </Section>

                <div className="grid grid-cols-3 justify-center mb-30 gap-20">
                    <div className="flex flex-col">
                        <h1 className="mb-10 font-bold">TYPE</h1>
                        <p className="text-[var(--colorforeground)] text-[14px]">Internship</p>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <h1 className="mb-10 font-bold">STACK</h1>
                        <p className="text-[var(--colorforeground)] text-[14px]">React</p>
                        <p className="text-[var(--colorforeground)] text-[14px]">GraphSQL</p>
                        <p className="text-[var(--colorforeground)] text-[14px]">Styled-compose</p>
                        <p className="text-[var(--colorforeground)] text-[14px]">Shopify</p>
                        <p className="text-[var(--colorforeground)] text-[14px]">Netlify</p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="mb-10 font-bold">LIVE</h1>
                        <Link href="/" className="text-red-600 text-[14px]">Teste</Link>
                    </div>

                </div>

                <div className="w-full h-60 bg-[var(--box)] mb-30"></div>

                <Section id="Goals" className="mb-40">
                    <SectionTitle>
                        <h2 className="">Profect Purpose and Goal</h2>
                    </SectionTitle>
                    <SectionContent>
                        <p>This project included 3 phases and iterations of the site. Phase simply allowed users to enter their email to be alerted to when the product was released. Phase 2 was quite larger and is designed to introduee users ta the CofTee By Benjamin product and answer ony questions they may have. Phase three is by far the largest and most complex- as it includes the full shop and cart pages as well as the logic and bockend thot goes along with it.</p>

                        <p>I found thot the best woy to Implcment thcse 3 p.h.ases without havlng separato vorslons savcd was to incorporote o feature floq thot will poss the corrent stote thot should be displayed ond then render content conditionany. </p>
                    </SectionContent>
                </Section>

                <div className="flex flex-row gap-x-10 items-center mb-10">
                    <div className="flex flex-col space-y-12 pl-10">
                        <div className="flex flex-row items-center gap-2">
                            <FaReact size={28} />
                            <p>React</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FaReact size={28} />
                            <p>GraphSQL</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FaReact size={28} />
                            <p>Shopify</p>
                        </div>
                    </div>



                    <Section id="Stack">
                        <SectionTitle>
                            <h2 className="">Web Stack and Explanation</h2>
                        </SectionTitle>
                        <SectionContent className="w-6/6">
                            <p>I found thot the best woy to Implcment thcse 3 p.h.ases without havlng separato vorslons savcd was to incorporote o feature floq thot will poss the corrent stote thot should be displayed ond then render content conditionany. </p>

                            <p>I found thot the best woy to Implcment thcse 3 p.h.ases without havlng separato vorslons savcd was to incorporote o feature floq thot will poss the corrent stote thot should be displayed ond then render content conditionany. </p>
                        </SectionContent>
                    </Section>
                </div>

                <div className="grid grid-cols-2 gap-4 h-130 p-4 mb-30">
                    <div className="flex flex-col gap-4">
                        <div className="bg-[var(--box)] h-1/3 rounded"></div>
                        <div className="bg-[var(--box)] h-2/3 rounded"></div>
                    </div>
                    <div className="bg-[var(--box)] rounded"></div>
                </div>

                <Section id="Purpose" className="items-center flex flex-col text-center mb-30">
                    <SectionTitle>
                        <h2 className="text-xl">Profect Purpose and Goal</h2>
                    </SectionTitle>
                    <SectionContent className="">
                        <p>This project included 3 phases and iterations of the site. Phase simply allowed users to enter their email to be alerted to when the product was released. Phase 2 was quite larger and is designed to introduee users ta the CofTee By Benjamin product and answer ony questions they may have.</p>
                        <p>Phase three is by far the largest and most complex- as it includes the full shop and cart pages as well as the logic and bockend thot goes along with it.</p>
                    </SectionContent>
                </Section>

                <div className="w-full h-60 bg-[var(--box)] mb-30"></div>

                <Section id="Leassons">
                    <SectionTitle>
                        <h2>Leassons Learned</h2>
                    </SectionTitle>
                    <SectionContent className="mt-10">
                        <p>I could spend all doy describing the lessons thot 1 leorr.ea while womng on thiS project but the most important ones involved my newfound understanding of React Hooks, Git management, Fcature Keys. and API Intcgranon, As my first lorge project usjng Rcoct. I leornca a Iot of Ics;ons regardir.g code  5tructure and organization. When I first began, I would write sloppy code and mave on. but now I know doing cnn come back to you; spcnd a lot morc time rcfactoring and improving  every line I code I write. for the best readability and far fewer headaches.</p>
                    </SectionContent>
                </Section>

                <Section id="Leassons">
                    <SectionTitle>
                        <h2>Other Projects</h2>
                    </SectionTitle>
                    <SectionContent className="mt-10 flex justify-between">
                        <Article
                            title="Project One"
                            content="A tool design to help web developers build live. custom templates & export code"
                            link="Ver Projeto"
                        ></Article>
                        <Article
                            title="Project One"
                            content="A tool design to help web developers build live. custom templates & export code"
                            link="Ver Projeto"
                        ></Article>
                    </SectionContent>
                </Section>

                <Section id="contact">
                    <SectionTitle>
                        <h2>Let’s Biuld Something Together </h2>
                    </SectionTitle>
                    <SectionContent>
                        <p>Feel free to reach out if you’re looking for a
                            developer, have a question, or just want to connect.</p>
                        <p className="text-[var(--foreground)] font-semibold">herberth.ferreira6@gmail.com</p>
                    </SectionContent>
                </Section>

                <Footer />


            </div>
        </>
    )
}
