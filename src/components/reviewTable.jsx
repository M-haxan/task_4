// import React, { useEffect, useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import StarIcon from "@mui/icons-material/Star";

// const ProductTable = () => {
//   const [rows, setRows] = useState([]);

//   useEffect(() => {
//     fetch("/reviews.json")
//       .then((res) => res.json())
//       .then((data) => setRows(data));
//   }, []);

//   const columns = [
//     {
//       field: "productName",
//       headerName: "PRODUCT",
//       flex: 1.5,
//       renderCell: (params) => (
//         <div className="flex items-center gap-2">
//           <img
//             src={params.row.productImage}
//             alt={params.value}
//             className="w-10 h-10 object-cover rounded"
//           />
//           <span className="text-blue-600 hover:underline cursor-pointer">
//             {params.value}
//           </span>
//         </div>
//       ),
//     },
//     {
//       field: "customerName",
//       headerName: "CUSTOMER",
//       flex: 1,
//       renderCell: (params) => (
//         <div className="flex items-center gap-2">
//           <img
//             src={params.row.customerAvatar}
//             alt={params.value}
//             className="w-8 h-8 rounded-full"
//           />
//           <span className="font-medium">{params.value}</span>
//         </div>
//       ),
//     },
//     {
//       field: "rating",
//       headerName: "RATING",
//       flex: 0.7,
//       renderCell: (params) => (
//         <div className="flex text-orange-500">
//           {Array.from({ length: params.value }).map((_, i) => (
//             <StarIcon key={i} fontSize="small" />
//           ))}
//         </div>
//       ),
//     },
//     {
//       field: "review",
//       headerName: "REVIEW",
//       flex: 2,
//       renderCell: (params) => (
//         <p className="truncate w-full">{params.value}</p>
//       ),
//     },
//   ];

//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </div>
//   );
// };

// export default ProductTable;
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const ReusableTable = ({ url, columns, title = "Table" }) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!url) {
      setError("No URL provided.");
      setLoading(false);
      return;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRows(data);
        setError("");
      })
      .catch(() => setError("Failed to load data"))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="h-[400px] w-full overflow-auto">
      <h2 className="text-lg font-bold mb-3">{title}</h2>
      <div className="min-w-[800px]">
        <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      </div>
      
    </div>
  );
};

export default ReusableTable;
