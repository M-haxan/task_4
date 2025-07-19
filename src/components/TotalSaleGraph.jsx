import DateRangeDropdown from "./DateTimepicker";
import SaleGraph from "./LineGraphOverview";
import OrdersCard from "./section2Charts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { Typography } from "@mui/material";

export default function TotalSaleGraph() {
  const barData = [
    { name: "Day 1", completed: 300, pending: 200 },
    { name: "Day 2", completed: 280, pending: 220 },
    { name: "Day 3", completed: 350, pending: 150 },
    { name: "Day 4", completed: 320, pending: 180 },
    { name: "Day 5", completed: 300, pending: 200 },
  ];

  const lineData = [
    { name: "01 May", customers: 50 },
    { name: "02 May", customers: 40 },
    { name: "03 May", customers: 60 },
    { name: "04 May", customers: 30 },
    { name: "05 May", customers: 90 },
    { name: "06 May", customers: 70 },
    { name: "07 May", customers: 100 },
  ];

  const pieData = [
    { name: "Percentage", value: 72 },
    { name: "Card", value: 18 },
    { name: "Product", value: 10 },
  ];

  const radialData = [
    { name: "Paying", value: 30, fill: "#8884d8" },
    { name: "Non-Paying", value: 70, fill: "#ccc" },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <>
      <div className="px-4 py-2 flex flex-col gap-2 ">
        <div className="lg:flex lg:gap-4 lg:justify-between">
          <div>
            <h1 className="text-lg font-bold">Total Sells</h1>
        <p>Payment Recieved across All Channels</p>
          </div>
          
        <DateRangeDropdown />
        </div>
        
        <SaleGraph />

        <div className="flex flex-wrap gap-4 w-80 lg:w-auto md:w-190">
          {/* Card 1 */}
          <div className="w-full lg:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.5rem)]">
            <OrdersCard
              title="Total orders"
              subtitle="16,247"
              percentage="-6.8%"
              percentageColor="orange"
              chart={
                <BarChart width={120} height={100} data={barData} barCategoryGap="10%">
                  <Bar dataKey="completed" stackId="a" fill="#3874FF" barSize={4} />
                  <Bar dataKey="pending" stackId="a" fill="#E5EDFF" barSize={4} />
                </BarChart>
              }
              content={
                <div className="flex justify-between">
                  <div>
                    <Typography variant="body2">Completed</Typography>
                    <Typography variant="body2">Pending</Typography>
                  </div>
                  <div>
                    <Typography variant="body2" color="text.secondary">
                      48%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      52%
                    </Typography>
                  </div>
                </div>
              }
            />
          </div>

          {/* Card 2 */}
          <div className="w-full lg:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.5rem)]">
            <OrdersCard
              title="New customers"
              subtitle="356"
              percentage="+26.5%"
              percentageColor="green"
              content={
                <>
                  <div className="h-0.5 bg-gray-200"></div>
                  <div className="flex justify-between">
                    <Typography variant="body2">01 May</Typography>
                    <Typography variant="body2">07 May</Typography>
                  </div>
                </>
              }
              chart={
                <LineChart width={200} height={100} data={lineData}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Line type="monotone" dataKey="customers" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              }
            />
          </div>

          {/* Card 3 */}
          <div className="w-full lg:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.5rem)]">
            <OrdersCard
              title="Top coupons"
              subtitle="72%"
              percentage=""
              percentageColor="blue"
              content={
                <div className="flex justify-between">
                  <div>
                    <Typography variant="body2">Percentage</Typography>
                    <Typography variant="body2">Card</Typography>
                    <Typography variant="body2">Product</Typography>
                  </div>
                  <div>
                    <Typography variant="body2">72%</Typography>
                    <Typography variant="body2">18%</Typography>
                    <Typography variant="body2">10%</Typography>
                  </div>
                </div>
              }
              chart={
                <PieChart width={200} height={140}>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              }
            />
          </div>

          {/* Card 4 */}
          <div className="w-full lg:w-[calc(50%-0.5rem)] min-md:w-[calc(50%-0.5rem)]">
            <OrdersCard
              title="Paying vs Non-paying"
              subtitle="30%"
              percentage=""
              percentageColor="blue"
              content={
                <div className="flex justify-between">
                  <div>
                    <Typography variant="body2">Paying</Typography>
                    <Typography variant="body2">Non-paying</Typography>
                  </div>
                  <div>
                    <Typography variant="body2">70%</Typography>
                    <Typography variant="body2">30%</Typography>
                  </div>
                </div>
              }
              chart={
                <RadialBarChart
                  width={150}
                  height={150}
                  innerRadius="70%"
                  outerRadius="100%"
                  data={radialData}
                  startAngle={180}
                  endAngle={0}
                >
                  <RadialBar minAngle={15} background clockWise dataKey="value" />
                </RadialBarChart>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
