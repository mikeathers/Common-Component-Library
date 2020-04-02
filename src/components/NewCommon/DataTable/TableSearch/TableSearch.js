import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/NewCommon';
import * as S from './TableSearch.styles';

/**
 * Common DataTable Search Component
 *  - state
 *    - searchTerm (string) - String used to filter the tableData list
 *  - props
 *    - tableData (array[]) - Data passed in to be filtered
 * 		- returnFilteredItems (function) - returns filtered list of data to parent component
 */

class TableSearch extends Component {
	handleInputChange = e => this.filterResults(e.target.value);
	filterResults = searchTerm => {
		const { tableData, searchInProgress } = this.props;
		let isMatch = '';
		searchTerm ? searchInProgress(true) : searchInProgress(false);
		const filteredList = tableData.filter(row => {
			for (let value of Object.values(row)) {
				isMatch = value
					.toString()
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
				if (isMatch) return isMatch;
			}
			return null;
		});
		this.props.returnFilteredItems(filteredList);
	};
	render() {
		return (
			<S.TableSearch data-test="common-data-table-search">
				<Input
					fullWidth={false}
					data-test="common-data-table-search-input"
					name="commonDataTableSearchInput"
					onChange={this.handleInputChange}
				/>
			</S.TableSearch>
		);
	}
}

TableSearch.propTypes = {
	tableData: PropTypes.array.isRequired,
	returnFilteredItems: PropTypes.func.isRequired,
};

TableSearch.defaultProps = {
	tableData: [],
};

export default TableSearch;
