import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test';
import TableColumn from './TableColumn';

const defaultProps = { value: 'Car' };

const setup = (props = defaultProps) => {
	return shallow(<TableColumn {...props} />);
};

describe('Common DataTable - TableColumn', () => {
	test('renders withour crashing', () => {
		// Arrange
		const wrapper = setup();
		const tableColumnComponent = findByTestAttr(
			wrapper,
			'common-data-table-column'
		);

		// Assert
		expect(tableColumnComponent.length).toBe(1);
	});

	test('does not throw warning when expected props are received', () => {
		// Arrange
		const expectedProps = { value: 'Car' };

		// Assert
		checkProps(TableColumn, expectedProps);
	});

	test('renders "value" received from props', () => {
		// Arrange
		const expectedValue = 'Car';
		const wrapper = setup({ value: 'Car' });
		const tableColumnComponent = findByTestAttr(
			wrapper,
			'common-data-table-column'
		);

		// Assert
		expect(tableColumnComponent.text()).toBe(expectedValue);
	});
});
