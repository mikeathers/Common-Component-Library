import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultCard from './DefaultCard/DefaultCard';
import TabbedCard from './TabbedCard/TabbedCard';
import './Card.css';

/**
 * Common Card Component
 *  - state = isOpen (bool) - Determines if the card has been opened
 *  - props
 *    - collapsible (bool) - Determines if the card has collapsible functionality
 * 		- openByDefault (bool) - Specifies if the card should be open on first render when 'collapsible' is true
 *    - title (string) - Title shown on the card
 * 		- disabled (bool) - Disables the card so it cannot be interacted with
 * 		- raised (bool) - Adds a box-shaow to the card
 * 		- setWidth (string) - Sets a width on the card, overriding any other set width by 'size' prop
 *    - children - Content placed inside the card
 * 		- tabbed (bool) - Allows the card to display multiple tabs
 * 		- tabTitles (array[string]) - Array for the titles of each tab to be displayed in the header of the card
 * 		- tabContents (array[object]) {title:string, content:jsxElement} - Array for the content of each tab to be displayed in the contents of the card
 */

class Card extends Component {
	state = {
		isOpen: this.props.openByDefault ? true : false,
	};

	handleExpandCard = () =>
		this.setState(prevState => ({ isOpen: !prevState.isOpen }));

	render() {
		const {
			tabbed,
			title,
			collapsible,
			children,
			tabTitles,
			tabContents,
		} = this.props;
		const { isOpen } = this.state;
		if (tabbed)
			return (
				<TabbedCard
					data-test="common-card"
					isOpen={isOpen}
					tabTitles={tabTitles}
					tabContents={tabContents}
					collapsible={collapsible}
					{...this.props}
					handleExpandCard={this.handleExpandCard}
				/>
			);
		return (
			<DefaultCard
				data-test="common-card"
				title={title}
				isOpen={isOpen}
				children={children}
				collapsible={collapsible}
				{...this.props}
				handleExpandCard={this.handleExpandCard}
			/>
		);
	}
}

Card.defaultProps = {
	collapsible: false,
	title: 'Card Component',
	disabled: false,
	children: <p>Card Content</p>,
	raised: false,
	size: 'small',
	setWidth: null,
	tabbed: false,
	tabTitles: ['Card Component'],
	tabContents: [<p>Card Content</p>],
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	collapsible: PropTypes.bool,
	disabled: PropTypes.bool,
	raised: PropTypes.bool,
	size: PropTypes.string,
	setWidth: PropTypes.string,
	tabbed: PropTypes.bool,
	tabTitles: (props, propName) => {
		if (
			props['tabbed'] === true &&
			(props[propName] === undefined || !Array.isArray(props[propName]))
		)
			return new Error(
				'A collection of tabTitles is needed when "tabbed" is set to true'
			);
	},
	tabContents: (props, propName) => {
		if (
			props['tabbed'] === true &&
			(props[propName] === undefined || !Array.isArray(props[propName]))
		)
			return new Error(
				'A collection of tabContents is needed when "tabbed" is set to true'
			);
	},
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export { Card };
