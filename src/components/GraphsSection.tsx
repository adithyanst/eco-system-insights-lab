import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

// Chart Data
const trustData = {
	labels: ["Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023", "Q1 2024", "Q2 2024"],
	datasets: [
		{
			label: "Consumer Trust Index",
			data: [65, 70, 60, 75, 80, 85],
			borderColor: "rgba(75,192,192,1)",
			tension: 0.3,
			fill: false,
		},
	],
};

const salesData = {
	labels: ["Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023", "Q1 2024", "Q2 2024"],
	datasets: [
		{
			label: "E-commerce Sales (in $B)",
			data: [250, 260, 270, 280, 290, 308.9],
			borderColor: "rgba(153,102,255,1)",
			tension: 0.3,
			fill: false,
		},
	],
};

const reviewData = {
	labels: ["Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023", "Q1 2024", "Q2 2024"],
	datasets: [
		{
			label: "Authentic Review %",
			data: [80, 78, 75, 77, 79, 82],
			borderColor: "rgba(255,159,64,1)",
			tension: 0.3,
			fill: false,
		},
	],
};

const GraphCard = ({
	title,
	description,
	data,
	observations,
}: {
	title: string;
	description: string;
	data: any;
	observations: string[];
}) => (
	<Card>
		<CardContent className="pt-6">
			<div className="flex flex-col md:flex-row gap-6">
				<div className="md:w-2/3">
					<div className="bg-white rounded-md border border-mint-100 p-4 h-[400px] flex items-center justify-center">
						<Line data={data} />
					</div>
				</div>
				<div className="md:w-1/3">
					<h3 className="text-xl font-bold mb-4 font-mono">{title}</h3>
					<p className="mb-4">{description}</p>
					<h4 className="font-bold text-mint-400 mb-2">Key Observations</h4>
					<ul className="space-y-2">
						{observations.map((o, i) => (
							<li className="flex items-start" key={i}>
								<span className="text-mint-400 mr-2">•</span>
								<span>{o}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</CardContent>
	</Card>
);

const GraphsSection = () => (
	<section className="bg-mint-50 py-16">
		<div className="section-container">
			<h2 className="section-title">Simulation Results</h2>
			<p className="section-subtitle">
				Key outputs from our system dynamics model showing e-commerce behavior
				over time.
			</p>

			<Tabs defaultValue="trust" className="mt-10">
				<TabsList className="grid w-full max-w-md mx-auto sm:grid-cols-2 md:grid-cols-3">
					<TabsTrigger value="trust" className="font-mono">
						Trust Dynamics
					</TabsTrigger>
					<TabsTrigger value="sales" className="font-mono">
						Sales Patterns
					</TabsTrigger>
					<TabsTrigger value="reviews" className="font-mono">
						Review Quality
					</TabsTrigger>
				</TabsList>

				<TabsContent value="trust" className="mt-6">
					<GraphCard
						title="Platform Trust Dynamics"
						description="This graph illustrates how consumer trust evolves over time under different policy scenarios."
						data={trustData}
						observations={[
							"Initial growth from positive experiences",
							"Decline as review manipulation increases",
							"Recovery with structure-based interventions",
						]}
					/>
				</TabsContent>

				<TabsContent value="sales" className="mt-6">
					<GraphCard
						title="Sales Performance Patterns"
						description="This graph shows sales performance across different time horizons and intervention strategies."
						data={salesData}
						observations={[
							"Short-term boost from promotional events",
							"Mid-term oscillations as trust factors balance",
							"Long-term stability with trust-based approaches",
						]}
					/>
				</TabsContent>

				<TabsContent value="reviews" className="mt-6">
					<GraphCard
						title="Review Quality Dynamics"
						description="This graph tracks the ratio of authentic to manipulated reviews over time under different policy conditions."
						data={reviewData}
						observations={[
							"Steady decline without intervention",
							"Temporary improvement with detection systems",
							"Sustained recovery with incentive restructuring",
						]}
					/>
				</TabsContent>
			</Tabs>
		</div>
	</section>
);

export default GraphsSection;
