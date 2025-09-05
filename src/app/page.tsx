import Article from "@/components/common/Article";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import { Section, SectionContent, SectionTitle } from "@/components/common/Section";

export default function Home() {
  return (
    <div className="mx-5">
      <Header />

      <div>
        <Hero />
        <Section>
          <SectionTitle>
            <h2>My skills</h2>
          </SectionTitle>
          <SectionContent>
            <p>Through my studies, I've gained a solid understanding of computer science and web development concepts, and have dedicated a lot of my free time to apply these concepts to real-world scenarios and applications.</p>
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>
            <h2>What I’ve been working on </h2>
          </SectionTitle>
          <SectionContent className="w-6/6">
            <p className="w-5/6">I like to stay busy and always have a project in the works. Take a look at some of the applications, articles, and companies l've dedicated my time to.</p>
            <div className="grid grid-cols-2 gap-4">
              <Article
                title="Bewear Ecommerce"
                content="An e-commerce applicotion built with React & Shopify for a coffee roasting company"
                link="Ver Projeto" />
              <Article
                title="Timer"
                content="An e-commerce applicotion built with React & Shopify for a coffee roasting company"
                link="Ver Projeto" />
              <Article
                title="University Uninassau"
                content="An e-commerce applicotion built with React & Shopify for a coffee roasting company"
                link="Ler Historia" />
              <Article
                title="Anaise de Dados"
                content="An e-commerce applicotion built with React & Shopify for a coffee roasting company"
                link="Ler Explição" />
            </div>

          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>
            <h2>Let’s Biuld Something Together </h2>
          </SectionTitle>
          <SectionContent>
            <p>Feel free to reach out if you’re looking for a
              developer, have a question, or just want to connect.</p>
            <p className="text-black font-semibold">herberth.ferreira6@gmail.com</p>
          </SectionContent>
        </Section>
      </div>

      <Footer />

    </div>
  );
}
