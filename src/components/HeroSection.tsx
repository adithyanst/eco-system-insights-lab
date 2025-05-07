
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative bg-gradient-to-b from-mint-50 to-background">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            Transforming E-Commerce with System Thinking
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-in">
            A Hackathon System Design Project
          </p>
          <Button 
            size="lg" 
            className="group font-mono animate-fade-in"
            onClick={() => {
              document.getElementById('problem-framing')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore the System
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-mint-200/50"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
