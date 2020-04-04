import React from 'react';
import * as S from './Inputs.style';
import { Input } from 'components/NewCommon';

const Inputs = (props) => {
	return (
		<S.Inputs>
			<S.InputGroup>
				<S.InputsContainer>
					<p>Standard Input</p>
					<Input placeholder="First Name" />
				</S.InputsContainer>
				<S.InputsContainer>
					<p>Search Input</p>
					<Input placeholder="Search" search />
				</S.InputsContainer>
				<S.InputsContainer>
					<p>Loading Input</p>
					<Input placeholder="Loading" loading />
				</S.InputsContainer>
				<S.InputsContainer>
					<p>Specific Icon Input</p>
					<Input placeholder="Config" icon="la la-cog" />
				</S.InputsContainer>
			</S.InputGroup>
			<S.InputGroup>
				<S.InputsContainer>
					<p>Left Icon</p>
					<Input placeholder="Users" icon="las la-users" left />
				</S.InputsContainer>
				<S.InputsContainer>
					<p>Right Icon</p>
					<Input placeholder="Users" icon="las la-users" />
				</S.InputsContainer>
			</S.InputGroup>
			<S.InputGroup>
				<S.InputsContainer>
					<p>Error Input</p>
					<Input placeholder="First Name" error />
				</S.InputsContainer>
			</S.InputGroup>
		</S.Inputs>
	);
};

export default Inputs;
