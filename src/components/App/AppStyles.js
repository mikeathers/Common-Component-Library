import styled from 'styled-components';

export const App = styled.div`
	padding: 0px 20px;
	font-family: 'Barlow';
	background-color: '#eee';
`;

export const Container = styled.div`
	border: 1px solid #ccc;
	padding: 10px;
`;

export const Title = styled.h2``;
export const CollapseButton = styled.p`
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;
export const TitleContainer = styled.div`
	width: 15vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
