import React from 'react';
import PortfolioItems from '../../components/PortfolioItem/PortfolioItems';

const Portfolio = (props) => {


	let portfolioItems = <PortfolioItems  />


	return ( 
		<React.Fragment>
		{portfolioItems}
    </React.Fragment>
    );
};


export default Portfolio;