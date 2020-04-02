import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test';
import TableFooter from './TableFooter';

const defaultProps = {
	tableData: [],
};

const setup = (props = defaultProps) => {
	return shallow(<TableFooter {...props} />);
};

describe('Common DataTable Footer', () => {
	test('renders without crashing', () => {
		// Arrange
		const wrapper = setup();
		const tableFooterComponent = findByTestAttr(
			wrapper,
			'common-data-table-footer'
		);

		// Assert
		expect(tableFooterComponent.length).toBe(1);
	});

	test('does not throw warning when expected props are received', () => {
		// Arrange
		const expectedProps = {
			tableData: [],
		};

		// Assert
		checkProps(TableFooter, expectedProps);
	});

	test('shows the correct total number of items in the data table', () => {
		// Arrange
		const props = {
			tableData: [{ vehicle: 'Car', color: 'Red' }],
		};
		const wrapper = setup(props);
		const totalNumberOfItemsLabel = wrapper.find(
			'CommonDataTableTotalNumberOfItems'
		);

		// Assert
		expect(totalNumberOfItemsLabel.text()).toBe('Total Number of Items: 1');
	});
});
