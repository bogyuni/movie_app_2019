import React from 'react';
import PropTypes from 'prop-types';

const foodLike = [
	{ id: 1, name: 'kimchi', image: 'https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg' },
	{ id: 2, rating: 4.9, name: 'potato', image: 'https://sc04.alicdn.com/kf/U4ea7941bf8c84039b446c8e103ee34242.jpg' },
];

function Food({ name, image, rating }) {
	return (
		<div>
			<h2>I Like {name}</h2>
			<h3>{rating} / 5</h3>
			<img src={image} alt={name} />
		</div>
	);
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	rating: PropTypes.number,
};

function App() {
	return (
		<div className="App">
			{foodLike.map((dish) => (
				<Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />
			))}
		</div>
	);
}

export default App;
