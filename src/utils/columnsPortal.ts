import {
  NameCell,
  DetailCell,
} from '@/components/PortalDataTable/DataTableCell';

export const getColumns = () => [
  {
    Header: 'Account',
    accessor: 'account',
    // Filter: SelectColumnFilter,
    filter: 'includes',
    Cell: NameCell,
  },
  {
    Header: 'Submission',
    accessor: 'submission',
  },
  {
    Header: 'Date Received',
    accessor: 'date_received',
  },
  {
    Header: 'No. of Coins',
    accessor: 'no_of_coins',
  },
  {
    Header: 'Detail',
    accessor: 'detail',
    Cell: DetailCell,
  },
];
