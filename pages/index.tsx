import Head from "next/head";
import About from "components/about/About";
import Contact from "components/contact/Contact";
import Experiences from "components/experiences/Experiences";
import Footer from "components/footer/Footer";
import Hero from "components/hero/Hero";
import Navbar from "components/navbar/Navbar";
import { PageWrapper } from "components/page-wrapper/PageWrapper";
import Projects from "components/projects/Projects";
import Section from "components/section/Section";
import Skills from "components/skills/Skills";
import { SITE } from "data/site";

const pageTitle = `${SITE.name} | ${SITE.title}`;
const ogImage = `${SITE.url.replace(/\/$/, "")}${SITE.ogImage}`;

export default function Home() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={SITE.metaDescription} />
        <link rel="canonical" href={SITE.url} />
        <link rel="icon" href="/img/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={SITE.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE.url} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={pageTitle} />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={SITE.metaDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <div id="top">
        <header>
          <Navbar />
        </header>
        <PageWrapper>
          <main id="main">
            <Hero />
            <About />
            <Section
              id="experiences"
              number="02"
              label="Experience"
              title="Experience"
              description="Building web products across front-end, back-end and modern web technologies."
              tone="secondary"
            >
              <Experiences />
            </Section>
            <Section
              id="projects"
              number="03"
              label="Projects"
              title="Selected work"
              description="A selection of products and tools I've built across web, backend and systems development."
            >
              <Projects />
            </Section>
            <Section
              id="skills"
              number="04"
              label="Skills"
              title="Technologies I work with"
              description="From interfaces and APIs to databases, testing and cloud deployment."
              tone="secondary"
            >
              <Skills />
            </Section>
            <Contact />
          </main>
          <Footer />
        </PageWrapper>
      </div>
    </>
  );
}
