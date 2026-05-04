export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Cost Optimization
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Reduce AI Costs by Optimizing{" "}
          <span className="text-[#58a6ff]">Prompt Token Usage</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste your prompt, get a leaner version that costs less and performs just as well. Built for startups and agencies burning budget on AI APIs.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Saving — $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to explore. Cancel anytime.</p>

        {/* Demo box */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#f85149]"></span>
            <span className="w-3 h-3 rounded-full bg-[#e3b341]"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950]"></span>
            <span className="ml-2 text-xs text-[#8b949e]">prompt-optimizer.ai</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-[#8b949e] mb-2 uppercase tracking-wide">Original Prompt</p>
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 text-sm text-[#c9d1d9] leading-relaxed">
                Please carefully analyze the following customer support ticket and provide a detailed, comprehensive response that addresses all of the customer's concerns in a professional and empathetic manner...
              </div>
              <p className="mt-2 text-xs text-[#f85149] font-semibold">~320 tokens · $0.0096/call</p>
            </div>
            <div>
              <p className="text-xs text-[#3fb950] mb-2 uppercase tracking-wide">Optimized Prompt</p>
              <div className="bg-[#0d1117] border border-[#3fb950] rounded-lg p-3 text-sm text-[#c9d1d9] leading-relaxed">
                Analyze this support ticket. Reply professionally, address all concerns with empathy...
              </div>
              <p className="mt-2 text-xs text-[#3fb950] font-semibold">~58 tokens · $0.0017/call · 82% cheaper</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
          <h3 className="text-xl font-bold text-white mb-1">Pro Plan</h3>
          <p className="text-[#8b949e] text-sm mb-4">For startups &amp; agencies</p>
          <div className="flex items-end justify-center gap-1 mb-6">
            <span className="text-5xl font-bold text-white">$29</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited prompt analyses",
              "Real-time token &amp; cost calculator",
              "AI-powered optimization suggestions",
              "Prompt history dashboard",
              "GPT-4, Claude &amp; Gemini pricing",
              "Priority email support"
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started — $29/mo
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Secured by Lemon Squeezy · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the prompt optimizer work?",
              a: "You paste your prompt into the dashboard. Our AI analyzes it for redundancy, verbosity, and unnecessary tokens, then returns a leaner version that preserves the original intent and output quality."
            },
            {
              q: "Will the optimized prompt produce the same results?",
              a: "In most cases, yes. We benchmark optimized prompts against the originals and only suggest changes that maintain semantic equivalence. You always see both versions side-by-side before applying."
            },
            {
              q: "Which AI providers are supported?",
              a: "We support OpenAI (GPT-3.5, GPT-4, GPT-4o), Anthropic Claude, and Google Gemini pricing models. Cost calculations update in real time as you type."
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        <p>© {new Date().getFullYear()} AI Prompt Cost Optimizer · Built for teams that ship fast</p>
      </footer>
    </main>
  );
}
