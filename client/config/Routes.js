import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import TopicList from '../views/topic-list';
import TopicDetail from '../views/topic-detail';

export default () => [
    <Route path="/" exact render={() => <Redirect to="/list" />} />,
    <Route path="/list" component={TopicList} />,
    <Route path="/topic-detail" component={TopicDetail} />,
];
