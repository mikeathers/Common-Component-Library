import styled from 'styled-components';
import * as styles from '../../Styles';

export const TableRow = styled.div`
	padding: 2px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	height: 60px;
	border: 1px solid #eee;
	border-top: none;
	color: #555;
	text-decoration: none !important;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: ${styles.colorDefaultHover};
	}
`;
TableRow.displayName = 'CommonDataTableRow';
