import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
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
	handleSearchInProgress = searchInProgress =>
		this.setState({ searchInProgress });
	handleFilteredItems = filteredItems => this.setState({ filteredItems });
	handleSortedItems = sortedItems => this.setState({ tableData: sortedItems });
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
	tableData: [],
	columnHeaders: [],
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
