import React from 'react';
import { StyledCards, CardsWrapper, CardContent } from './CardsStyles';
import { Card, Statistic } from 'components/NewCommon';

const tabContents = [
	{ title: 'Title One', content: <p>Content One</p> },
	{ title: 'Title Two', content: <p>Content Two</p> },
	{ title: 'Title Three', content: <p>Content Three</p> },
];
const tabTitles = ['Title One', 'Title Two', 'Title Three'];
const Cards = () => {
	return (
		<StyledCards>
			<h2>Standard Cards</h2>
			<h3>Props</h3>
			<CardsWrapper>
				<CardContent>
					<p>Default Card - props(none)</p>
					<Card />
				</CardContent>
				<CardContent>
					<p>Raised Card - props(raised)</p>
					<Card raised />
				</CardContent>
				<CardContent>
					<p>Collapsible Card - props(collapsible)</p>
					<Card collapsible />
				</CardContent>
				<CardContent>
					<p>
						Collapsible Card which is open by default - props(collapsible,
						openByDefault)
					</p>
					<Card collapsible openByDefault />
				</CardContent>
				<CardContent>
					<p>Disabled Card - props(disabled)</p>
					<Card disabled collapsible openByDefault />
				</CardContent>
			</CardsWrapper>
			<h3>Sizes</h3>
			<CardsWrapper>
				<CardContent>
					<p>Default Card - prop(), size(33%)</p>
					<Card small />
				</CardContent>
				<CardContent>
					<p>Medium Card - prop(medium), size(50%)</p>
					<Card medium />
				</CardContent>
				<CardContent>
					<p>Large Card - prop(large), size(100%)</p>
					<Card large />
				</CardContent>
				<CardContent>
					<p>
						Set Width Card - prop(setWidth), size(whatever you pass as a prop)
					</p>
					<Card large setWidth="400px" />
				</CardContent>
			</CardsWrapper>
			<h2>Tabbed Card</h2>
			<CardsWrapper>
				<CardContent>
					<Card
						collapsible
						openByDefault
						tabbed
						tabTitles={tabTitles}
						tabContents={tabContents}
						raised
					/>
				</CardContent>
			</CardsWrapper>
			<h2>Statistic Card</h2>
			<CardsWrapper>
				<CardContent>
					<p>Default Card </p>
					<Statistic />
				</CardContent>

				<CardContent>
					<p>Raised Card </p>
					<Statistic raised />
				</CardContent>
			</CardsWrapper>
			<CardsWrapper>
				<CardContent>
					<p>Small</p>
					<Statistic />
				</CardContent>
				<CardContent>
					<p>Medium</p>
					<Statistic medium />
				</CardContent>
				<CardContent>
					<p>Large</p>
					<Statistic large />
				</CardContent>
			</CardsWrapper>
		</StyledCards>
	);
};

export default Cards;
