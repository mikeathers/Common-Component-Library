import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import * as S from './AppStyles';
import Header from 'components/Header/Header';
import Buttons from 'components/Buttons/Buttons';
import Cards from 'components/Cards/Cards';
import Inputs from 'components/Inputs/Inputs';
import DataTable from 'components/DataTable/DataTable';

export default class App extends Component {
	state = {
		inputsContainerOpen: false,
		buttonContainerOpen: false,
		cardContainerOpen: false,
		dataTableContainerOpen: true,
	};
	render() {
		const {
			inputsContainerOpen,
			buttonContainerOpen,
			cardContainerOpen,
			dataTableContainerOpen,
		} = this.state;
		const collpaseContainer = (containerToCollapse) => {
			const parsedText = `${containerToCollapse}ContainerOpen`;
			this.setState((prevState) => ({
				[parsedText]: !prevState[parsedText],
			}));
		};
		return (
			<S.App>
				<Header />

				{/* Buttons */}
				<S.Container>
					<S.TitleContainer>
						<S.Title>Buttons</S.Title>
						<S.CollapseButton onClick={() => collpaseContainer('button')}>
							{buttonContainerOpen ? 'Close' : 'Open'}
						</S.CollapseButton>
					</S.TitleContainer>
					<Collapse isOpened={buttonContainerOpen}>
						<Buttons />
					</Collapse>
				</S.Container>

				{/* Inputs */}
				<S.Container>
					<S.TitleContainer>
						<S.Title>Inputs</S.Title>
						<S.CollapseButton onClick={() => collpaseContainer('inputs')}>
							{inputsContainerOpen ? 'Close' : 'Open'}
						</S.CollapseButton>
					</S.TitleContainer>
					<Collapse isOpened={inputsContainerOpen}>
						<Inputs />
					</Collapse>
				</S.Container>

				{/* Cards */}
				<S.Container>
					<S.TitleContainer>
						<S.Title>Cards</S.Title>
						<S.CollapseButton onClick={() => collpaseContainer('card')}>
							{cardContainerOpen ? 'Close' : 'Open'}
						</S.CollapseButton>
					</S.TitleContainer>
					<Collapse isOpened={cardContainerOpen}>
						<Cards />
					</Collapse>
				</S.Container>

				{/* DataTable */}
				<S.Container>
					<S.TitleContainer>
						<S.Title>DataTable</S.Title>
						<S.CollapseButton onClick={() => collpaseContainer('dataTable')}>
							{dataTableContainerOpen ? 'Close' : 'Open'}
						</S.CollapseButton>
					</S.TitleContainer>
					<Collapse isOpened={dataTableContainerOpen}>
						<DataTable />
					</Collapse>
				</S.Container>
			</S.App>
		);
	}
}
