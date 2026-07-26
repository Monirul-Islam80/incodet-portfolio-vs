// data/case-studies.ts

export interface ImpactStat {
  label: string;
  value: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  image?: string; // Optional: image path
  video?: string; // Optional: video path
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  heroVideo?: string; // Optional: Hero MP4 video path
  heroImage?: string; // Optional: Hero static image path
  client: string;
  team: string;
  timeline: string;
  scope: string[];
  liveUrl?: string;
  previewDomain?: string;
  stats: ImpactStat[];
  challenge: {
    headline: string;
    description: string[];
  };
  solution: {
    headline: string;
    description: string;
    features: Feature[];
  };
  reflection: {
    takeaways: string[];
    quote?: string;
  };
  nextProjectSlug?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "brhex-virtual-tour",
    title: "BRHEX Studio",
    subtitle: "A Combined 360° Tour & Auto-Floorplan Platform",
    tagline: "Replacing two vendor lock-ins with one seamless, white-labeled virtual tour ecosystem.",
    
    // --- Hero Media Options (Video, Image, or omit both for fallback) ---
    // heroVideo: "/videos/brhex-demo.mp4",
    heroImage: "/casestudy-images/brhex-hero.png",
    
    client: "BRHEX Studio",
    team: "Incodet",
    timeline: "Proof of Concept",
    scope: ["360° Panorama Viewer", "Floorplan Generation", "Lead Capture", "Custom Branding System"],
    liveUrl: "https://virtual-tour-poc.vercel.app/tour/50ad98c9",
    previewDomain: "preview.brhexstudio.com",
    stats: [
      { label: "Vendor Reduction", value: "2 → 1", description: "Combined tour hosting & floor plans into a single portal." },
      { label: "Brand Retention", value: "100%", description: "Zero third-party logos shown to end-clients." },
      { label: "Interactive Flow", value: "< 1s", description: "Instant toggle between 360° viewport and floor plan." },
    ],
    challenge: {
      headline: "The Double Vendor Trap in Real Estate Media",
      description: [
        "BRHEX Studio sells high-end virtual tours and floor plans to real estate agents. However, their workflow depended on stitching together two separate third-party services: a 360° tour platform (like Matterport or iGuide) and an independent floor-plan drawing tool.",
        "This fragmented the client experience. Third-party platforms plastered external branding over BRHEX's work, and the static floor plans had zero interactive connection to the virtual tour itself. They needed an all-in-one, fully white-labeled experience."
      ]
    },
    solution: {
      headline: "Unifying Spatial Exploration and Measurement",
      description: "We engineered a proof-of-concept platform that embeds an interactive 360° webGL viewport with dynamic hotspot nodes alongside an auto-generated dimensioned floor plan.",
      features: [
        {
          title: "Seamless Panorama Navigation",
          description: "Smooth drag, zoom, and node-based hotspot transitions between interior and exterior spaces, hosted without external dependencies.",
          video: "/casestudy-images/brhex-video.mp4" // Media: Video
        },
        {
          title: "Integrated Floorplan Engine",
          description: "One click switches from the spatial panorama to a dimensioned floor plan displaying imperial and metric totals in real-time.",
          image: "/casestudy-images/brhex-floorplan-preview.png" // Media: Image
        },
        {
          title: "Embedded Lead Capture",
          description: "Live view tracking and direct agent contact triggers placed inside the viewer toolbar to capitalize on high user intent."
         , image: "/casestudy-images/brhex-view-tracking.png" // Media: Image
 
        }
      ]
    },
    reflection: {
      takeaways: [
        "Front-End Precision: Prioritized panorama rendering performance, smooth hotspot animations, and web-friendly SVG floor plan rendering.",
        "Scoping Discipline: Built right after our KITA sprint, we ran this project leaner, focused tightly on answering core technical risks.",
        "Value of Proof-of-Concepts: Validated that white-label virtual real estate software is technically viable before committing to full production."
      ],
      quote: "The POC answered our exact technical and brand questions without over-engineering prematurely."
    },
    nextProjectSlug: "kita-training"
  },
  {
    slug: "kita-training",
    title: "KI Training & Assessing",
    subtitle: "Rebuilding a Perth RTO's Web Platform in 4 Weeks",
    tagline: "Transforming a 2015-era WordPress site into a high-performance, conversion-focused platform.",
    
    // --- Hero Media Options (Image-only example) ---
    heroImage: "/casestudy-images/kita-hero.png",
    
    client: "KITA (RTO 52593)",
    team: "Incodet",
    timeline: "4 Weeks (Nov 2025)",
    scope: [
      "Full Platform Rebuild",
      "Course IA & Taxonomy",
      "Location Filtering Engine",
      "Compliance & Resource Hub",
      "Custom Elementor Design System"
    ],
    liveUrl: "https://kita.edu.au/",
    previewDomain: "kita.edu.au",
    stats: [
      { label: "Delivery Sprint", value: "4 Weeks", description: "Full redesign and launch delivered in a single 4-week sprint." },
      { label: "Hero Performance", value: "4K Res", description: "Re-encoded background video pipeline for zero startup lag." },
      { label: "Core Pathways", value: "6 Streams", description: "Structured navigation across high-risk, plant, safety, and VOC courses." },
    ],
    challenge: {
      headline: "A Dated Front Door for High-Stakes Industrial Training",
      description: [
        "KI Training & Assessing (KITA) provides essential high-risk work licenses and BHP-approved Verification of Competency (VOC) assessments across two Perth facilities.",
        "Despite their industry reputation, their existing website was stuck in 2015. It suffered from slow load times, poor mobile responsiveness, and failed to communicate the trust signals expected by safety-critical employers."
      ]
    },
    solution: {
      headline: "Structuring Information Around Intent & Trust",
      description: "We audited visitor drop-off patterns and completely restructured the information architecture around how industrial clients actually search for and book courses.",
      features: [
        {
          title: "Intent-Based Course Navigation",
          description: "Organized courses into six clear pathways with upfront pricing, duration, and site locations surfaced before the click.",
          image: "/casestudy-images/kita-nav.png" // Media: Image
        },
        {
          title: "Multi-Facility Schedule Filtering",
          description: "Built location-based filtering so students and enterprise managers can easily view separate training schedules for Belmont and Naval Base.",
          image: "/casestudy-images/kita-schedule-filtering.png" // Media: Image
        },
        {
          title: "Compliance & Enterprise Proof Anchors",
          description: "Prominently featured student statistics, BHP provider status, RTO compliance documentation, and enterprise client proof bars.",
          image: "/casestudy-images/kita-compliance.png" // Media: Image
        }
      ]
    },
    reflection: {
      takeaways: [
        "Agile Resource Adaptation: Expanded our development team mid-sprint to meet the hard 4-week delivery window.",
        "SDLC & Client Discipline: Successfully navigated complex RTO compliance requirements while establishing structured client feedback loops.",
        "Performance Micro-Fixes: Learned the visual impact of early optimizations, such as re-encoding video assets to eliminate startup delay."
      ],
      quote: "Every project we've run since has been noticeably more structured because of what this sprint forced us to learn in real time."
    },
    nextProjectSlug: "brhex-virtual-tour"
  }
];