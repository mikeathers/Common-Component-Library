import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test';
import TableBody from './TableBody';
import TableRow from '../TableRow/TableRow';

const setup = (props = {}) => {
	return shallow(<TableBody {...props} />);
};

describe('Common DataTable - TableBody', () => {
	test('render without crashing', () => {
		// Arrange
		const wrapper = setup();
		const tableBodyComponent = findByTestAttr(
			wrapper,
			'common-data-table-body'
		);

		// Assert
		expect(tableBodyComponent.length).toBe(1);
	});

	test('does not throw warning when required props are received', () => {
		// Arrange
		const expectedProps = {
			tableData: [],
			clickableRows: true,
			selectRow: () => {},
		};

		// Assert
		checkProps(TableBody, expectedProps);
	});

	test('renders a row for each item in "tableData"', () => {
		// Arrange
		const tableData = [
			{ id: 8, type: 'Train', color: 'Green' },
			{ id: 7, type: 'Train', color: 'Blue' },
			{ id: 2, type: 'Car', color: 'Green' },
			{ id: 4, type: 'Bike', color: 'Blue' },
			{ id: 3, type: 'Bike', color: 'Red' },
			{ id: 5, type: 'Bike', color: 'Green' },
			{ id: 0, type: 'Car', color: 'Red' },
			{ id: 1, type: 'Car', color: 'Blue' },
			{ id: 6, type: 'Train', color: 'Red' },
		];
		const wrapper = setup({ tableData });

		// Assert
		const tableBody = findByTestAttr(wrapper, 'common-data-table-body');
		expect(tableBody.find(TableRow).length).toBe(tableData.length);
	});
});
