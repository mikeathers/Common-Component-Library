import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styles';

/**
 	 Common Button Component 
   - state = empty
   - props 
  		- content (string, required) = button text
 			- onClick (function, required) = click event handler			
			- id = (string) identifier 
			- className = (string) className  
			- style = (object) css js style object
			- defaultStyle (string), options: 
					- default 
					- primary
					- secondary
					- danger
 */

const Button = props => {
	return (
		<S.Button data-test="common-btn" {...props}>
			{props.content}
		</S.Button>
	);
};

Button.propTypes = {
	content: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	id: PropTypes.string,
	style: PropTypes.object,
	size: PropTypes.string,
	background: PropTypes.string,
	color: PropTypes.string,
};

Button.defaultProps = {
	color: 'default',
	background: 'default',
};

export { Button };
