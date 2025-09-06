import Article from "@/components/common/Article";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import { Section, SectionContent, SectionTitle } from "@/components/common/Section";

export default function Home() {
  return (
    <div className="mx-5">
      <div className="py-5">
        <Header />
      </div>

      <div>
        <Hero />
        <Section id="skills">
          <SectionTitle>
            <h2>My skills</h2>
          </SectionTitle>
          <SectionContent className="w-6/6">
            <p className="w-5/6">Through my studies, I've gained a solid understanding of computer science and web development concepts, and have dedicated a lot of my free time to apply these concepts to real-world scenarios and applications.</p>
            <div className="grid grid-cols-6 grid-rows-4 w-full h-70 gap-4">
              <div className="row-span-4 col-span-2  bg-[var(--gridforeground)] rounded-lg p-2">
                <h1 className="mb-6 text-[var(--foreground) font-semibold">Front-End</h1>
                <div className="grid grid-cols-2 gap-4 justify-items-center">
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                </div>

              </div>
              <div className="row-span-2 col-span-3 bg-[var(--gridforeground)]">
                <h1 className="px-4 text-[var(--foreground)">Back-End</h1>
                <div className="grid grid-cols-3 gap-4 p-4 justify-items-center" >
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                </div>
              </div>
              <div className="row-span-2 col-span-1 bg-[var(--gridforeground)]">
                <h1 className="pl-1.5 max-w-full mb-3 text-[var(--foreground)">Testes</h1>
                <div className="grid grid-cols-1 gap-4 px-1.5 justify-items-center">
                  <div className="w-8 h-8  max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8  max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                </div>
              </div>
              <div className="row-span-2 col-span-2 bg-[var(--gridforeground)]">
                <h1 className="pl-3 text-[var(--foreground)">Banco de dados</h1>
                <div className="grid grid-cols-2 gap-4 p-2 justify-items-center">
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                </div>
              </div>
              <div className="row-span-2 col-span-2 bg-[var(--gridforeground)]">
                <h1 className="px-3 text-[var(--foreground)">Cloud/DevOps</h1>
                <div className="grid grid-cols-2 gap-4 p-2 justify-items-center">
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                  <div className="w-8 h-8 max-w-full max-h-full  bg-[var(--box)] rounded-lg"></div>
                </div>
              </div>
            </div>
          </SectionContent>
        </Section>
        <Section id="projects">
          <SectionTitle>
            <h2>What I’ve been working on </h2>
          </SectionTitle>
          <SectionContent className="w-6/6">
            <p className="w-5/6 mb-12">I like to stay busy and always have a project in the works. Take a look at some of the applications, articles, and companies l've dedicated my time to.</p>
            <div className="grid grid-cols-2 gap-5 w-full space-y-6">
              <Article
                title="Bewear Ecommerce"
                content="An e-commerce applicotion built with React & Shopify for a coffee roasting company"
                link="Ver Projeto"
                image="/BewearImage.png"
                url="/project/Bewear" />
              <Article
                title="University Uninassau"
                content="An e-commerce applicotion built with React & Shopify for a coffee roasting company"
                link="Ler Historia"
                image="/UninassauImage.png" />

            </div>

          </SectionContent>
        </Section>
        <Section id="contact">
          <SectionTitle>
            <h2>Let’s Biuld Something Together </h2>
          </SectionTitle>
          <SectionContent>
            <p>Feel free to reach out if you’re looking for a
              developer, have a question, or just want to connect.</p>
            <p className="text-[var(--foreground)] font-semibold hover:underline hover:curosr-pointer">herberth.ferreira6@gmail.com</p>
          </SectionContent>
        </Section>
      </div>

      <Footer />

    </div>
  );
}
