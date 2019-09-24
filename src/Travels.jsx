import React, { Fragment} from 'react';
import Travel from "./Travel";

const travels = [
	{
		name: "London",
		country: "England",
		photoUrl: "https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg",
	},
	{
		name: "Paris",
		country: "France",
		photoUrl: "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg",
	},
	{
		name: "Lisbon",
		country: "Portugal",
		photoUrl: "https://cdn.vox-cdn.com/thumbor/-nk_2tx5nUdvJILHFHVQ_xSj2OE=/0x0:4867x3414/1200x900/filters:focal(2045x1318:2823x2096)/cdn.vox-cdn.com/uploads/chorus_image/image/55477847/best_lisbon_restaurants_eater_38.0.jpg",
	},
	{
		name: "Madrid",
		country: "Spain",
		photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qAo7NOEGAXbqLgsFpkFN52bZWyRUGiGXP1KUMjv2G_1tTGEirA",
	},
	{
		name: "Rome",
		country: "italy",
		photoUrl: "https://www.untoldmorsels.com/wp-content/uploads/2018/07/5-days-in-rome-itinerary.jpg",
	}



]

const Travels = () => (
	<Fragment>
		{travels.map((travel) => (
			<Travel 
			key={travel.name} 
			name={travel.name} 
			country={travel.country} 
			photoUrl={travel.photoUrl} 
			/>
		))}
	</Fragment>
);
export default Travels;