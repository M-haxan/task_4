import SearchIcon from "@mui/icons-material/Search"; // Example using react-icons
import DataTable from "./reviewTable";
import ReusableTable from "./reviewTable";
export default function Reviews() {
 const reviewColumns = [
  { field: 'product', headerName: 'Product', minWidth: 120 },
  { field: 'customer', headerName: 'Customer', minWidth: 120 },
  { field: 'rating', headerName: 'Rating', width: 100 },
  { field: 'review', headerName: 'Review', minWidth: 200 },
  { field: 'status', headerName: 'Status', width: 100 },
  { field: 'time', headerName: 'Time', width: 130 }
];

  return (
    <>
    <div className=" w-200 lg:w-200  ">
      <div className="lg:flex">
        <div className="flex flex-col m-4  ">
        <h1 className="font-bold text-2xl ">Latest Review</h1>
        <p className="text-[#9599A1] ">
          Payment Recieved across all the Channels{" "}
        </p>
      </div>
        <div className="lg:flex ">
          <div className="relative flex justify-center w-70 m-4">
            {/* Search Icon */}
            <SearchIcon className="absolute left-6 top-8 transform -translate-y-1/2 text-gray-400" />
            {/* Input Field */}
            <input
              type="text"
               className="border border-[#2A7BE4] w-full sm:w-72 h-10 rounded pl-10 mt-2" // pl-10 to give space for icon
              placeholder="Search..."
            />
          </div>
          <div className="flex gap-4 mt-4 ml-2 lg:mt-6">
            <button className="w-30 h-9 border rounded">All Products</button>
            <button className="w-10 lg:h-10 border rounded">...</button>
          </div>
        </div>
      </div>
      
        <ReusableTable
          url="/reviews.json"
          columns={reviewColumns}
          title="Customer Reviews"
        />
    </div>
    </>
  );
}
