import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TableColumn.styles';

const TableColumn = ({ value }) => {
	return (
		<S.TableColumn data-test="common-data-table-column">{value}</S.TableColumn>
	);
};

TableColumn.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default TableColumn;
