import React, {Component} from 'react'
import {MapTo} from '@adobe/cq-react-editable-components';

const TitleEditConfig = {

    emptyLabel: 'Title Component',

    isEmpty: function(props) {
        return !props || !props.title || props.title.trim().length < 1;
    }
};

class Title extends Component {

    render() {
        return (
            <h1>
                {this.props.title}
            </h1>
            );
    }

}

export default MapTo('myspa/components/content/title')(Title, TitleEditConfig);
