
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DownloadIcon, ExternalLinkIcon, GithubIcon, LinkedinIcon } from "lucide-react";

const SubmissionContact = () => {
  return (
    <section className="bg-background py-16">
      <div className="section-container">
        <h2 className="section-title">Project Submission</h2>
        <p className="section-subtitle">
          Access our complete hackathon submission materials and connect with the team.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          <Card>
            <CardContent className="pt-6 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4 font-mono">Materials</h3>
              <div className="flex flex-col gap-4 flex-grow">
                <Button variant="outline" className="justify-start">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download PDF Report
                </Button>
                <Button variant="outline" className="justify-start">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download Vensim Model
                </Button>
                <Button variant="outline" className="justify-start">
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  View Web Demo
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6 font-mono">Team Members</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-4 bg-mint-50 rounded-lg">
                  <div className="w-16 h-16 bg-mint-200 rounded-full mb-3 flex items-center justify-center text-white font-bold text-lg">
                    AK
                  </div>
                  <h4 className="font-bold">Alex Kim</h4>
                  <p className="text-sm text-muted-foreground mb-3">System Modeler</p>
                  <div className="flex gap-2">
                    <a href="#" className="text-mint-500 hover:text-mint-400">
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-mint-500 hover:text-mint-400">
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-mint-50 rounded-lg">
                  <div className="w-16 h-16 bg-mint-200 rounded-full mb-3 flex items-center justify-center text-white font-bold text-lg">
                    SL
                  </div>
                  <h4 className="font-bold">Sarah Lee</h4>
                  <p className="text-sm text-muted-foreground mb-3">Data Analyst</p>
                  <div className="flex gap-2">
                    <a href="#" className="text-mint-500 hover:text-mint-400">
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-mint-500 hover:text-mint-400">
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-mint-50 rounded-lg">
                  <div className="w-16 h-16 bg-mint-200 rounded-full mb-3 flex items-center justify-center text-white font-bold text-lg">
                    MP
                  </div>
                  <h4 className="font-bold">Michael Patel</h4>
                  <p className="text-sm text-muted-foreground mb-3">UX Researcher</p>
                  <div className="flex gap-2">
                    <a href="#" className="text-mint-500 hover:text-mint-400">
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-mint-500 hover:text-mint-400">
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SubmissionContact;
