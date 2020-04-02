import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.styles';

/**
 * Common Input Component
 *  - state = null
 *  - props *
 *    - fullWidth (bool) - Sets width to 100%
 *    - width (string) - Sets width to passed in value
 * 		- marginTop (string) = Applies CSS margin to the top of the element
 * 		- marginBottom (string) = Applies CSS margin to the bottom of the element
 * 		- marginRight (string) = Applies CSS margin to the right of the element
 * 		- marginLeft (string) = Applies CSS margin to the left of the element
 */

const Input = props => {
	const {
		marginRight,
		marginLeft,
		marginBottom,
		marginTop,
		...restProps
	} = props;

	const style = {
		marginRight: `${marginRight}px`,
		marginLeft: `${marginLeft}px`,
		marginBottom: `${marginBottom}px`,
		marginTop: `${marginTop}px`,
	};
	return <S.Input style={style} {...restProps} />;
};

Input.propTypes = {
	fullWidth: PropTypes.bool,
	width: PropTypes.string,
	marginTop: PropTypes.string,
	marginBottom: PropTypes.string,
	marginRight: PropTypes.string,
	marginLeft: PropTypes.string,
};

Input.defaultProps = {
	width: '0',
	fullWidth: false,
	marginTop: '0',
	marginBottom: '0',
	marginRight: '0',
	marginLeft: '0',
};

export { Input };
