import React, { Fragment } from 'react';

const Travel = ({ name, country, photoUrl }) => (
	<Fragment>
		<p>{name}, {country}</p>
		<img className="image" src={photoUrl} alt=""/>
	</Fragment>
);
export default Travel