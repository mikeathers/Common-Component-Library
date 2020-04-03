import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';
import { findByTestAttr, checkProps } from '../../test';
import { Card } from './Card';
import { cardBoxShadow } from '../../Styles';

const setup = (props = {}, state = null) => {
	const wrapper = mount(<Card {...props} />);
	if (state) wrapper.setState(state);
	return wrapper;
};

describe('Card', () => {
	test('renders without crashing', () => {
		// Arrange
		const wrapper = setup();
		const cardComponent = findByTestAttr(wrapper, 'common-card');

		// Assert
		expect(cardComponent.first().length).toBe(1);
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
			expect(button.first().text()).toBe('Open');

			// Act
			button.first().simulate('click');

			// Assert
			const closeButton = findByTestAttr(wrapper, 'common-card-btn');
			expect(closeButton.first().text()).toBe('Close');
		});

		test('card button text gets changed to "Open" when button is clicked and button text is currently "Close"', () => {
			// Arrange
			const wrapper = setup({ collapsible: true }, { isOpen: true });
			const button = findByTestAttr(wrapper, 'common-card-btn');

			// Act
			button.first().simulate('click');

			// Assert
			const openButton = findByTestAttr(wrapper, 'common-card-btn');
			expect(openButton.first().text()).toContain('Open');
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
			button.first().simulate('click');

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
			button.first().simulate('click');

			// Assert
			const openedCardContent = findByTestAttr(wrapper, 'common-card-collapse');
			expect(openedCardContent.prop('isOpened')).toBeFalsy();
		});
	});
});
