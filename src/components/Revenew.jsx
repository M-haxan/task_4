import { productColumns } from "./productColumn";
import ProductTable from "./reviewTable";
import ReuseableTable from "./reviewTable";
import { Table2Columns } from "./Table2Columns";

export default function RevenueTable() {
  const countryColumns = [
    { field: "id", headerName: "#", minWidth: 50 },
    { field: "country", headerName: "Country", minWidth: 150 },
    {
      field: "users",
      headerName: "Users",
      minWidth: 50,
      renderCell: (params) => `${params.row.users} (${params.row.userPercent})`,
    },
    {
      field: "transactions",
      headerName: "Transactions",
      minWidth: 120,
      renderCell: (params) =>
        `${params.row.transactions} (${params.row.transPercent})`,
    },
    {
      field: "revenue",
      headerName: "Revenue",
      minWidth: 150,

      renderCell: (params) =>
        `$${params.row.revenue} (${params.row.revPercent})`,
    },
    {
      field: "conversionRate",
      headerName: "Conv. Rate",
      minWidth: 100,
    },
  ];

  return (
    <>
      <div className="bg-[#F5F7FA] w-full lg:pl-60">
        <div className="flex flex-col m-4 p-4">
          <h1 className="font-bold text-2xl ">Latest Review</h1>
          <p className="text-black ">
            Payment Recieved across all the Channels
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 m-4">

    {/* Table Container: flex-1 ensures equal width on lg */}
    <div className="lg:w-150">
      <ReuseableTable
        url="/countryState.json"
        columns={Table2Columns}
        className="w-full max-w-full"
      />
    </div>

    {/* Map Container: flex-1 ensures equal width on lg */}
    <div className="flex-1 overflow-x-auto rounded-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52947377.93644701!2d-161.95368458749272!3d35.90655046886533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1752437720318!5m2!1sen!2s"
        className="w-full h-full min-h-[300px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
        </div>
      </div>
    </>
  );
}
