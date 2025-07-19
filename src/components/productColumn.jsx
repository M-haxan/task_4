import StarIcon from "@mui/icons-material/Star";

export const productColumns = [
  {
    field: "productName",
    headerName: "PRODUCT",
    flex: 3.5,
    renderCell: (params) => (
      <div className="flex items-center gap-2 ">
        <img
          src={params.row.productImage}
          alt={params.value}
          className="w-10 h-10 object-cover rounded"
        />
        <span className="text-blue-600 hover:underline cursor-pointer">
          {params.value}
        </span>
      </div>
    ),
  },
  {
    field: "customerName",
    headerName: "CUSTOMER",
    flex: 1.5,
    renderCell: (params) => (
      <div className="flex items-center gap-2">
        <img
          src={params.row.customerAvatar}
          alt={params.value}
          className="w-8 h-8 rounded-full"
        />
        <span className="font-medium">{params.value}</span>
      </div>
    ),
  },
  {
    field: "rating",
    headerName: "RATING",
    flex: 1.5,
    renderCell: (params) => (
      <div className="flex text-orange-500">
        {Array.from({ length: params.value }).map((_, i) => (
          <StarIcon key={i} fontSize="small" />
        ))}
      </div>
    ),
  },
  {
    field: "review",
    headerName: "REVIEW",
    flex: 3,
    renderCell: (params) => (
      <p className="truncate w-full">{params.value}</p>
    ),
  },
];
