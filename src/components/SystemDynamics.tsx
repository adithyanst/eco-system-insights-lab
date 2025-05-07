import { Card, CardContent } from "@/components/ui/card";

const SystemDynamics = () => {
	return (
		<section className="bg-background py-16">
			<div className="section-container">
				<h2 className="section-title">System Dynamics</h2>
				<p className="section-subtitle">
					Exploring how e-commerce system components evolve over time through
					stock & flow modeling.
				</p>

				<div className="mt-10">
					<Card>
						<CardContent className="pt-6">
							<div className="flex flex-col lg:flex-row gap-6">
								<div className="flex-1">
									<div className="bg-white rounded-md border border-mint-100 p-4 h-[400px] flex items-center justify-center">
										<iframe
											src="/sfd.pdf"
											className="w-full h-[400px] rounded-md"
											title="Causal Loop Diagram PDF"
										/>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-bold mb-4 font-mono">
										Stock & Flow Structure
									</h3>
									<p className="mb-4">Our model tracks key stocks including:</p>
									<ul className="space-y-2 mb-4">
										<li className="flex items-start">
											<span className="text-mint-400 mr-2">•</span>
											<span>
												<strong>Customer Trust</strong> – Accumulated through
												positive experiences
											</span>
										</li>
										<li className="flex items-start">
											<span className="text-mint-400 mr-2">•</span>
											<span>
												<strong>Authentic Reviews</strong> – Critical
												information resource
											</span>
										</li>
										<li className="flex items-start">
											<span className="text-mint-400 mr-2">•</span>
											<span>
												<strong>Platform Reputation</strong> – Aggregate
												perception of reliability
											</span>
										</li>
									</ul>
									<p>
										These stocks are influenced by flows representing user
										actions, platform policies, and market forces.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default SystemDynamics;
