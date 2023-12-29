import { ColumnFilter } from "../../../../components"

export const tableColumns = [
    {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name',
        Filter: ColumnFilter,
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
        Filter: ColumnFilter,
    },
    {
        Header: 'Birth Date',
        Footer: 'Birth Date',
        accessor: 'birth_date',
        Filter: ColumnFilter,
    },
    {
        Header: 'Joined',
        Footer: 'Joined',
        accessor: 'joined',
        Filter: ColumnFilter,
    },
    {
        Header: 'Approved',
        Footer: 'Approved',
        accessor: 'approved',
        Filter: ColumnFilter,
    }
]