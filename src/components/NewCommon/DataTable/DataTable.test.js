import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test';
import { DataTable } from './DataTable';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';

const defaultProps = {
	tableData: [],
	columnHeaders: [],
};

const setup = (props = defaultProps, state = null) => {
	const wrapper = shallow(<DataTable {...props} />);
	if (state) wrapper.setState(state);
	return wrapper;
};

describe('Common DataTable', () => {
	test('renders without crashing', () => {
		// Arrange
		const wrapper = setup();
		const dataTableComponent = findByTestAttr(wrapper, 'common-data-table');

		// Assert
		expect(dataTableComponent.length).toBe(1);
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

	test('renders a TableHeader when "columnHeaders" prop is received', () => {
		// Arrange
		const wrapper = setup();

		// Assert
		expect(wrapper.find(TableHeader).length).toBe(1);
	});
	test('renders a TableBody when "tableData" props is received', () => {
		// Arrange
		const wrapper = setup();

		// Assert
		expect(wrapper.find(TableBody).length).toBe(1);
	});
});
