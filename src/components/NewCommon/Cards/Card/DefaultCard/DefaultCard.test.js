import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test';
import DefaultCard from './DefaultCard';

const defaultProps = {
	title: 'Default Card Component',
	collapsible: false,
	isOpen: false,
	handleExpandCard: jest.fn(),
	children: [],
};

const setup = (props = defaultProps) => {
	return shallow(<DefaultCard {...props} />);
};

describe('Common Default Card', () => {
	test('renders without crashing', () => {
		// Arrange
		const wrapper = setup();
		const defaultCardComponent = findByTestAttr(wrapper, 'common-default-card');

		// Assert
		expect(defaultCardComponent.length).toBe(1);
	});

	test('does not throw warning when recieves expected props', () => {
		// Arrange
		const expectedProps = {
			title: 'Test Card',
			collapsible: true,
			handleExpandCard: jest.fn(),
			isOpen: false,
			children: [],
		};

		// Assert
		checkProps(DefaultCard, expectedProps);
	});
});
