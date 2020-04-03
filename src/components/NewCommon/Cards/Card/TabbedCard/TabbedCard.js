import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';
import * as S from '../Card.styles';

/**
 * Common Default Card Component
 *  - state - null
 *  - props
 *    - collapsible (bool) - Determines if the card has collapsible functionality
 *    - children - Content placed inside the card
 *    - handleExpandCard (function) - Opens or closes the card
 *    - isOpen (bool) - Determines whether the card is opened or closed
 * 		- tabTitles (array[string]) - Array for the titles of each tab to be displayed in the header of the card
 * 		- tabContents (array[object]) {title:string, content:jsxElement} - Array for the content of each tab to be displayed in the contents of the card
 */

const DefaultCard = ({
	collapsible,
	handleExpandCard,
	isOpen,
	children,
	tabTitles,
	tabContents,
	...restProps
}) => {
	const [selectedTab, selectTab] = React.useState(tabTitles[0]);
	const renderTabContent = () => {
		const tabFound = tabContents.find(item => item.title === selectedTab);
		return tabFound && tabFound.content;
	};
	return (
		<S.Card data-test="common-tabbed-card" {...restProps}>
			<S.Header {...restProps}>
				<S.TabTitleWrapper>
					{tabTitles.map((tabTitle, key) => (
						<S.TabTitle
							key={key}
							selected={tabTitle === selectedTab}
							onClick={() => selectTab(tabTitle)}
						>
							{tabTitle}
						</S.TabTitle>
					))}
				</S.TabTitleWrapper>
				{collapsible && (
					<S.CollapseButton
						data-test="common-card-btn"
						onClick={handleExpandCard}
					>
						{isOpen ? 'Close' : 'Open'}
					</S.CollapseButton>
				)}
			</S.Header>
			{collapsible ? (
				<Collapse data-test="common-card-collapse" isOpened={isOpen}>
					<S.Content>{renderTabContent()}</S.Content>
				</Collapse>
			) : (
				<S.Content>{renderTabContent()}</S.Content>
			)}
		</S.Card>
	);
};

DefaultCard.propTypes = {
	collapsible: PropTypes.bool.isRequired,
	tabTitles: PropTypes.array.isRequired,
	tabContents: PropTypes.array.isRequired,
	isOpen: (props, propName) => {
		if (props['collapsible'] && props[propName] === undefined)
			return new Error(
				`A "isOpen" value is needed when "collapsible" is set to true`
			);
		if (typeof props[propName] !== 'boolean')
			return new Error(`"isOpen" must be a boolean value`);
	},
	handleExpandCard: (props, propName) => {
		if (props['collapsible'] && props[propName] === undefined)
			return new Error(
				'A handleExpandCard function is needed when the "collapsible" prop is set to true'
			);
		if (typeof props[propName] !== 'function')
			return new Error(`"handleExpandCard" must be a function`);
	},
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

DefaultCard.defaultProps = {
	title: 'Default Card Component',
	collapsible: false,
	isOpen: false,
};

export default DefaultCard;
