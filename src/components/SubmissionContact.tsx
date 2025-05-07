import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	DownloadIcon,
	ExternalLinkIcon,
	GithubIcon,
	LinkedinIcon,
} from "lucide-react";

const SubmissionContact = () => {
	return (
		<section className="bg-background py-16">
			<div className="section-container">
				<h2 className="section-title">Project Submission</h2>
				<p className="section-subtitle">
					Access our complete hackathon submission materials and connect with
					the team.
				</p>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
					<Card>
						<CardContent className="pt-6 flex flex-col h-full">
							<h3 className="text-xl font-bold mb-4 font-mono">Materials</h3>
							<div className="flex flex-col gap-4 flex-grow">
								<a href="/report.pdf" download>
									<Button variant="outline" className="justify-start w-full">
										<DownloadIcon className="mr-2 h-4 w-4" />
										Download PDF Report
									</Button>
								</a>

								<a href="/vensim model.mdl" download>
									<Button
										variant="outline"
										className="justify-start w-full mt-2"
									>
										<DownloadIcon className="mr-2 h-4 w-4" />
										Download Vensim Model
									</Button>
								</a>
							</div>
						</CardContent>
					</Card>

					<Card className="lg:col-span-2">
						<CardContent className="pt-6">
							<h3 className="text-xl font-bold mb-6 font-mono">Team Members</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
								<div className="flex flex-col items-center p-4 bg-mint-50 rounded-lg">
									<h4 className="font-bold">Gokul VKS</h4>
									<p className="text-sm text-muted-foreground mb-3">
										CLD, SFD, Report Writing, Website
									</p>
								</div>

								<div className="flex flex-col items-center p-4 bg-mint-50 rounded-lg">
									<h4 className="font-bold">Pampana Sree Adithya</h4>
									<p className="text-sm text-muted-foreground mb-3">
										CLD, Website
									</p>
								</div>

								<div className="flex flex-col items-center p-4 bg-mint-50 rounded-lg">
									<h4 className="font-bold">Praanshu Ranjan</h4>
									<p className="text-sm text-muted-foreground mb-3">Research</p>
								</div>

								<div className="flex flex-col items-center p-4 bg-mint-50 rounded-lg">
									<h4 className="font-bold">Balanagu Sesha Srikar</h4>
									<p className="text-sm text-muted-foreground mb-3">Research</p>
								</div>

								<div className="flex flex-col items-center p-4 bg-mint-50 rounded-lg">
									<h4 className="font-bold">Dadi Dinesh</h4>
									<p className="text-sm text-muted-foreground mb-3">Research</p>
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
