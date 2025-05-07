
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GraphsSection = () => {
  return (
    <section className="bg-mint-50 py-16">
      <div className="section-container">
        <h2 className="section-title">Simulation Results</h2>
        <p className="section-subtitle">
          Key outputs from our system dynamics model showing e-commerce behavior over time.
        </p>
        
        <Tabs defaultValue="trust" className="mt-10">
          <TabsList className="grid w-full max-w-md mx-auto sm:grid-cols-2 md:grid-cols-3">
            <TabsTrigger value="trust" className="font-mono">Trust Dynamics</TabsTrigger>
            <TabsTrigger value="sales" className="font-mono">Sales Patterns</TabsTrigger>
            <TabsTrigger value="reviews" className="font-mono">Review Quality</TabsTrigger>
          </TabsList>
          
          <TabsContent value="trust" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <div className="bg-white rounded-md border border-mint-100 p-4 h-[400px] flex items-center justify-center">
                      <img 
                        src="https://i.imgur.com/SvYcMpd.png" 
                        alt="Trust Over Time Graph" 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold mb-4 font-mono">Platform Trust Dynamics</h3>
                    <p className="mb-4">
                      This graph illustrates how consumer trust evolves over time under different policy scenarios.
                    </p>
                    <h4 className="font-bold text-mint-400 mb-2">Key Observations</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-mint-400 mr-2">•</span>
                        <span>Initial growth from positive experiences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mint-400 mr-2">•</span>
                        <span>Decline as review manipulation increases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mint-400 mr-2">•</span>
                        <span>Recovery with structure-based interventions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sales" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <div className="bg-white rounded-md border border-mint-100 p-4 h-[400px] flex items-center justify-center">
                      <img 
                        src="https://i.imgur.com/UOwslaO.png" 
                        alt="Sales Over Time Graph" 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold mb-4 font-mono">Sales Performance Patterns</h3>
                    <p className="mb-4">
                      This graph shows sales performance across different time horizons and intervention strategies.
                    </p>
                    <h4 className="font-bold text-mint-400 mb-2">Key Observations</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-mint-400 mr-2">•</span>
                        <span>Short-term boost from promotional events</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mint-400 mr-2">•</span>
                        <span>Mid-term oscillations as trust factors balance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mint-400 mr-2">•</span>
                        <span>Long-term stability with trust-based approaches</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <div className="bg-white rounded-md border border-mint-100 p-4 h-[400px] flex items-center justify-center">
                      <img 
                        src="https://i.imgur.com/dkDFQ82.png" 
                        alt="Review Quality Graph" 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold mb-4 font-mono">Review Quality Dynamics</h3>
                    <p className="mb-4">
                      This graph tracks the ratio of authentic to manipulated reviews over time under different policy conditions.
                    </p>
                    <h4 className="font-bold text-mint-400 mb-2">Key Observations</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-mint-400 mr-2">•</span>
                        <span>Steady decline without intervention</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mint-400 mr-2">•</span>
                        <span>Temporary improvement with detection systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mint-400 mr-2">•</span>
                        <span>Sustained recovery with incentive restructuring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default GraphsSection;
