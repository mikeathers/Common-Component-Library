import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TableColumnHeader.styles';

/**
 * Common DataTable ColumnHeader Component
 * - state - null
 * - props
 *  - title (string) - Title to display on the column header
 *  - sortable (bool) - Determines if the column can be sorted or not
 *  - sortItems (function) - Sorts the header
 */

const TableColumnHeader = ({ title, sortable, sortItems }) => {
	const [sortDirectionAsc, setSortDirection] = React.useState(true);

	return (
		<S.TableColumnHeader
			data-test="common-data-table-column-header"
			onClick={() => {
				sortable && sortItems(title);
				sortable && setSortDirection(!sortDirectionAsc);
			}}
		>
			<S.TableColumnHeaderText>
				{title}
				{sortable && (
					<S.TableColumnHeaderIcon
						className={
							sortDirectionAsc
								? 'las la-sort-amount-up'
								: 'las la-sort-amount-down'
						}
					></S.TableColumnHeaderIcon>
				)}
			</S.TableColumnHeaderText>
		</S.TableColumnHeader>
	);
};

TableColumnHeader.propTypes = {
	title: PropTypes.string.isRequired,
	sortable: PropTypes.bool.isRequired,
	sortItems: (props, propName) => {
		if (props['sortable'] && props[propName] === undefined)
			return new Error(
				'A sortItems function is needed when "sortable" is true'
			);
	},
};

TableColumnHeader.defaultProps = {
	sortable: false,
};

export default TableColumnHeader;
