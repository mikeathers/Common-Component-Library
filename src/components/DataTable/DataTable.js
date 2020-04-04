import React from 'react';
import { DataTable as CommonDataTable } from 'components/NewCommon';
import * as S from './DataTableStyles';

const columnHeaders = [
	{ title: 'Vehicle', sortable: true },
	{ title: 'Color', sortable: true },
	{ title: 'Size', sortable: true },
	{ title: 'Price', sortable: true },
	{ title: 'Height', sortable: true },
	{ title: 'Width', sortable: true },
	{ title: 'Weight', sortable: true },
];

const tableData = [
	{
		color: 'Red',
		height: 100,
		width: 100,
		vehicle: 'Car',
		price: 100,
		weight: 150,
		size: 'Medium',
	},
	{
		color: 'Blue',
		size: 'Small',
		price: 50,
		height: 100,
		vehicle: 'Bike',
		width: 100,
		weight: 150,
	},
	{
		vehicle: 'Train',
		color: 'Grey',
		size: 'Large',
		price: 750,
		height: 100,
		width: 100,
		weight: 150,
	},
	{
		vehicle: 'Car',
		color: 'Red',
		size: 'Medium',
		price: 100,
		height: 100,
		width: 100,
		weight: 150,
	},
	{
		vehicle: 'Bike',
		color: 'Blue',
		size: 'Small',
		price: 50,
		height: 100,
		width: 100,
		weight: 150,
	},
	{
		vehicle: 'Train',
		color: 'Grey',
		size: 'Large',
		price: 750,
		height: 100,
		width: 100,
		weight: 150,
	},
	{
		vehicle: 'Car',
		color: 'Red',
		size: 'Medium',
		price: 100,
		height: 100,
		width: 100,
		weight: 150,
	},
	{
		vehicle: 'Bike',
		color: 'Blue',
		size: 'Small',
		price: 50,
		height: 100,
		width: 100,
		weight: 150,
	},
	{
		vehicle: 'Train',
		color: 'Grey',
		size: 'Large',
		price: 750,
		height: 100,
		width: 100,
		weight: 150,
	},
	{
		vehicle: 'Car',
		color: 'Red',
		size: 'Medium',
		price: 100,
		height: 100,
		width: 100,
		weight: 150,
	},
	{
		vehicle: 'Bike',
		color: 'Blue',
		size: 'Small',
		price: 50,
		height: 100,
		width: 100,
		weight: 150,
	},
	{
		vehicle: 'Train',
		color: 'Grey',
		size: 'Large',
		price: 750,
		height: 100,
		width: 100,
		weight: 150,
	},
];

const DataTable = () => {
	return (
		<S.DataTableContainer>
			<CommonDataTable tableData={tableData} columnHeaders={columnHeaders} />
		</S.DataTableContainer>
	);
};

export default DataTable;
