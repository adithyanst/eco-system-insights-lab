
import { Card, CardContent } from "@/components/ui/card";

const ProblemFraming = () => {
  return (
    <section id="problem-framing" className="bg-background py-16">
      <div className="section-container">
        <h2 className="section-title">Problem Framing</h2>
        <p className="section-subtitle">
          The e-commerce ecosystem faces several interconnected challenges that impact user experience, 
          merchant success, and platform sustainability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <Card className="border-l-4 border-l-mint-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 font-mono">Key Issues</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-mint-400 mr-2">•</span>
                  <span><strong className="text-mint-400">Fake Reviews:</strong> Artificially inflated product ratings distort consumer trust and decision making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mint-400 mr-2">•</span>
                  <span><strong className="text-mint-400">Delivery Delays:</strong> Complex logistics chains with poor visibility lead to customer dissatisfaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mint-400 mr-2">•</span>
                  <span><strong className="text-mint-400">Cart Abandonment:</strong> High rates (70%+) signal friction in the purchase journey</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-mint-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 font-mono">Root Causes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-mint-400 mr-2">•</span>
                  <span><strong className="text-mint-400">Misaligned Incentives:</strong> Platforms and sellers prioritize short-term metrics over sustainable growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mint-400 mr-2">•</span>
                  <span><strong className="text-mint-400">Information Asymmetry:</strong> Consumers lack complete data for optimal decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mint-400 mr-2">•</span>
                  <span><strong className="text-mint-400">Feedback Delays:</strong> Time lags between actions and consequences hide causal relationships</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemFraming;
