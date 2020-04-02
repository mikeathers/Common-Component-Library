import styled from 'styled-components';

export const Input = styled.input`
	margin: 0;
	outline: 0;
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	text-align: left;
	line-height: 1.21428571em;
	font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
	padding: 0.67857143em 1em;
	background: #fff;
	border: 1px solid rgba(34, 36, 38, 0.15);
	color: rgba(0, 0, 0, 0.87);
	border-radius: 0.28571429rem;
	-webkit-transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
	transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
	transition: box-shadow 0.1s ease, border-color 0.1s ease;
	transition: box-shadow 0.1s ease, border-color 0.1s ease,
		-webkit-box-shadow 0.1s ease;
	-webkit-box-shadow: none;
	box-shadow: none;

	width: ${props => {
		if (props.fullWidth) return '100%';
		if (props.width === '0') return '280px';
		return props.width;
	}};

	&:active {
		border-color: rgba(0, 0, 0, 0.3);
		background: #fafafa;
		color: rgba(0, 0, 0, 0.87);
		-webkit-box-shadow: none;
		box-shadow: none;
	}

	&:focus {
		border-color: #85b7d9;
		background: #fff;
		color: rgba(0, 0, 0, 0.8);
		-webkit-box-shadow: none;
		box-shadow: none;
	}
`;
