import React from 'react';
import { ButtonsWrapper, StyledButtons } from './ButtonStyles';
import { Button } from 'components/NewCommon';

const Buttons = () => {
	const handleClick = () => {};
	return (
		<StyledButtons>
			<p>Default Styles</p>
			<ButtonsWrapper>
				<Button content="Default" onClick={handleClick} />
				<Button content="Primary" primary onClick={handleClick} />
				<Button content="Secondary" secondary onClick={handleClick} />
				<Button content="Danger" danger onClick={handleClick} />
			</ButtonsWrapper>
			<p>Sizes</p>
			<ButtonsWrapper>
				<Button content="Default" default onClick={handleClick} />
				<Button content="Small" small primary onClick={handleClick} />
				<Button content="Medium" medium secondary onClick={handleClick} />
				<Button content="Large" large danger onClick={handleClick} />
			</ButtonsWrapper>
		</StyledButtons>
	);
};

export default Buttons;
