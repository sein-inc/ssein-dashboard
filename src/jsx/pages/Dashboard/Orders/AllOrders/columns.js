import { ColumnFilter } from "../../../../components";

export const tableColumns = [
	{
		Header: 'Type',
		Footer: 'Type',
		accessor: 'type',
		Filter: ColumnFilter,
	},
	{
		Header: 'User',
		Footer: 'User',
		accessor: 'user_name',
		Filter: ColumnFilter,
	},
	{
		Header: 'User Phone',
		Footer: 'User Phone',
		accessor: 'user_phone',
		Filter: ColumnFilter,
	},
	{
		Header: 'Time',
		Footer: 'Time',
		accessor: 'time',
		Filter: ColumnFilter,
	},
	{
		Header: 'Amount',
		Footer: 'Amount',
		accessor: 'amount',
		Filter: ColumnFilter,
	}
]