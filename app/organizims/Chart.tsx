"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Sent",
    color: "#2563eb",
  },
  mobile: {
    label: "Recieve",
    color: "#41E755",
  },
} satisfies ChartConfig;

const Chart = () => {
  return (
    <div className="w-full bg-white my-5 rounded-lg">
      {" "}
      {/* Ensure the container takes full width */}
      <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        <BarChart
          accessibilityLayer
          data={chartData}
          width={0} // Set width to 0 to let the container handle sizing
          height={300} // Set a fixed height
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }} // Adjust margins
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)} // Shorten month names
          />
          <YAxis
            tickLine={false} // Hide tick lines
            axisLine={false} // Hide axis line
            tickMargin={10} // Add margin for ticks
            tickCount={6} // Number of ticks
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={6} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default Chart;
