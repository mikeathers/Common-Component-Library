import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr, checkProps } from '../test';
import { DataTable } from './DataTable';

const defaultProps = {
	tableData: [],
	columnHeaders: [],
};

const setup = (props = defaultProps, state = null) => {
	const wrapper = mount(<DataTable {...props} />);
	if (state) wrapper.setState(state);
	return wrapper;
};

describe('Common DataTable', () => {
	test('renders without crashing', () => {
		// Arrange
		const wrapper = setup();
		const dataTableComponent = findByTestAttr(wrapper, 'common-data-table');

		// Assert
		expect(dataTableComponent.first().length).toBe(1);
	});

	test('does not throw warning when expected props are received', () => {
		// Arrange
		const expectedProps = {
			tableData: [],
			columnHeaders: [],
		};

		// Assert
		checkProps(DataTable, expectedProps);
	});

	test('maps "tableData" to a new list with each items key/value pairs in the same order as "columnHeaders"', () => {
		// Arrange
		const columnHeaders = [
			{ title: 'Vehicle', sortable: true },
			{ title: 'Color', sortable: true },
			{ title: 'Size', sortable: true },
			{ title: 'Price', sortable: true },
			{ title: 'Height', sortable: true },
			{ title: 'Width', sortable: true },
			{ title: 'Weight', sortable: true },
		];
		const tableData = [
			{
				size: 'Medium',
				price: 100,
				width: 100,
				vehicle: 'Car',
				color: 'Red',
				weight: 150,
				height: 100,
			},
			{
				width: 100,
				color: 'Blue',
				weight: 150,
				vehicle: 'Bike',
				size: 'Small',
				price: 50,
				height: 100,
			},
			{
				height: 100,
				color: 'Grey',
				size: 'Large',
				vehicle: 'Train',
				price: 750,
				width: 100,
				weight: 150,
			},
		];
		const wrapper = setup({ tableData, columnHeaders });

		// Act
		wrapper.instance().orderTableData();

		// Assert
		const firstRow = wrapper.state('tableData')[0];
		expect(Object.keys(firstRow)[0]).toBe('vehicle');
		expect(Object.keys(firstRow)[1]).toBe('color');
		expect(Object.keys(firstRow)[2]).toBe('size');
		expect(Object.keys(firstRow)[3]).toBe('price');
		expect(Object.keys(firstRow)[4]).toBe('height');
		expect(Object.keys(firstRow)[5]).toBe('width');
		expect(Object.keys(firstRow)[6]).toBe('weight');
	});
});
