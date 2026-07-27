import Button from "./Button";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="bg-page-soft">
      <div className="mx-auto max-w-reading px-6 py-20 text-center lg:py-28">
        <SectionHeading
          sectionLabel="Contact"
          title="Thanks for taking a look."
          description="If you'd like to know more about my projects or connect, you can find me here."
          align="center"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="https://github.com/David-Nakeeran" external>
            GitHub
          </Button>
          <Button
            href="https://www.linkedin.com/in/david-n-29415836a/"
            variant="secondary"
            external
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}
