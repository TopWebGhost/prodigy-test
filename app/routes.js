import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';

export default (
	<Switch>
		<Route exact path="/" component={PropertyList} />
		<Route path="/:id" component={PropertyDetail} />
	</Switch>
);
