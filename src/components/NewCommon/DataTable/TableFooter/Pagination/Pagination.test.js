import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test';
import Pagination from './Pagination';

const setup = (props = {}) => {
	return shallow(<Pagination {...props} />);
};

describe('Common DataTable Pagination', () => {
	test('renders without crashing', () => {});
	test('does not throw warning when expected props are received', () => {});
	test('renders with correct number of addiation pages to navigate to', () => {});
});
