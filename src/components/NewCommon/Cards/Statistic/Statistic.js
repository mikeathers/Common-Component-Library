import React from 'react';
import PropType from 'prop-types';
import * as S from './Statistic.styles';

/**
 *  Common Statistic Component
 *    - state = null
 *    - props
 *        - title (string) = Title of the statistic
 *        - value (string) = The value of the statistic
 *        - raised (bool) = Applies box-shadow css style to the component
 *        - size (string) = Applies set padding to the statistic card, options:
 *          - small
 *          - medium
 *          - large
 */

const Statistic = props => {
	const { title, value } = props;
	return (
		<S.Statistic data-test="common-statistic-card" {...props}>
			<S.Title {...props}>{title}</S.Title>
			<hr />
			<S.Value {...props}>{value}</S.Value>
		</S.Statistic>
	);
};

Statistic.defaultProps = {
	title: 'Statistic Card',
	value: 'Statistic Value',
	size: 'small',
	raised: false,
};

Statistic.propTypes = {
	title: PropType.string.isRequired,
	value: PropType.string.isRequired,
	raised: PropType.bool,
	size: PropType.string,
};

export { Statistic };
