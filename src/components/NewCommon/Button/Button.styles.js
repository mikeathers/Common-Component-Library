import styled from 'styled-components';
import styledProps from 'styled-props';
import { darken } from 'polished';

import {
	colorPrimary,
	colorSecondary,
	colorDefault,
	colorDanger,
	colorWhite,
	fontDefaultButton,
} from '../Styles';

export const background = {
	primary: colorPrimary,
	secondary: colorSecondary,
	danger: colorDanger,
	default: colorDefault,
};

export const color = {
	primary: colorWhite,
	secondary: colorWhite,
	default: colorWhite,
	danger: colorWhite,
};

export const size = {
	padding: {
		small: 8,
		medium: 15,
		large: 20,
	},
	borderRadius: {
		small: 3,
		medium: 3,
		large: 3,
	},
};

export const Button = styled.button`
	cursor: pointer;
	display: inline-block;
	min-height: 1em;
	outline: 0;
	border: none;
	vertical-align: baseline;
	margin: 0 0.25em 0 0;
	padding: 0.8em 1.5em 0.78571429em;
	border-radius: 3px;
	text-transform: none;
	text-shadow: none;
	font-weight: 700;
	line-height: 1em;
	font-style: normal;
	text-align: center;
	text-decoration: none;
	-webkit-box-shadow: 0 0 0 1px transparent inset,
		0 0 0 0 rgba(34, 36, 38, 0.15) inset;
	box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-transition: 'opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease';
	transition: 'opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease';
	will-change: '';
	-webkit-tap-highlight-color: transparent;
	-webkit-appearance: button;

	color: ${styledProps(color, 'color')};
	font-family: ${fontDefaultButton};
	background: ${styledProps(background, 'background')};
	padding: ${styledProps(size.padding)}px;
	border-radius: ${styledProps(size.borderRadius)}px;

	&:hover,
	&:focus {
		background-color: ${props =>
			darken(0.03, styledProps(background, 'background')(props))};
	}
`;
