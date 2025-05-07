import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DownloadIcon } from "lucide-react";

const CausalLoopDiagram = () => {
	return (
		<section className="bg-mint-50 py-16">
			<div className="section-container">
				<h2 className="section-title">Causal Loop Diagram</h2>
				<p className="section-subtitle">
					Our system analysis reveals complex feedback interactions driving
					e-commerce behavior.
				</p>

				<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2">
						<Card className="overflow-hidden h-full flex items-center justify-center p-6">
							<div className="w-full h-full flex items-center justify-center bg-white rounded-md border border-mint-100">
								<iframe
									src="/cld.pdf"
									className="w-full h-[400px] rounded-md"
									title="Causal Loop Diagram PDF"
								/>
							</div>
						</Card>
					</div>

					<div className="lg:col-span-1">
						<Card className="h-full">
							<div className="p-6 flex flex-col h-full">
								<h3 className="text-xl font-bold mb-4 font-mono">
									Key Feedback Loops
								</h3>

								<div className="space-y-4 flex-grow">
									<div>
										<h4 className="font-bold text-mint-400">
											R1: Trust Reinforcement
										</h4>
										<p className="text-sm mt-1">
											Positive reviews build trust, encouraging more purchases
											and genuine reviews.
										</p>
									</div>

									<div>
										<h4 className="font-bold text-mint-400">
											B1: Price Sensitivity
										</h4>
										<p className="text-sm mt-1">
											Higher prices reduce demand, balancing profit-seeking with
											market reach.
										</p>
									</div>

									<div>
										<h4 className="font-bold text-mint-400">
											R2: Review Manipulation
										</h4>
										<p className="text-sm mt-1">
											Fake reviews can temporarily boost sales but erode
											long-term trust.
										</p>
									</div>
								</div>

								<a href="/vensim model.mdl" download>
									<Button className="w-full mt-4 font-mono" variant="outline">
										<DownloadIcon className="mr-2 h-4 w-4" />
										Download Vensim Model
									</Button>
								</a>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CausalLoopDiagram;
