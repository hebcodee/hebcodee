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
          <SectionContent>
            <p>I like to stay busy and always have a project in the works. Take a look at some of the applications, articles, and companies l've dedicated my time to.</p>
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
