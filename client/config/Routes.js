import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import TopicList from '../views/topic-list';
import TopicDetail from '../views/topic-detail';

export default () => [
    <Route path="/" key="first" exact render={() => <Redirect to="/list" />} />,
    <Route path="/list" key="second" component={TopicList} />,
    <Route path="/topic-detail" key="third" component={TopicDetail} />,
];
