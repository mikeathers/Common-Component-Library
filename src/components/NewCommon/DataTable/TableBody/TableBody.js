import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TableBody.styles';
import TableRow from '../TableRow/TableRow';

/**
 * Common DataTable TableBody Component
 *  - state = null
 *  - props
 *    - tableData (array[]) - Data passed in to be displayed on the table
 *    - selectRow (function) - Callback for when a row is clicked, returns clicked row data
 * 		- clickableRows (bool) - Determines if rows are clickable
 */

const TableBody = ({ tableData, selectRow, clickableRows }) => {
	return (
		<S.TableBody data-test="common-data-table-body">
			{tableData.length > 0 ? (
				tableData.map((item, key) => (
					<TableRow
						key={key}
						item={item}
						selectRow={selectRow}
						isClickable={clickableRows}
					/>
				))
			) : (
				<S.NoTableDataMessage>
					No table data has been found...
				</S.NoTableDataMessage>
			)}
		</S.TableBody>
	);
};

TableBody.propTypes = {
	tableData: PropTypes.array.isRequired,
	selectRow: (props, propName) => {
		if (props['clickableRows'] && props[propName] === undefined)
			return new Error(
				'A selectRow function is required when the clickableRows prop is true'
			);
	},
	clickableRows: PropTypes.bool,
};

TableBody.defaultProps = {
	tableData: [],
	selectRow: () => {},
	clickableRows: false,
};

export default TableBody;
