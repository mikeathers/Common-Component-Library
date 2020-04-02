import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import * as S from './TableHeader.styles';
import TableColumnHeader from './TableColumnHeader/TableColumnHeader';
/**
 *  Common DataTable Header Component
 *  - state
 * 		- sortedDirection (string) - Determines which way to sort the list of data (asc, desc)
 *  - props
 *    - columnHeaders (array[{title: string, sortable: bool}]) - List of headers for each column
 *    - returnSortedItems (function) - Returns a list of sorted items to parent component
 */

class TableHeader extends Component {
	state = { sortedDirection: 'asc' };
	sortItems = sortBy => {
		const { tableData } = this.props;
		const { sortedDirection } = this.state;
		this.setState(prevState => ({
			sortedDirection: prevState.sortedDirection === 'asc' ? 'desc' : 'asc',
		}));

		const sortedItems = _.orderBy(
			tableData,
			[sortBy.toLowerCase()],
			sortedDirection
		);

		this.props.returnSortedItems(sortedItems);
	};
	render() {
		const { columnHeaders } = this.props;
		return (
			<S.TableHeader data-test="common-data-table-header">
				{columnHeaders.map((header, key) => (
					<TableColumnHeader
						key={key}
						title={header.title}
						sortable={header.sortable}
						sortItems={this.sortItems}
					/>
				))}
			</S.TableHeader>
		);
	}
}

TableHeader.propTypes = {
	columnHeaders: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			sortable: PropTypes.bool,
		}).isRequired
	).isRequired,
	returnSortedItems: PropTypes.func.isRequired,
};

TableHeader.defaultProps = {
	columnHeaders: [],
};

export default TableHeader;
