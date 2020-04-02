import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test';
import TableSearch from './TableSearch';

const defaultProps = {
	tableData: [
		{ vehicle: 'Car', color: 'Red', size: 'Medium' },
		{ vehicle: 'Bike', color: 'Black', size: 'Small' },
		{ vehicle: 'Train', color: 'Grey', size: 'Large' },
		{ vehicle: 'Plane', color: 'Black', size: 'Large' },
	],
	returnFilteredItems: jest.fn(),
	searchInProgress: jest.fn(),
};

const setup = (props = defaultProps) => {
	return shallow(<TableSearch {...props} />);
};

describe('Common DataTable Search', () => {
	test('renders without crashing', () => {
		// Assert
		const wrapper = setup();
		const tableSearchComponent = findByTestAttr(
			wrapper,
			'common-data-table-search'
		);

		// Assert
		expect(tableSearchComponent.length).toBe(1);
	});

	test('does not throw a warning when expected props are received', () => {
		// Arrange
		const expectedProps = {
			...defaultProps,
		};

		// Assert
		checkProps(TableSearch, expectedProps);
	});

	test('"filterResults" filters list of data down to one item when one item is found', () => {
		// Arrange
		const mockReturnFilteredItems = jest.fn();
		const props = {
			...defaultProps,
			returnFilteredItems: mockReturnFilteredItems,
		};
		const expectedReturnResult = [props.tableData[0]];
		const wrapper = setup(props);

		// Act
		wrapper.instance().filterResults('Car');

		// Assert
		expect(mockReturnFilteredItems.mock.calls.length).toBe(1);
		expect(mockReturnFilteredItems.mock.calls[0]).toEqual([
			expectedReturnResult,
		]);
	});

	test('"filterResults" filters list of data down to two items when two items are found', () => {
		// Arrange
		const mockReturnFilteredItems = jest.fn();
		const props = {
			...defaultProps,
			returnFilteredItems: mockReturnFilteredItems,
		};
		const expectedReturnResult = [props.tableData[2], props.tableData[3]];
		const wrapper = setup(props);

		// Act
		wrapper.instance().filterResults('Large');

		// Assert
		expect(mockReturnFilteredItems.mock.calls.length).toBe(1);
		expect(mockReturnFilteredItems.mock.calls[0]).toEqual([
			expectedReturnResult,
		]);
	});

	test('"filterResults" filters list of data down to one item when one item is found via a partial letter match', () => {
		// Arrange
		const mockReturnFilteredItems = jest.fn();
		const props = {
			...defaultProps,
			returnFilteredItems: mockReturnFilteredItems,
		};
		const expectedReturnResult = [props.tableData[1]];
		const wrapper = setup(props);

		// Act
		wrapper.instance().filterResults('Bi');

		// Assert
		expect(mockReturnFilteredItems.mock.calls.length).toBe(1);
		expect(mockReturnFilteredItems.mock.calls[0]).toEqual([
			expectedReturnResult,
		]);
	});

	test('typing in the search input calls "filterResults" on every key stroke', () => {
		// Arrange
		const mockFilterResults = jest.fn();
		const wrapper = setup();
		wrapper.instance().filterResults = mockFilterResults;
		const searchInput = findByTestAttr(
			wrapper,
			'common-data-table-search-input'
		);

		// Act
		searchInput.simulate('change', {
			target: {
				name: 'commonDataTableSearchInput',
				value: 'b',
			},
		});
		searchInput.simulate('change', {
			target: {
				name: 'commonDataTableSearchInput',
				value: 'b',
			},
		});
		searchInput.simulate('change', {
			target: {
				name: 'commonDataTableSearchInput',
				value: 'b',
			},
		});
		searchInput.simulate('change', {
			target: {
				name: 'commonDataTableSearchInput',
				value: 'b',
			},
		});

		// Assert
		expect(mockFilterResults.mock.calls.length).toBe(4);
	});

	test('when search input is not empty "searchInProgress" get called with a true value', () => {
		// Arrange
		const mockSearchInProgress = jest.fn();
		const expectedCallValue = [true];
		const props = {
			...defaultProps,
			searchInProgress: mockSearchInProgress,
		};
		const wrapper = setup(props);
		const searchInput = findByTestAttr(
			wrapper,
			'common-data-table-search-input'
		);

		// Act
		searchInput.simulate('change', {
			target: {
				name: 'commonDataTableSearchInput',
				value: 'b',
			},
		});

		// Assert
		expect(mockSearchInProgress.mock.calls.length).toBe(1);
		expect(mockSearchInProgress.mock.calls[0]).toEqual(expectedCallValue);
	});

	test('when search input is empty "searchInProgress" get called with a false value', () => {
		// Arrange
		const mockSearchInProgress = jest.fn();
		const expectedCallValue = [false];
		const props = {
			...defaultProps,
			searchInProgress: mockSearchInProgress,
		};
		const wrapper = setup(props);
		const searchInput = findByTestAttr(
			wrapper,
			'common-data-table-search-input'
		);

		// Act
		searchInput.simulate('change', {
			target: {
				name: 'commonDataTableSearchInput',
				value: '',
			},
		});

		// Assert
		expect(mockSearchInProgress.mock.calls.length).toBe(1);
		expect(mockSearchInProgress.mock.calls[0]).toEqual(expectedCallValue);
	});
});
