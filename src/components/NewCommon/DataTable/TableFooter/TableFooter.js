import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TableFooter.styles';

/**
 * Common DataTable Footer
 *  - state - null
 *  - props
 *    - tableData (array[]) - Data passed in to be displayed on the table
 */

const TableFooter = ({ tableData }) => {
	return (
		<S.TableFooter data-test="common-data-table-footer">
			<S.TableFooterTotalCount>
				Total Number of Items: {tableData.length}
			</S.TableFooterTotalCount>
		</S.TableFooter>
	);
};

TableFooter.propTypes = {
	tableData: PropTypes.array.isRequired,
};

export default TableFooter;
