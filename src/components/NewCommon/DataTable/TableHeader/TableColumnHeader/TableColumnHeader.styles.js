import styled from 'styled-components';
import * as styles from '../../../Styles';

export const TableColumnHeader = styled.span`
	width: 100%;
	padding: ${styles.paddingSmall};
	padding-left: ${styles.paddingMedium};

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
TableColumnHeaderIcon.displayName = 'CommonDataTableColumHeaderIcon';
