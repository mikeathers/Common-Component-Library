import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as S from './DataTable.styles';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';
import TableSearch from './TableSearch/TableSearch';

/**
 *  Common DataTable Component
 *    - state
 * 			- tableData (array[]) - Data passed in via props to be displayed on the table
 *    - props
 *      - tableData (array[]) - Data passed in to be displayed on the table
 *      - columnHeaders (array[{title: string, sortColumn: bool}])
 * 			- clickableRows (bool) - Determines if rows are clickable
 */

class DataTable extends Component {
	state = {
		tableData: this.props.tableData,
		filteredItems: [],
		searchInProgress: false,
	};
	componentDidMount() {
		this.orderTableData();
	}

	handleSearchInProgress = (searchInProgress) =>
		this.setState({ searchInProgress });
	handleFilteredItems = (filteredItems) => this.setState({ filteredItems });
	handleSortedItems = (sortedItems) =>
		this.setState({ tableData: sortedItems });

	orderTableData = () => {
		const { tableData, columnHeaders } = this.props;
		const orderedItems = tableData.map((item) => {
			let obj = {};
			columnHeaders.forEach((header) => {
				const headerTitle = header.title.toLowerCase();
				const entries = Object.entries(item);
				const entry = entries.find((e) => e[0].toLowerCase() === headerTitle);
				const keyValPair = Object.fromEntries([entry]);
				obj = { ...obj, ...keyValPair };
			});
			return obj;
		});

		this.setState({ tableData: orderedItems });
	};

	render() {
		const { columnHeaders, clickableRows } = this.props;
		const { tableData, filteredItems, searchInProgress } = this.state;
		const parsedData = searchInProgress ? filteredItems : tableData;
		return (
			<S.DataTable data-test="common-data-table">
				<TableSearch
					tableData={tableData}
					searchInProgress={this.handleSearchInProgress}
					returnFilteredItems={this.handleFilteredItems}
				/>
				<TableHeader
					tableData={tableData}
					columnHeaders={columnHeaders}
					returnSortedItems={this.handleSortedItems}
				/>
				<TableBody
					tableData={parsedData}
					columnHeaders={columnHeaders}
					clickableRows={clickableRows}
				/>
			</S.DataTable>
		);
	}
}

DataTable.defaultProps = {
	clickableRows: false,
};

DataTable.propTypes = {
	tableData: PropTypes.array.isRequired,
	clickableRows: PropTypes.bool,
	columnHeaders: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			sortable: PropTypes.bool,
		}).isRequired
	).isRequired,
};

export { DataTable };

/**
 ***** orderTableData objective *******
 *
 * Creates a new list of objects with each key/value pair in the object in the same order as columnHeaders
 *
 * columnHeaders [
 * 	{title: vehicle, sortable: true},
 * 	{title: color, sortable: true},
 * 	{title: price, sortable: true},
 * ]
 *
 * tableData [
 * 	{color: red, price: 100, vehicle: car},
 * 	{color: blue, vehicle: bike, price: 200},
 * 	{price: 4000, vehicle: place, color: grey},
 * ]
 *
 * Expected Result
 *
 * tableData [
 *  {vehicle: car, color: red, price: 100},
 * 	{vehicle: bike, color: blue, price: 200},
 * 	{vehicle: place, color: grey, price: 4000},
 * ]
 */
