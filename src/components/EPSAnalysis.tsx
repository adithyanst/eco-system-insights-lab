
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EPSAnalysis = () => {
  return (
    <section className="bg-mint-50 py-16">
      <div className="section-container">
        <h2 className="section-title">Event-Pattern-Structure Analysis</h2>
        <p className="section-subtitle">
          Diving beneath surface events to identify deeper patterns and structures in e-commerce systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Card>
            <CardHeader className="bg-mint-100/50">
              <CardTitle className="font-mono">Event Level</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <div className="rounded-full w-16 h-16 bg-mint-200 flex items-center justify-center text-white text-2xl font-bold mb-2">
                  E
                </div>
                <h3 className="text-lg font-bold">What's Going Wrong?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-mint-400 mr-2">•</span>
                    <span>Rising customer complaints about misleading product descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint-400 mr-2">•</span>
                    <span>Increasing cart abandonment rates on mobile devices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint-400 mr-2">•</span>
                    <span>Customer service overwhelmed by delivery inquiries</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-mint-100/50">
              <CardTitle className="font-mono">Pattern Level</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <div className="rounded-full w-16 h-16 bg-mint-300 flex items-center justify-center text-white text-2xl font-bold mb-2">
                  P
                </div>
                <h3 className="text-lg font-bold">What's the Trend?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-mint-400 mr-2">•</span>
                    <span>Cyclical spikes in complaints following promotional events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint-400 mr-2">•</span>
                    <span>Declining customer retention rates over successive quarters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint-400 mr-2">•</span>
                    <span>Growing gap between expected and actual delivery times</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-mint-100/50">
              <CardTitle className="font-mono">Structure Level</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <div className="rounded-full w-16 h-16 bg-mint-400 flex items-center justify-center text-white text-2xl font-bold mb-2">
                  S
                </div>
                <h3 className="text-lg font-bold">What's Beneath the Surface?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-mint-400 mr-2">•</span>
                    <span>Misaligned incentives between marketing and customer service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint-400 mr-2">•</span>
                    <span>Feedback delays between customer reviews and product improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint-400 mr-2">•</span>
                    <span>Information asymmetry between sellers and buyers</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EPSAnalysis;
