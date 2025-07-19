export const Table2Columns = [
  {
    field: "country",
    headerName: "COUNTRY",
    flex: 2.5,
    renderCell: (params) => (
      <div className="flex items-center gap-2">
        <img
          src={params.row.flag}
          alt={params.value}
          className="w-6 h-4 object-cover rounded-sm"
        />
        <span className="font-medium">{params.value}</span>
      </div>
    ),
  },
  {
    field: "users",
    headerName: "USERS",
    flex: 1.5,
    renderCell: (params) => (
      <span>{params.value.toLocaleString()}</span> // Adds commas to large numbers
    ),
  },
  {
    field: "userPercent",
    headerName: "USER %",
    flex: 1,
    renderCell: (params) => <span>{params.value}</span>,
  },
  {
    field: "transactions",
    headerName: "TRANSACTIONS",
    flex: 1.5,
    renderCell: (params) => <span>{params.value.toLocaleString()}</span>,
  },
  {
    field: "transPercent",
    headerName: "TRANS %",
    flex: 1,
    renderCell: (params) => <span>{params.value}</span>,
  },
  {
    field: "revenue",
    headerName: "REVENUE",
    flex: 1.5,
    renderCell: (params) => <span>{params.value}</span>,
  },
  {
    field: "revPercent",
    headerName: "REV %",
    flex: 1,
    renderCell: (params) => <span>{params.value}</span>,
  },
];
