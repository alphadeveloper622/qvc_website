import { NameCell, DetailCell } from '@/components/DataTable/DataTableCell';

export const getColumns = () => [
  {
    Header: 'Name',
    accessor: 'name',
    // Filter: SelectColumnFilter,
    filter: 'includes',
    Cell: NameCell,
  },
  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'State',
    accessor: 'state',
  },
  {
    Header: 'Zip',
    accessor: 'zip',
  },
  {
    Header: 'Detail',
    accessor: 'detail',
    Cell: DetailCell,
  },
];
