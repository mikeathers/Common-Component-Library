import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { findByTestAttr, checkProps } from '../../test';
import { Statistic } from './Statistic';
import { cardBoxShadow } from '../../Styles';
import { size } from './Statistic.styles';

const setup = (props = {}) => {
	return shallow(<Statistic {...props} />);
};

describe('Statistic Card', () => {
	test('renders without crashing', () => {
		// Arrange
		const wrapper = setup();
		const statisticComponent = findByTestAttr(wrapper, 'common-statistic-card');

		// Assert
		expect(statisticComponent.length).toBe(1);
	});

	test('does not throw warning when receives expected props', () => {
		// Arrange
		const expectedProps = {
			title: 'Test Title',
			value: 'Test Value',
		};

		// Assert
		checkProps(Statistic, expectedProps);
	});

	test('applies css box-shadow when "rasied" prop is received', () => {
		// Arrange
		const wrapper = setup({ raised: true });
		const statisticComponent = findByTestAttr(wrapper, 'common-statistic-card');

		// Assert
		expect(statisticComponent).toHaveStyleRule('box-shadow', cardBoxShadow);
	});

	test('applies css padding when "size" prop is received', () => {
		// Arrange
		const wrapper = setup({ size: 'large' });
		const statisticComponent = findByTestAttr(wrapper, 'common-statistic-card');

		// Assert
		const titleComponent = statisticComponent.find('StatisticTitle').first();
		const valueComponent = statisticComponent.find('StatisticValue').first();
		expect(titleComponent).toHaveStyleRule('padding', `${size.large}px`);
		expect(valueComponent).toHaveStyleRule('padding', `${size.large}px`);
	});
});
