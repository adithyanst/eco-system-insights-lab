import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SystemArchetypes = () => {
	return (
		<section className="bg-background py-16">
			<div className="section-container">
				<h2 className="section-title">System Archetypes</h2>
				<p className="section-subtitle">
					Common patterns of system behavior identified in our e-commerce
					analysis.
				</p>

				<Tabs defaultValue="fixes" className="mt-10">
					<TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
						<TabsTrigger value="fixes" className="font-mono">
							Fixes That Fail
						</TabsTrigger>
						<TabsTrigger value="burden" className="font-mono">
							Shifting the Burden
						</TabsTrigger>
					</TabsList>

					<TabsContent value="fixes" className="mt-6">
						<Card>
							<CardContent className="pt-6">
								<div className="flex flex-col lg:flex-row gap-6">
									<div className="flex-1">
										<div className="bg-white rounded-md border border-mint-100 p-4 h-[300px] flex items-center justify-center">
											<img
												src="/fixes that fail.png"
												alt="Fixes That Fail Archetype"
												className="max-w-full max-h-full object-contain"
											/>
										</div>
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-bold mb-4 font-mono">
											Fixes That Fail
										</h3>
										<p className="mb-4">
											Short-term solutions that create longer-term problems.
										</p>
										<h4 className="font-bold text-mint-400 mb-2">
											Example in E-Commerce
										</h4>
										<p className="mb-4">
											Platforms implementing aggressive discount promotions to
											boost immediate sales, which temporarily increases revenue
											but creates dependency on discounts and erodes brand value
											over time.
										</p>
										<h4 className="font-bold text-mint-400 mb-2">
											System Insight
										</h4>
										<p>
											The quick fix (discounting) addresses the symptom (low
											sales) but inadvertently reinforces the underlying problem
											(weak value proposition) as customers become conditioned
											to wait for discounts.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="burden" className="mt-6">
						<Card>
							<CardContent className="pt-6">
								<div className="flex flex-col lg:flex-row gap-6">
									<div className="flex-1">
										<div className="bg-white rounded-md border border-mint-100 p-4 h-[300px] flex items-center justify-center">
											<img
												src="/shifting the burden.png"
												alt="Shifting the Burden Archetype"
												className="max-w-full max-h-full object-contain"
											/>
										</div>
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-bold mb-4 font-mono">
											Shifting the Burden
										</h3>
										<p className="mb-4">
											Addressing symptoms rather than underlying problems.
										</p>
										<h4 className="font-bold text-mint-400 mb-2">
											Example in E-Commerce
										</h4>
										<p className="mb-4">
											E-commerce platforms deploying increasingly sophisticated
											algorithms to detect fake reviews, rather than addressing
											the incentive structures that encourage review
											manipulation.
										</p>
										<h4 className="font-bold text-mint-400 mb-2">
											System Insight
										</h4>
										<p>
											The symptomatic solution (detection algorithms) diverts
											attention from the fundamental solution (realigning seller
											incentives), creating dependency on ever-more complex
											detection mechanisms as manipulators evolve tactics.
										</p>
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

export default SystemArchetypes;
