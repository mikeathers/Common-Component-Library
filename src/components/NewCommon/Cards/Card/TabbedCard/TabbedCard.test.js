import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { findByTestAttr, checkProps } from '../../../test';
import TabbedCard from './TabbedCard';

const titleOne = 'Title One';
const titleTwo = 'Title Two';
const titleThree = 'Title Three';
const tabContentOne = {
	title: titleOne,
	content: <p>Tab Content One</p>,
};
const tabContentTwo = {
	title: titleTwo,
	content: <p>Tab Content Two</p>,
};
const tabContentThree = {
	title: titleThree,
	content: <p>Tab Content Three</p>,
};

const defaultProps = {
	title: 'Tabbed Card Component',
	collapsible: false,
	isOpen: false,
	children: [],
	tabTitles: [titleOne, titleTwo, titleThree],
	tabContents: [tabContentOne, tabContentTwo, tabContentThree],
	handleExpandCard: jest.fn(),
	renderTabContent: jest.fn(),
};

const setup = (props = defaultProps) => {
	return shallow(<TabbedCard {...props} />);
};

describe('Common Tabbed Card', () => {
	test('renders without crashing', () => {
		// Arrange
		const wrapper = setup();
		const tabbedCardComponent = findByTestAttr(wrapper, 'common-tabbed-card');

		// Assert
		expect(tabbedCardComponent.length).toBe(1);
	});

	test('does not throw warning when recieves expected props', () => {
		// Arrange
		const expectedProps = {
			title: 'Test Card',
			collapsible: true,
			isOpen: false,
			children: [],
			tabTitles: [],
			tabContents: [],
			handleExpandCard: jest.fn(),
			renderTabContent: jest.fn(),
		};

		// Assert
		checkProps(TabbedCard, expectedProps);
	});	

	test('renders the tab contents whos title matches the first string in the "tabTitles" array on render when "collapsible" and "openByDefault" are true', () => {
		// Arrange
		const wrapper = setup();

		// Assert
		expect(
			wrapper
				.find('CardContent')
				.at(0)
				.text()
		).toContain(shallow(tabContentOne.content).text());
	});

	test('updates the displayed tab content when a title button is clicked', () => {
		// Arrange
		const wrapper = setup();
		const secondTitleButton = wrapper.find('CardTabTitle').at(1);

		// Act
		secondTitleButton.first().simulate('click');

		// Assert
		expect(
			wrapper
				.find('CardContent')
				.at(0)
				.text()
		).toContain(shallow(tabContentTwo.content).text());
	});

	test('renders each string from "tabTitles" array in the title header of the card', () => {
		// Arrange
		const wrapper = setup();

		// Assert
		expect(
			wrapper
				.find('CardTabTitle')
				.at(0)
				.text()
		).toBe(titleOne);

		expect(
			wrapper
				.find('CardTabTitle')
				.at(1)
				.text()
		).toBe(titleTwo);

		expect(
			wrapper
				.find('CardTabTitle')
				.at(2)
				.text()
		).toBe(titleThree);
	});

	test('adds selected css styles to the p tag containing the first item in the array on render', () => {
		// Arrange
		const wrapper = setup();

		// Assert
		expect(wrapper.find('CardTabTitle').at(0)).toHaveStyleRule(
			'font-weight',
			'500'
		);
		expect(wrapper.find('CardTabTitle').at(1)).not.toHaveStyleRule(
			'font-weight',
			'500'
		);
	});

	test('removes selected css styles from the default selected title and adds them to the clicked title', () => {
		// Arrange
		const wrapper = setup();
		const secondTitleButton = wrapper.find('CardTabTitle').at(1);

		// Act
		secondTitleButton.first().simulate('click');

		// Assert
		const firstTitleButton = wrapper.find('CardTabTitle').at(0);
		const clickedSecondTitleButton = wrapper.find('CardTabTitle').at(1);
		expect(firstTitleButton).not.toHaveStyleRule('font-weight', '500');
		expect(clickedSecondTitleButton).toHaveStyleRule('font-weight', '500');
	});
});
