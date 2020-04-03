import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';
import * as S from '../Card.styles';

/**
 * Common Default Card Component
 *  - state - null
 *  - props
 *    - title (string) - Title shown on the card
 *    - collapsible (bool) - Determines if the card has collapsible functionality
 *    - children - Content placed inside the card
 *    - handleExpandCard (function) - Opens or closes the card
 *    - isOpen (bool) - Determines whether the card is opened or closed
 */

const DefaultCard = ({
	title,
	collapsible,
	handleExpandCard,
	isOpen,
	children,
	...restProps
}) => {
	return (
		<S.Card data-test="common-default-card" {...restProps}>
			<S.Header>
				<h3>{title}</h3>
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
					<S.Content>{children}</S.Content>
				</Collapse>
			) : (
				<S.Content>{children}</S.Content>
			)}
		</S.Card>
	);
};

DefaultCard.propTypes = {
	title: PropTypes.string.isRequired,
	collapsible: PropTypes.bool.isRequired,
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
