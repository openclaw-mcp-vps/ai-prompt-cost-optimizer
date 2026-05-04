import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt Cost Optimizer – Reduce AI API Costs by 40%+",
  description: "Analyze your prompts and get shorter alternatives that maintain quality while slashing token costs. Built for startups and agencies using AI APIs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ce0f14ac-d891-4741-8e90-c0f8277a5061"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
