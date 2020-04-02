import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TableRow.styles';
import TableColumn from '../TableColumn/TableColumn';

/**
 * Common DataTable Row Component
 *  - state = null
 *  - props
 *    - item (object) - Item containing the data to displayed on the row
 *    - selectRow (function) - Callback for when a row is clicked, returns clicked row data
 *    - isClickable (bool) - Determines if the row can be clicked and the selectRow function triggered
 */

const TableRow = ({ item, selectRow, isClickable }) => {
	return (
		<S.TableRow
			data-test="common-data-table-row"
			onClick={isClickable ? selectRow(item) : null}
		>
			{Object.keys(item).map((value, key) => (
				<TableColumn key={key} value={item[value]}></TableColumn>
			))}
		</S.TableRow>
	);
};

TableRow.propTypes = {
	item: PropTypes.object.isRequired,
	selectRow: (props, propName) => {
		if (props['isClickable'] && props[propName] === undefined)
			return new Error(
				'A selectRow function is required when the isClickable prop is true'
			);
	},
	isClickable: PropTypes.bool,
};

TableRow.defaultProps = {
	item: {},
	selectRow: () => {},
	isClickable: false,
};

export default TableRow;
