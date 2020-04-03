import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { findByTestAttr, checkProps } from '../test';
import { Input } from './Input';

const setup = (props = {}) => {
	return shallow(<Input {...props} />);
};

describe('Common Input Component', () => {
	test('renders without crashing', () => {
		// Arrange
		const wrapper = setup();
		const inputComponent = findByTestAttr(wrapper, 'common-input');

		// Assert
		expect(inputComponent.length).toBe(1);
	});

	test('does not throw a warning when received expected props', () => {
		// Arrange
		const expectedProps = {
			loading: true,
			search: false,
			icon: '',
			left: true,
		};

		// Assert
		checkProps(Input, expectedProps);
	});

	test('renders a loading icon when "loading" is received in through props', () => {
		// Arrange
		const wrapper = setup({ loading: true });

		// Assert
		expect(wrapper.find('InputLoadingIcon').first().length).toBe(1);
	});

	test('renders a search icon when "search" is received in through props', () => {
		// Arrange
		const wrapper = setup({ search: true });

		// Assert
		expect(wrapper.find('InputSearchIcon').first().length).toBe(1);
	});

	test('adds error css styles when "error" is received in through props ', () => {
		// Arrange
		const wrapper = setup({ error: true });

		// Assert
		expect(wrapper.find('CommonInput').first()).toHaveStyleRule(
			'background-color',
			'#fff6f6'
		);
	});
});
