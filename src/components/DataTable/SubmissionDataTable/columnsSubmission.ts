import { NameCell } from '@/components/DataTable/SubmissionDataTable/DataTableCell';

export const getColumns = () => [
  {
    Header: 'Date',
    accessor: 'date',
    // Filter: SelectColumnFilter,
    // filter: 'includes',
  },
  {
    Header: 'Description',
    accessor: 'description',
    Cell: NameCell,
  },
  {
    Header: 'Service',
    accessor: 'service',
  },
  {
    Header: 'Grade',
    accessor: 'grade',
  },
  {
    Header: 'LabelID',
    accessor: 'labelid',
  },
  {
    Header: 'Result',
    accessor: 'result',
  },
];
