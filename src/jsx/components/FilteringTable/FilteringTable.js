import React, { useMemo } from 'react';
import { useTable, useGlobalFilter, useFilters, usePagination } from 'react-table';
import { GlobalFilter } from './GlobalFilter';
import './filtering.css';
import { Link } from 'react-router-dom';


export const FilteringTable = ({ cols, data: array, name, sideElement, link }) => {
	const columns = useMemo(() => cols, [])
	const data = useMemo(() => array, [])

	console.log(data, "data from table")


	const tableInstance = useTable({
		columns,
		data,
		initialState: { pageIndex: 0 }
	}, useFilters, useGlobalFilter, usePagination)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		state,
		page,
		gotoPage,
		pageCount,
		pageOptions,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		setGlobalFilter,
	} = tableInstance


	const { globalFilter, pageIndex } = state


	return (
		<>
			<div className="card">
				<div className="card-header">
					<h4 className="card-title">{name}</h4>
					{sideElement}
				</div>
				<div className="card-body">
					<div className="table-responsive">
						<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
						<table {...getTableProps()} className="table dataTable display">
							<thead>
								{headerGroups.map(headerGroup => (
									<tr {...headerGroup.getHeaderGroupProps()}>
										{headerGroup.headers.map(column => (
											<th {...column.getHeaderProps()}>
												{column.render('Header')}
												{column.canFilter ? column.render('Filter') : null}
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody {...getTableBodyProps()} className="" >
								{page.map((row) => {
									prepareRow(row)
									return (
										<tr {...row.getRowProps()}>
											{row.cells.map((cell) => {
												return (
													<td {...cell.getCellProps()}>
														{/* {console.log(cell, "Cell")} */}
														<Link to={`${link}/${cell.row.original.id}`} state={{ restaurant: cell.row.original.item }}>
															{cell.render('Cell')}
														</Link>
													</td>
												)
											})}
										</tr>
									)
								})}
							</tbody>
						</table>
						<div className="d-flex justify-content-between">
							<span>
								Page{' '}
								<strong>
									{pageIndex + 1} of {pageOptions.length}
								</strong>{''}
							</span>
							<span className="table-index">
								Go to page : {' '}
								<input type="number"
									className="ml-2"
									defaultValue={pageIndex + 1}
									onChange={e => {
										const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
										gotoPage(pageNumber)
									}}
								/>
							</span>
						</div>
						<div className="text-center mb-3">
							<div className="filter-pagination  mt-3">
								<button className=" previous-button" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>

								<button className="previous-button" onClick={() => previousPage()} disabled={!canPreviousPage}>
									Previous
								</button>
								<button className="next-button" onClick={() => nextPage()} disabled={!canNextPage}>
									Next
								</button>
								<button className=" next-button" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	)

}