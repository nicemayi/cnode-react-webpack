import React from 'react';
import PropTypes from 'prop-types';

import { observer, inject } from 'mobx-react';
import { AppState } from '../../store/app.state';

@inject('appState')
@observer
class TopicList extends React.Component {
    componentDidMount() {
        // dosomething
    }

    changeName = event => {
        this.props.appState.changeName(event.target.value);
    };

    render() {
        return (
            <div>
                This is TopicList
                <input type="text" onChange={this.changeName} />
                {this.props.appState.msg}
            </div>
        );
    }
}

TopicList.propTypes = {
    appState: PropTypes.instanceOf(AppState),
};

export default TopicList;
