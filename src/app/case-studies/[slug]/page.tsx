// app/case-studies/[slug]/page.tsx

import { notFound } from "next/navigation";
import { caseStudies } from "../../data/case-studies";
import { CaseStudyView } from "./CaseStudyView";

export async function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  
  const project = caseStudies.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const nextProject = caseStudies.find((item) => item.slug === project.nextProjectSlug);

  return <CaseStudyView project={project} nextProject={nextProject} />;
}