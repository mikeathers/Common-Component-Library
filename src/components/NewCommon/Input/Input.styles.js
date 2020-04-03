import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const error = css`
	background-color: #fff6f6;
	border-color: #e0b4b4;
	color: #9f3a38;
	-webkit-box-shadow: none;
	box-shadow: none;
`;

export const InputContainer = styled.div`
	position: relative;
	font-weight: 400;
	font-style: normal;
	display: -webkit-inline-box;
	display: -ms-inline-flexbox;
	display: inline-flex;
	color: rgba(0, 0, 0, 0.87);

	width: ${props => {
		if (props.fullWidth) return '100%';
		if (props.width === '0') return '280px';
		return props.width;
	}};
`;

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
	width: 100%;

	${props => {
		if ((props.isLoading || props.search || props.icon) && props.left)
			return css`
				padding-left: 3em;
			`;
		if (props.isLoading || props.search || props.icon)
			return css`
				padding-right: 3em;
			`;
		return css`
			padding-right: 1em;
		`;
	}}

	${props => props.error && error}

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
		-webkit-box-shadow: none;
		box-shadow: none;
		& + i {
			${props =>
				!props.standardIcon &&
				css`
					-webkit-text-stroke: 1px #000;
				`};
		}
	}

	&::placeholder {
		color: rgba(0, 0, 0, 0.4);
	}
`;
Input.displayName = 'CommonInput';

const standardIcon = css`
	font-size: 1.4em;
	width: 1em;
	-webkit-text-stroke: 1px rgba(0, 0, 0, 0.2);
	margin-right: 0.3em;
	${props =>
		props.left &&
		css`
			margin-left: 0.5em;
		`}
`;

export const InputIcon = styled.i`
	cursor: default;
	position: absolute;
	line-height: 1;
	text-align: center;
	top: 0;
	margin: 0;
	height: 100%;
	width: 2.6em;
	opacity: 0.5;
	border-radius: 0 0.2rem 0.2rem 0;
	-webkit-transition: opacity 0.3s ease;
	transition: opacity 0.3s ease;
	-webkit-text-stroke: 1px rgba(0, 0, 0, 0.4);
	right: 0.1em;

	${props =>
		props.left &&
		css`
			left: 0;
		`}

	${props => props.standardIcon && standardIcon};

	&:before {
		left: 0;
		position: absolute;
		text-align: center;
		top: 50%;
		width: 100%;
		margin-top: -0.5em;
	}
`;

export const InputLoadingIcon = styled(InputIcon)`
	&:before {
		position: absolute;
		content: '';
		top: 50%;
		left: 50%;
		margin: -0.6em 0 0 -0.6em;
		width: 0.9em;
		height: 0.9em;
		border-radius: 500rem;
		border: 0.2em solid rgba(0, 0, 0, 0.1);
	}

	&:after {
		position: absolute;
		content: '';
		top: 50%;
		left: 50%;
		margin: -0.6em 0 0 -0.6em;
		width: 0.9em;
		height: 0.9em;
		-webkit-animation: button-spin 0.6s linear;
		animation: button-spin 0.6s linear;
		-webkit-animation-iteration-count: infinite;
		animation-iteration-count: infinite;
		border-radius: 500rem;
		border-color: #767676 transparent transparent;
		border-style: solid;
		border-width: 0.2em;
		-webkit-box-shadow: 0 0 0 1px transparent;
		box-shadow: 0 0 0 1px transparent;
		animation: ${rotate} 1s linear infinite;
	}
`;
InputLoadingIcon.displayName = 'InputLoadingIcon';

export const InputSearchIcon = styled(InputIcon)`
	transform: rotate(270deg);
`;
InputSearchIcon.displayName = 'InputSearchIcon';
