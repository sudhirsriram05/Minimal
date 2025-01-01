import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { GradientBackground } from "./ui/gradient-background";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <GradientBackground />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center sm:pt-24 lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          Remove Backgrounds
          <span className="block mt-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            In Seconds with AI
          </span>
        </h1>
        
        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600">
          Professional background removal powered by AI. 
          No signup required, 100% free for basic use.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link to="/try-now" className="flex items-center gap-2">
              Try Now - Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="border-2"
          >
            <Link to="/how-it-works">Learn More</Link>
          </Button>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
              <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-slate-600">No Sign Up Required</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
              <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-slate-600">HD Quality Output</span>
          </div>
        </div>
      </div>
    </section>
  );
};