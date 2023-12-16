import { ColumnFilter } from "../../../../components";

export const tableColumns = [
	{
		Header: 'Restaurant Name',
		Footer: 'Restaurant Name',
		accessor: 'restaurant_name',
		Filter: ColumnFilter,
	},
	{
		Header: 'Location',
		Footer: 'Location',
		accessor: 'restaurant_loc',
		Filter: ColumnFilter,
	},
	{
		Header: 'Manager',
		Footer: 'Manager',
		accessor: 'manager',
		Filter: ColumnFilter,
	},
	{
		Header: 'Manager Phone',
		Footer: 'Manager Phone',
		accessor: 'phone',
		Filter: ColumnFilter,
	},
	{
		Header: 'Approved',
		Footer: 'Approved',
		accessor: 'approved',
		Filter: ColumnFilter,
	}
]