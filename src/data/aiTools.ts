export interface AITool {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  link: string;
  color: string;
  bg: string;
  // Detail page fields — tools the user built
  aiModel: string;
  frontendStack: string[];
  backendStack: string[];
  keyFunctions: string[];
  useCases: string[];
  pricing?: string;
  status: string;
}

export const aiTools: AITool[] = [
  {
    id: "econotes-studio",
    name: "EcoNotes Studio",
    description: "AI Audio Transcription & Note-Taking",
    longDescription:
      "An intelligent AI-powered audio transcription and note-taking platform that converts voice recordings into structured, actionable content. Supports Bengali and English with multiple AI modes including Meeting Minutes, Code extraction, Blog drafts, and Study Guides — transforming how professionals and students capture knowledge.",
    category: "Transcription & Notes",
    link: "https://echonotestudio.com",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    aiModel:
      "Groq (Whisper) for transcription, Google Gemini for AI processing",
    frontendStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    backendStack: ["Laravel", "PHP", "MySQL", "Redis", "REST API"],
    keyFunctions: [
      "Real-time audio recording and file upload transcription",
      "Support for Bengali & English language processing",
      "AI-powered Meeting Minutes generation with action items",
      "Code extraction mode — speak logic, get code snippets",
      "Blog & newsletter content drafting from voice notes",
      "Study Guide mode — generates quiz questions and flashcards",
      "Drag & drop audio file support",
      "Tiered pricing with Starter, Pro, and Enterprise plans",
    ],
    useCases: [
      "Professionals turning meeting recordings into executive summaries",
      "Students converting lectures into structured study materials",
      "Developers dictating logic and extracting code documentation",
      "Content creators drafting blogs and social posts from voice",
    ],
    pricing: "Starter (Free), Pro, Enterprise plans",
    status: "Live",
  },
  {
    id: "run-gen-ai",
    name: "RunGen AI",
    description: "AI-Powered Goal-Based Running Plans",
    longDescription:
      "A premium SaaS platform that generates personalized training plans for runners using AI. It integrates with Strava, Garmin, and COROS to analyze athlete data and create adaptive schedules for goals ranging from 5K to Full Marathon, ensuring optimal performance while preventing overtraining.",
    category: "Fitness & Health",
    link: "https://getmyracepace.moinul4u.com",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    aiModel: "OpenAI GPT-4o for adaptive plan logic & coach insights",
    frontendStack: [
      "Next.js 14",
      "Framer Motion",
      "Tailwind CSS",
      "TypeScript",
      "Lucide React",
    ],
    backendStack: [
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Strava API",
      "Garmin API",
    ],
    keyFunctions: [
      "AI-driven training plan generation based on goal & fitness level",
      "Real-time Strava and Garmin activity synchronization",
      "Adaptive week-by-week plan adjustments based on performance",
      "Interactive elevation profiles and route intelligence",
      "AI Coach insights for fatigue detection and pace guidance",
      "Plan history management with concurrent generation support",
    ],
    useCases: [
      "Beginner runners training for their first 5K or 10K",
      "Intermediate runners aiming for a Half Marathon or Marathon PR",
      "Athletes wanting to sync their training data with AI analysis",
      "Runners needing adaptive schedules that adjust to their lifestyle",
    ],
    pricing: "Starter (Free), Pro (499 BDT/mo)",
    status: "Live",
  },
];
