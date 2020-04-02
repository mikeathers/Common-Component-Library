import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test';
import TableRow from './TableRow';
import TableColumn from '../TableColumn/TableColumn';

const defaultProps = {
	item: { title: 'Car', color: 'Red', price: 100 },
};

const setup = (props = defaultProps) => {
	return shallow(<TableRow {...props} />);
};

describe('Common DataTable - TableRow', () => {
	test('renders without crashing', () => {
		// Arrange
		const wrapper = setup();
		const tableRowComponent = findByTestAttr(wrapper, 'common-data-table-row');

		// Assert
		expect(tableRowComponent.length).toBe(1);
	});

	test('does not throw warning when expected props are received', () => {
		// Arrange
		const expectedProps = {
			item: { title: 'Car', color: 'Red' },
			isClickable: true,
			selectRow: () => {},
		};

		// Assert
		checkProps(TableRow, expectedProps);
	});

	test('displays a TableColumn for even key in the item object passed in through props', () => {
		// Arrange
		const wrapper = setup();

		// Assert
		expect(wrapper.find(TableColumn).length).toBe(
			Object.keys(defaultProps.item).length
		);
	});

	test('"selectRow" is called with the correct row data when the row is clicked and "isClickable" is true', () => {
		// Arrange
		const mockSelectRow = jest.fn();
		const props = {
			...defaultProps,
			isClickable: true,
			selectRow: mockSelectRow,
		};
		const wrapper = setup(props);
		const tableRowComponent = findByTestAttr(wrapper, 'common-data-table-row');
		const expectedToBeCalledWith = [defaultProps.item];

		// Act
		tableRowComponent.simulate('click');

		// Assert
		expect(mockSelectRow.mock.calls.length).toBe(1);
		expect(mockSelectRow.mock.calls[0]).toEqual(expectedToBeCalledWith);
	});

	test('"selectRow" is not called when the row is clicked and "isClickable" is false', () => {
		// Arrange
		const mockSelectRow = jest.fn();
		const props = {
			...defaultProps,
			isClickable: false,
			selectRow: mockSelectRow,
		};
		const wrapper = setup(props);
		const tableRowComponent = findByTestAttr(wrapper, 'common-data-table-row');

		// Act
		tableRowComponent.simulate('click');

		// Assert
		expect(mockSelectRow.mock.calls.length).toBe(0);
	});

	test('TableColumn is being passed the correct "value" prop', () => {
		// Arrange
		const wrapper = setup();
		const tableColumn = wrapper.find('TableColumn').first();

		// Assert
		expect(tableColumn.prop('value')).toBe(defaultProps.item.title);
	});
});
