
import { Card, CardContent } from "@/components/ui/card";
import { LightbulbIcon } from "lucide-react";

const InsightsInterventions = () => {
  return (
    <section className="bg-background py-16">
      <div className="section-container">
        <h2 className="section-title">Insights & Interventions</h2>
        <p className="section-subtitle">
          Strategic solutions based on leverage points within the e-commerce system structure.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <Card className="border-mint-200">
            <CardContent className="pt-6">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-mint-100 flex items-center justify-center mr-3">
                  <LightbulbIcon className="h-5 w-5 text-mint-400" />
                </div>
                <h3 className="text-xl font-bold font-mono">Transparent Review Verification</h3>
              </div>
              <p className="mb-4">
                Implement a blockchain-based verification system for product reviews to ensure authenticity and build trust.
              </p>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-mint-100 text-mint-500 text-sm font-medium">
                Structure Level Intervention
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-mint-200">
            <CardContent className="pt-6">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-mint-100 flex items-center justify-center mr-3">
                  <LightbulbIcon className="h-5 w-5 text-mint-400" />
                </div>
                <h3 className="text-xl font-bold font-mono">Delivery Timeline Integration</h3>
              </div>
              <p className="mb-4">
                Create an open API for real-time logistics tracking that connects retailers, shippers, and consumers to reduce information asymmetry.
              </p>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-mint-100 text-mint-500 text-sm font-medium">
                Pattern Level Intervention
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-mint-200">
            <CardContent className="pt-6">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-mint-100 flex items-center justify-center mr-3">
                  <LightbulbIcon className="h-5 w-5 text-mint-400" />
                </div>
                <h3 className="text-xl font-bold font-mono">Trust-Based Incentives</h3>
              </div>
              <p className="mb-4">
                Redesign seller reward structures to prioritize long-term customer satisfaction metrics over short-term sales volume.
              </p>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-mint-100 text-mint-500 text-sm font-medium">
                Structure Level Intervention
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-mint-200">
            <CardContent className="pt-6">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-mint-100 flex items-center justify-center mr-3">
                  <LightbulbIcon className="h-5 w-5 text-mint-400" />
                </div>
                <h3 className="text-xl font-bold font-mono">Streamlined Mobile Checkout</h3>
              </div>
              <p className="mb-4">
                Reduce friction in the mobile purchase journey with contextual saving of cart items and one-tap checkout options.
              </p>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-mint-100 text-mint-500 text-sm font-medium">
                Event Level Intervention
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InsightsInterventions;
