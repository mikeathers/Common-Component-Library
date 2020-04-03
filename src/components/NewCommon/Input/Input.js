import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.styles';

/**
 * Common Input Component
 *  - state - null
 *  - props -
 *    - fullWidth (bool) - Sets width to 100%
 *    - width (string) - Sets width to passed in value
 * 		- marginTop (string) - Applies CSS margin to the top of the element
 * 		- marginBottom (string) - Applies CSS margin to the bottom of the element
 * 		- marginRight (string) - Applies CSS margin to the right of the element
 * 		- marginLeft (string) - Applies CSS margin to the left of the element
 *
 * 		- loading (bool) - Adds a spinner icon to the right hand side of the input
 * 		- search (bool) - Add a search icon to the right hand side of the input
 * 		- error (bool) - Adds error css styles to the input
 * 		- icon (string) - CSS class for the line-awesome icon to be added
 * 		- iconPosition - Positions the icon on the left or right side of the input
 * 			- left
 * 			- right
 */

const Input = props => {
	const {
		marginRight,
		marginLeft,
		marginBottom,
		marginTop,
		loading,
		search,
		error,
		icon,
		...restProps
	} = props;

	const style = {
		marginRight: `${marginRight}px`,
		marginLeft: `${marginLeft}px`,
		marginBottom: `${marginBottom}px`,
		marginTop: `${marginTop}px`,
	};
	return (
		<S.InputContainer {...restProps} style={style} data-test="common-input">
			<S.Input
				isLoading={loading}
				search={search}
				error={error}
				icon={icon}
				standardIcon={icon !== ''}
				{...restProps}
			/>
			{loading && (
				<S.InputLoadingIcon {...restProps} className="las la-circle-notch" />
			)}
			{!loading && search && (
				<S.InputSearchIcon {...restProps} className="las la-search" />
			)}
			{!loading && !search && icon !== '' && (
				<S.InputIcon
					className={icon}
					standardIcon={icon !== ''}
					{...restProps}
				/>
			)}
		</S.InputContainer>
	);
};

Input.propTypes = {
	fullWidth: PropTypes.bool,
	width: PropTypes.string,
	marginTop: PropTypes.string,
	marginBottom: PropTypes.string,
	marginRight: PropTypes.string,
	marginLeft: PropTypes.string,
	loading: PropTypes.bool,
	search: (props, propName) => {
		if (props[propName] === true && props['loading'] !== false)
			return new Error(
				'"search" is not a usable prop when "loading" is set to true'
			);
		if (typeof props[propName] !== 'boolean')
			return new Error(
				'"search" is expecting a boolean value but receieved a non boolean value'
			);
	},
	error: PropTypes.bool,
	icon: (props, propName) => {
		if (props[propName] !== '' && props['loading'] !== false)
			return new Error(
				'"icon" is not a usable prop when "loading" is set to true'
			);
		if (props[propName] !== '' && props['search'] !== false)
			return new Error(
				'"icon" is not a usable prop when "search" is set to true'
			);
		if (typeof props[propName] !== 'string')
			return new Error(
				'"icon" is expecting a string value but receieved a non string value'
			);
	},
	left: PropTypes.bool,
};

Input.defaultProps = {
	width: '0',
	fullWidth: false,
	marginTop: '0',
	marginBottom: '0',
	marginRight: '0',
	marginLeft: '0',
	search: false,
	loading: false,
	error: false,
	icon: '',
	left: false,
};

export { Input };
