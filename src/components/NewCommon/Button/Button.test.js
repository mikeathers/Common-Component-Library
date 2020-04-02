import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test';
import { Button } from './Button';

const defaultProps = {
	content: 'default button content',
	onClick: jest.fn(),
};

const setup = (props = defaultProps) => {
	return shallow(<Button {...props} />);
};

describe('Common Button', () => {
	test('renders without crashing', () => {
		// Arrange
		const wrapper = setup();
		const buttonComponent = findByTestAttr(wrapper, 'common-btn');

		// Assert
		expect(buttonComponent.length).toBe(1);
	});

	test('does not show warning with required props', () => {
		// Arrange
		const expectedProps = { content: 'button content', onClick: jest.fn() };

		// Assert
		checkProps(Button, expectedProps);
	});

	test('calls the onClick function received from props when the button is clicked', () => {
		// Arrange
		const mockClickFunction = jest.fn();
		const props = { ...defaultProps, onClick: mockClickFunction };
		const wrapper = setup(props);
		const buttonComponent = findByTestAttr(wrapper, 'common-btn');

		// Act
		buttonComponent.simulate('click');

		// Assert
		const mockClickCount = mockClickFunction.mock.calls.length;
		expect(mockClickCount).toBe(1);
	});
});
