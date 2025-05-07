
import HeroSection from "@/components/HeroSection";
import ProblemFraming from "@/components/ProblemFraming";
import CausalLoopDiagram from "@/components/CausalLoopDiagram";
import SystemDynamics from "@/components/SystemDynamics";
import EPSAnalysis from "@/components/EPSAnalysis";
import InsightsInterventions from "@/components/InsightsInterventions";
import LeveragePoints from "@/components/LeveragePoints";
import SystemArchetypes from "@/components/SystemArchetypes";
import GraphsSection from "@/components/GraphsSection";
import SubmissionContact from "@/components/SubmissionContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemFraming />
      <CausalLoopDiagram />
      <SystemDynamics />
      <EPSAnalysis />
      <InsightsInterventions />
      <LeveragePoints />
      <SystemArchetypes />
      <GraphsSection />
      <SubmissionContact />
    </div>
  );
};

export default Index;
