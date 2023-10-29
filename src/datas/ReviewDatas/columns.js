import { ColumnFilter } from "../../compoents/ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Title",
    Footer: "Title",
    accessor: "title",
    disableFilters: true,
  },
  {
    Header: "Rating",
    Footer: "Rating",
    accessor: "rating",
  },
  {
    Header: "Name",
    Footer: "Name",
    accessor: "name",
  },
  {
    Header: "Date",
    Footer: "Date",
    accessor: "date",
  },
  {
    Header: " ",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Title",
    Footer: "Title",
    accessor: "title",
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Rating",
        Footer: "Rating",
        accessor: "rating",
      },
      {
        Header: "Name",
        Footer: "Name",
        accessor: "name",
      },
      {
        Header: "Date",
        Footer: "Date",
        accessor: "date",
      },
    ],
  },
];
