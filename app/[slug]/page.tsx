import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Career } from "@/components/main/career";
import { Skills } from "@/components/main/skills";

export async function generateStaticParams() {
  // Return an array of possible dynamic parameters
  return [
    { slug: 'example' },
    // Add other static paths if necessary
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Career />
        <Projects />
      </div>
    </main>
  );
}