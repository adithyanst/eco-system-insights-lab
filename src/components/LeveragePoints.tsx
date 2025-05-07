
import { Card, CardContent } from "@/components/ui/card";
import { TargetIcon } from "lucide-react";

const LeveragePoints = () => {
  return (
    <section className="bg-mint-50 py-16">
      <div className="section-container">
        <h2 className="section-title">Leverage Points</h2>
        <p className="section-subtitle">
          Strategic points within the system where small changes can produce significant improvements.
        </p>
        
        <div className="mt-10 space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 shrink-0">
              <Card className="bg-gradient-to-br from-mint-100 to-mint-50 shadow-md h-full">
                <CardContent className="pt-6 flex flex-col items-center text-center p-8">
                  <TargetIcon className="h-12 w-12 text-mint-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-mono">Information Flows</h3>
                  <p>Redesigning how data is shared between system actors</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:w-2/3">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-bold text-mint-400 mb-2">Intervention Points</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-mint-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Review Verification System</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Implement blockchain verification for authentic reviews, creating a trustworthy information channel for consumers.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-mint-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Real-time Inventory Transparency</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Show actual stock levels and sourcing information to reduce false scarcity and improve purchase decisions.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-mint-100 text-mint-500 text-sm font-medium">
                    Structure Level
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 shrink-0">
              <Card className="bg-gradient-to-br from-mint-100 to-mint-50 shadow-md h-full">
                <CardContent className="pt-6 flex flex-col items-center text-center p-8">
                  <TargetIcon className="h-12 w-12 text-mint-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-mono">Rules & Incentives</h3>
                  <p>Reshaping rewards to align with long-term system health</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:w-2/3">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-bold text-mint-400 mb-2">Intervention Points</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-mint-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Seller Success Metrics</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Shift seller evaluation from volume-based to satisfaction-based metrics, rewarding quality over quantity.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-mint-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Platform Fee Structure</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Implement graduated fee structures that reward sellers for maintaining high authentic satisfaction rates.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-mint-100 text-mint-500 text-sm font-medium">
                    Pattern Level
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeveragePoints;
