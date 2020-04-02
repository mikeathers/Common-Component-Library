import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { findByTestAttr, checkProps } from '../../test';
import { Card } from './Card';
import { cardBoxShadow } from '../../Styles';

const setup = (props = {}, state = null) => {
	const wrapper = shallow(<Card {...props} />);
	if (state) wrapper.setState(state);
	return wrapper;
};

describe('Card', () => {
	test('renders without crashing', () => {
		// Arrange
		const wrapper = setup();
		const cardComponent = findByTestAttr(wrapper, 'common-card');

		// Assert
		expect(cardComponent.length).toBe(1);
	});

	test('does not show warning with required props', () => {
		// Arrange
		const expectedProps = {
			title: 'Card Component',
			children: '',
		};

		// Assert
		checkProps(Card, expectedProps);
	});

	test('renders a disabled card when "disabled" prop is true', () => {
		// Arrange
		const props = {
			disabled: true,
		};
		const wrapper = setup(props);
		const cardComponent = findByTestAttr(wrapper, 'common-card');

		// Assert
		expect(cardComponent).toHaveStyleRule('pointer-events', 'none');
		expect(cardComponent).toHaveStyleRule('opacity', '0.7');
	});

	test('applies box-shadow to card when "raised" prop is true', () => {
		// Arrange
		const props = {
			raised: true,
		};
		const wrapper = setup(props);
		const cardComponent = findByTestAttr(wrapper, 'common-card');

		// Assert
		expect(cardComponent).toHaveStyleRule('box-shadow', cardBoxShadow);
	});

	test('applies a set width to the card when "setWidth" prop is received', () => {
		// Arrange
		const props = {
			setWidth: '40px',
		};
		const wrapper = setup(props);
		const cardComponent = findByTestAttr(wrapper, 'common-card');

		// Assert
		expect(cardComponent).toHaveStyleRule('width', '40px');
	});

	describe('Collapsing', () => {
		test('card button text gets changed to "Close" when button is clicked and button text is currently "Open"', () => {
			// Arrange
			const wrapper = setup({ collapsible: true });
			const button = findByTestAttr(wrapper, 'common-card-btn');
			expect(button.text()).toBe('Open');

			// Act
			button.simulate('click');

			// Assert
			const closeButton = findByTestAttr(wrapper, 'common-card-btn');
			expect(closeButton.text()).toBe('Close');
		});

		test('card button text gets changed to "Open" when button is clicked and button text is currently "Close"', () => {
			// Arrange
			const wrapper = setup({ collapsible: true }, { isOpen: true });
			const button = findByTestAttr(wrapper, 'common-card-btn');

			// Act
			button.simulate('click');

			// Assert
			const openButton = findByTestAttr(wrapper, 'common-card-btn');
			expect(openButton.text()).toContain('Open');
		});

		test('card content is not visible when "collapsible" prop is true and "openByDefault" is false', () => {
			// Arrange
			const props = {
				collapsible: true,
				openByDefault: false,
			};
			const wrapper = setup(props);
			const cardContent = findByTestAttr(wrapper, 'common-card-collapse');

			// Assert
			expect(cardContent.prop('isOpened')).toBeFalsy();
		});

		test('card content is visible when "collapsible" is true and "openByDefault" is true', () => {
			// Arrange
			const props = {
				collapsible: true,
				openByDefault: true,
			};
			const wrapper = setup(props);
			const cardContent = findByTestAttr(wrapper, 'common-card-collapse');

			// Assert
			expect(cardContent.prop('isOpened')).toBeTruthy();
		});

		test('card content becomes visble when "collapsible" is true, "openByDefault" is false and the open button is clicked', () => {
			// Arrange
			const props = {
				collapsible: true,
				openByDefault: false,
			};
			const wrapper = setup(props);
			const button = findByTestAttr(wrapper, 'common-card-btn');
			const cardContent = findByTestAttr(wrapper, 'common-card-collapse');
			expect(cardContent.prop('isOpened')).toBeFalsy();

			// Act
			button.simulate('click');

			// Assert
			const openedCardContent = findByTestAttr(wrapper, 'common-card-collapse');
			expect(openedCardContent.prop('isOpened')).toBeTruthy();
		});

		test('card content becomes not visble when "collapsible" is true, "openByDefault" is true and the close button is clicked', () => {
			// Arrange
			const props = {
				collapsible: true,
				openByDefault: true,
			};
			const wrapper = setup(props);
			const button = findByTestAttr(wrapper, 'common-card-btn');
			const cardContent = findByTestAttr(wrapper, 'common-card-collapse');
			expect(cardContent.prop('isOpened')).toBeTruthy();

			// Act
			button.simulate('click');

			// Assert
			const openedCardContent = findByTestAttr(wrapper, 'common-card-collapse');
			expect(openedCardContent.prop('isOpened')).toBeFalsy();
		});
	});

	describe('Tabbed', () => {
		test('does not throw warning with required props when "tabbed" is set to true', () => {
			// Arrange
			const expectedProps = {
				title: 'Card Component',
				tabbed: true,
				tabTitles: ['Test Title One', 'Test Title Two'],
				tabContents: [{ title: 'Test Title One', content: <p>Content</p> }],
				children: '',
			};

			// Assert
			checkProps(Card, expectedProps);
		});

		describe('Titles', () => {
			// Arrange
			const titleOne = 'Title One';
			const titleTwo = 'Title Two';
			const titleThree = 'Title Three';
			const props = {
				tabbed: true,
				tabTitles: [titleOne, titleTwo, titleThree],
			};

			test('renders each string from "tabTitles" array in the title header of the card', () => {
				// Arrange
				const wrapper = setup(props);

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
				const wrapper = setup(props, { selectedTab: 'Title One' });

				// Assert
				expect(wrapper.find('CardTabTitle').at(0)).toHaveStyleRule(
					'font-weight',
					'500'
				);
			});

			test('removes selected css styles from the default selected title and adds them to the clicked title', () => {
				// Arrange
				const wrapper = setup(props, { selectedTab: 'Title One' });
				const secondTitleButton = wrapper.find('CardTabTitle').at(1);

				// Act
				secondTitleButton.simulate('click');

				// Assert
				const firstTitleButton = wrapper.find('CardTabTitle').at(0);
				const clickedSecondTitleButton = wrapper.find('CardTabTitle').at(1);
				expect(firstTitleButton).not.toHaveStyleRule('font-weight', '500');
				expect(clickedSecondTitleButton).toHaveStyleRule('font-weight', '500');
			});
		});

		describe('Contents', () => {
			// Arrange
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
			const props = {
				collapsible: true,
				openByDefailt: true,
				tabbed: true,
				tabTitles: [titleOne, titleTwo, titleThree],
				tabContents: [tabContentOne, tabContentTwo, tabContentThree],
			};

			test('returns correct tab content when a list of "tabContens" has been received via props and "selectedTab" in state is "Title Two"', () => {
				// Arrange
				const wrapper = setup(props, { selectedTab: 'Title Two' });

				// Act
				const content = wrapper.instance().renderTabContent();

				// Assert
				expect(content).toEqual(tabContentTwo.content);
			});

			test('renders the tab contents whos title matches the first string in the "tabTitles" array on render when "collapsible" and "openByDefault" are true', () => {
				// Arrange
				const wrapper = setup(props);

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
				const wrapper = setup(props);
				const secondTitleButton = wrapper.find('CardTabTitle').at(1);

				// Act
				secondTitleButton.simulate('click');

				// Assert
				expect(
					wrapper
						.find('CardContent')
						.at(0)
						.text()
				).toContain(shallow(tabContentTwo.content).text());
			});
		});
	});
});
