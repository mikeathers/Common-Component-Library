import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProp, checkProps } from '../../../test';
import TableColumnHeader from './TableColumnHeader';

const defaultProps = {
	title: 'Vehicle',
	sortItems: jest.fn(),
};

const setup = (props = defaultProps) => {
	return shallow(<TableColumnHeader {...props} />);
};

describe('Common DataTable ColumnHeader', () => {
	test('renders without crashing', () => {
		// Arrange
		const wrapper = setup();
		const tableColumnHeaderComponent = findByTestAttr(
			wrapper,
			'common-data-table-column-header'
		);

		// Assert
		expect(tableColumnHeaderComponent.length).toBe(1);
	});

	test('does not throw warning when expected props are received', () => {
		// Arrange
		const expectedProps = {
			title: 'Vehicle',
			sortable: true,
			sortItems: jest.fn(),
		};

		// Assert
		checkProps(TableColumnHeader, expectedProps);
	});

	test('calls "handleSortDirection" when "sortable" is true and the header is clicked', () => {
		// Arrange
		const mockHandleSortDirection = jest.fn();
		const props = {
			title: 'Vehicle',
			sortable: true,
			sortItems: mockHandleSortDirection,
		};
		const wrapper = setup(props);
		const tableColumnHeaderComponent = findByTestAttr(
			wrapper,
			'common-data-table-column-header'
		);

		// Act
		tableColumnHeaderComponent.simulate('click');

		// Assert
		expect(mockHandleSortDirection.mock.calls.length).toBe(1);
	});

	test('doesnt call "handleSortDirection" when "sortable" is false and header is clicked', () => {
		// Arrange
		const mockHandleSortDirection = jest.fn();
		const props = {
			title: 'Vehicle',
			sortable: false,
			sortItems: mockHandleSortDirection,
		};
		const wrapper = setup(props);
		const tableColumnHeaderComponent = findByTestAttr(
			wrapper,
			'common-data-table-column-header'
		);

		// Act
		tableColumnHeaderComponent.simulate('click');

		// Assert
		expect(mockHandleSortDirection.mock.calls.length).toBe(0);
	});

	test('set correct className for sorting items descending on sort icon when header is clicked and current className applied is for sorting ascending', () => {
		// Arrange
		const props = {
			...defaultProps,
			sortable: true,
		};

		const wrapper = setup(props);
		const tableColumnHeaderComponent = findByTestAttr(
			wrapper,
			'common-data-table-column-header'
		);

		expect(
			wrapper
				.find('CommonDataTableColumHeaderIcon')
				.hasClass('las la-sort-amount-down')
		).toBeFalsy();

		// Act
		tableColumnHeaderComponent.simulate('click');
		wrapper.update();

		// Assert
		expect(
			wrapper
				.find('CommonDataTableColumHeaderIcon')
				.hasClass('las la-sort-amount-down')
		).toBeTruthy();
	});

	test('set correct className for sorting items ascending on sort icon when header is clicked and current className applied is for sorting descending', () => {
		// Arrange
		const props = {
			...defaultProps,
			sortable: true,
		};

		const wrapper = setup(props);

		const tableColumnHeaderComponent = findByTestAttr(
			wrapper,
			'common-data-table-column-header'
		);

		expect(
			wrapper
				.find('CommonDataTableColumHeaderIcon')
				.hasClass('las la-sort-amount-up')
		).toBeTruthy();

		tableColumnHeaderComponent.simulate('click');
		wrapper.update();

		expect(
			wrapper
				.find('CommonDataTableColumHeaderIcon')
				.hasClass('las la-sort-amount-down')
		).toBeTruthy();

		// Act
		const updatedTableColumnHeaderComponent = findByTestAttr(
			wrapper,
			'common-data-table-column-header'
		);
		updatedTableColumnHeaderComponent.simulate('click');
		wrapper.update();

		// Assert
		expect(
			wrapper
				.find('CommonDataTableColumHeaderIcon')
				.hasClass('las la-sort-amount-up')
		).toBeTruthy();
	});
});
