import styled, { css } from 'styled-components';
import styledProps from 'styled-props';
import * as styles from '../../Styles';

export const size = {
	small: 40,
	medium: 60,
	large: 80,
};
export const Statistic = styled.div`
	${props =>
		props.raised &&
		css`
			box-shadow: ${styles.cardBoxShadow};
		`}
  border: 1px solid ${styles.colorThinBorder};  
  margin: ${styles.marginSmall};
  & hr {
        height: 1px;
        background-color: #ccc;
        border: none;
  }
`;

export const Title = styled.div`
	font-weight: 500;
	font-size: 22px;
	padding: ${styledProps(size, 'size')}px;
`;
Title.displayName = 'StatisticTitle';

export const Value = styled.div`
	border-bottom: ${styles.colorThinBorder};
	font-weight: thin;
	font-size: 18px;
	padding: ${styledProps(size, 'size')}px;
`;
Value.displayName = 'StatisticValue';
