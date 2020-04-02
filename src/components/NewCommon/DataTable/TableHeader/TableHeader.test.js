import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test';
import TableHeader from './TableHeader';
import TableColumnHeader from './TableColumnHeader/TableColumnHeader';

const defaultProps = {
	columnHeaders: [
		{ title: 'Cars', sortable: true },
		{ title: 'Bikes', sortable: true },
		{ title: 'Trains', sortable: false },
	],
	returnSortedItems: jest.fn(),
};
const setup = (props = defaultProps, state = null) => {
	const wrapper = shallow(<TableHeader {...props} />);
	if (state) wrapper.setState(state);
	return wrapper;
};

describe('Common DataTable - TableHeader', () => {
	test('renders without crashing', () => {
		// Arrange
		const wrapper = setup();
		const tableHeaderComponent = findByTestAttr(
			wrapper,
			'common-data-table-header'
		);

		// Assert
		expect(tableHeaderComponent.length).toBe(1);
	});

	test('does not throw warning when expected props are received', () => {
		// Arrange
		const expectedProps = {
			columnHeaders: [],
			returnSortedItems: jest.fn(),
		};

		// Assert
		checkProps(TableHeader, expectedProps);
	});

	test('renders a list of column headers', () => {
		// Arrange
		const wrapper = setup();

		// Assert
		defaultProps.columnHeaders.forEach((header, index) => {
			expect(
				wrapper
					.find(TableColumnHeader)
					.at(index)
					.prop('title')
			).toBe(header.title);
		});
	});

	test('sorts the tableData into a new list ordered by the parameter passed in - ASC', () => {
		// Arrange
		const tableData = [
			{ id: 0, type: 'Car', color: 'Red' },
			{ id: 3, type: 'Bike', color: 'Red' },
			{ id: 8, type: 'Train', color: 'Green' },
			{ id: 7, type: 'Train', color: 'Blue' },
			{ id: 2, type: 'Car', color: 'Green' },
			{ id: 4, type: 'Bike', color: 'Blue' },
			{ id: 5, type: 'Bike', color: 'Green' },
			{ id: 1, type: 'Car', color: 'Blue' },
			{ id: 6, type: 'Train', color: 'Red' },
		];

		const expectedTableData = [
			{ id: 0, type: 'Car', color: 'Red' },
			{ id: 1, type: 'Car', color: 'Blue' },
			{ id: 2, type: 'Car', color: 'Green' },
			{ id: 3, type: 'Bike', color: 'Red' },
			{ id: 4, type: 'Bike', color: 'Blue' },
			{ id: 5, type: 'Bike', color: 'Green' },
			{ id: 6, type: 'Train', color: 'Red' },
			{ id: 7, type: 'Train', color: 'Blue' },
			{ id: 8, type: 'Train', color: 'Green' },
		];

		const mockReturnSortedItems = jest.fn();
		const props = {
			...defaultProps,
			returnSortedItems: mockReturnSortedItems,
			tableData,
		};
		const wrapper = setup(props, { sortedDirection: 'asc' });

		// Act
		wrapper.instance().sortItems('id');

		// Assert
		expect(mockReturnSortedItems.mock.calls[0]).toEqual([expectedTableData]);
	});

	test('sorts the tableData into a new list ordered by the parameter passed in - DESC', () => {
		// Arrange
		// Arrange
		const tableData = [
			{ id: 0, type: 'Car', color: 'Red' },
			{ id: 3, type: 'Bike', color: 'Red' },
			{ id: 8, type: 'Train', color: 'Green' },
			{ id: 7, type: 'Train', color: 'Blue' },
			{ id: 2, type: 'Car', color: 'Green' },
			{ id: 4, type: 'Bike', color: 'Blue' },
			{ id: 5, type: 'Bike', color: 'Green' },
			{ id: 1, type: 'Car', color: 'Blue' },
			{ id: 6, type: 'Train', color: 'Red' },
		];

		const expectedTableData = [
			{ id: 8, type: 'Train', color: 'Green' },
			{ id: 7, type: 'Train', color: 'Blue' },
			{ id: 6, type: 'Train', color: 'Red' },
			{ id: 5, type: 'Bike', color: 'Green' },
			{ id: 4, type: 'Bike', color: 'Blue' },
			{ id: 3, type: 'Bike', color: 'Red' },
			{ id: 2, type: 'Car', color: 'Green' },
			{ id: 1, type: 'Car', color: 'Blue' },
			{ id: 0, type: 'Car', color: 'Red' },
		];

		const mockReturnSortedItems = jest.fn();
		const props = {
			...defaultProps,
			returnSortedItems: mockReturnSortedItems,
			tableData,
		};
		const wrapper = setup(props, { sortedDirection: 'desc' });

		// Act
		wrapper.instance().sortItems('id');

		// Assert
		expect(mockReturnSortedItems.mock.calls[0]).toEqual([expectedTableData]);
	});

	// test('"sortItems" calls "returnSortedItems" once items have been sorted', () => {
	// 	// Arrange
	// 	const mockReturnSortedItems = jest.fn();
	// 	const props = {
	// 		...defaultProps,
	// 		returnSortedItems: mockReturnSortedItems,
	// 	};
	// 	const wrapper = setup(props);

	// 	// Act
	// 	wrapper.instance().sortItems('color');

	// 	// Assert
	// 	expect(mockReturnSortedItems.mock.calls.length).toBe(1);
	// });
});
