import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Common ButtonContainer Component
 * 	- state = null
 * 	- props
 * 		- marginTop (string) = applies css margin to the top of the element
 * 		- marginBottom (string) = applies css margin to the bottom of the element
 * 		- marginRight (string) = applies css margin to the right of the element
 * 		- marginLeft (string) = applies css margin to the left of the element
 * 		- justifyContent (string) = applies css flexbox attribute to the element
 * 		- alignItems (string)	applies css flexbox attribute to the element
 */

const StyledButtonContainer = styled.div`
	display: flex;
	margin-bottom: ${props.marginBottom}px;
	margin-top: ${props.marginTop}px;
	margin-right: ${props.marginRight}px;
	margin-left: ${props.marginLeft}px;
	justify-content: ${props.justifyContent};
	align-items: ${props.alignItems};
`;

ButtonContainer.defaultProps = {
	marginTop: 0,
	marginBottom: 0,
	marginRight: 0,
	marginLeft: 0,
	justifyContent: 'center',
	alignItems: 'center',
};

ButtonContainer.propTypes = {
	marginTop: PropTypes.string,
	marginBottom: PropTypes.string,
	marginRight: PropTypes.string,
	marginLeft: PropTypes.string,
	justifyContent: PropTypes.string,
	alignItems: PropTypes.string,
};

export default ButtonContainer = props => (
	<StyledButtonContainer {...props}>{props.children}</StyledButtonContainer>
);
