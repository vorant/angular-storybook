import React, { PureComponent, Fragment } from 'react';
import { PARAM_KEY } from './constants';
import { STORY_CHANGED, STORY_RENDERED } from '@storybook/core-events';

import { Placeholder, Link } from '@storybook/components';

class MyPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storyParams: null
        };
    }
    onStoryChange = id => {
        const { api } = this.props;
        const storyParams = api.getParameters(id, PARAM_KEY);

        this.setState({ storyParams });
    };

    componentDidMount() {
        const { api } = this.props;
        api.on(STORY_RENDERED, this.onStoryChange);
    }
    componentWillUnmount() {
        const { api } = this.props;
        api.off(STORY_RENDERED, this.onStoryChange);
    }

    render() {
        const { active } = this.props;
        const { storyParams } = this.state;

        return active ? (
            <Placeholder>
                {!storyParams || !storyParams.share ? (
                    <Fragment>Links to Abstract are not provided</Fragment>
                ) : (
                    <Fragment>
                        Link to shared{' '}
                        <Link
                            href={storyParams.share}
                            target="_blank"
                            withArrow
                        >
                            {storyParams.share}
                        </Link>
                    </Fragment>
                )}
            </Placeholder>
        ) : null;
    }
}

export default MyPanel;
