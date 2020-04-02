import styled, { css } from 'styled-components';
import styledProps from 'styled-props';
import * as styles from '../../Styles';

const size = {
	small: '33vw',
	medium: '50vw',
	large: '95vw',
};

export const Card = styled.div`
	${props =>
		props.disabled &&
		css`
			pointer-events: none;
			opacity: 0.7;
		`}
		${props =>
			props.raised &&
			css`
				box-shadow: ${styles.cardBoxShadow};
			`}
	border: 1px solid ${styles.colorThinBorder};
	width: ${props =>
		props.setWidth ? props.setWidth : styledProps(size, 'size')};
	margin: ${styles.marginSmall};
	border-radius: 3px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${styles.paddingSmall};
	border-bottom: 1px solid ${styles.colorThinBorder};
`;

export const CollapseButton = styled.span`
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

export const Content = styled.div`
	padding: ${styles.paddingSmall};
	padding-bottom: ${styles.paddingMedium};
`;
Content.displayName = 'CardContent';

export const TabTitleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const TabTitle = styled.p`
	${props =>
		props.selected &&
		css`
			font-weight: 500;
			text-decoration: underline;
		`}
		margin: ${styles.marginSmall};
		cursor: pointer;
`;
TabTitle.displayName = 'CardTabTitle';
