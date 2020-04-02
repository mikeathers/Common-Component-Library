import styled from 'styled-components';
import * as styles from '../../Styles';

export const TableHeader = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 60px;
	border-bottom: 1px solid #ccc;
	color: #000;
	background-color: ${styles.dataTableBackgroundColor};
	-webkit-box-shadow: 0px 0.2px 4px 0px rgba(0, 0, 0, 0.35);
	-moz-box-shadow: 0px 0.2px 4px 0px rgba(0, 0, 0, 0.35);
	box-shadow: 0px 0.2px 4px 0px rgba(0, 0, 0, 0.35);
`;

export const TableColumnHeader = styled.div`
	width: 100%;
	padding: ${styles.paddingSmall};
	display: flex;
	align-items: center;
`;
TableColumnHeader.displayName = 'CommonDataTableColumnHeader';

export const TableColumnHeaderText = styled.span`
	cursor: pointer;
`;

export const TableColumnHeaderIcon = styled.i`
	margin-left: 5px;
	margin-top: 3px;
`;
