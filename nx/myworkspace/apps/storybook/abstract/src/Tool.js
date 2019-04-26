import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Global } from '@storybook/theming';

import { IconButton, Separator } from '@storybook/components';
import {
    SET_STORIES,
    STORY_CHANGED,
    STORY_RENDERED
} from '@storybook/core-events';

import { PARAM_KEY } from './constants';
import { Abstract, Html, Compare, Invert } from './my-icon';

export default class Tool extends Component {
    constructor(props) {
        super(props);

        this.state = {
            action: 'HTML',
            storyParams: {}
        };

        this.listener = stories => {
            const { api } = this.props;
            const storyId = api.getUrlState().storyId;
            this.onStoryChange(storyId);
        };
    }

    componentDidMount() {
        const { api } = this.props;
        api.on(SET_STORIES, this.listener);

        api.on(STORY_CHANGED, this.onStoryChange);
        api.on(STORY_RENDERED, this.onStoryChange);
    }

    componentWillUnmount() {
        const { api } = this.props;
        api.off(SET_STORIES, this.listener);
    }

    onStoryChange = id => {
        const { api } = this.props;
        const storyParams = api.getParameters(id, PARAM_KEY);

        this.setState({ storyParams });
    };

    handleClick = action => {
        this.setState({ action });
    };

    getBackgroundStyle = () => {
        const { action, storyParams } = this.state;
        const style = {};
        if (action === 'HTML') {
            style.display = 'none';
        } else {
            if (storyParams && storyParams.backgroundPositionX) {
                style.backgroundPositionX = `${
                    storyParams.backgroundPositionX
                }px`;
            }

            if (storyParams && storyParams.backgroundPositionY) {
                style.backgroundPositionY = `${
                    storyParams.backgroundPositionY
                }px`;
            }

            if (storyParams && storyParams.share) {
                const shareId = storyParams.share.split('/').slice(-1)[0];
                style.backgroundImage = `url(/${shareId}.png)`;
            }

            if (storyParams && storyParams.share && action === 'Invert') {
                style.filter = 'invert(100%)';
            }
        }

        return style;
    };

    getIframeStyle = () => {
        const { action, storyParams } = this.state;
        const style = {};

        if (!storyParams || !storyParams.share) {
            return style;
        }

        if (action === 'Abstract') {
            style.display = 'none';
        } else if (action === 'Compare') {
            style.opacity = '0.5';
        } else if (action === 'Invert') {
            style.opacity = '0.5';
        }

        return style;
    };

    render() {
        return (
            <Fragment>
                <Global
                    styles={{
                        '#storybook-preview-iframe': {
                            position: 'relative',
                            display: 'block',
                            borderRadius: 4,
                            boxShadow:
                                '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);',
                            boxSizing: 'content-box',
                            zIndex: 2,
                            ...this.getIframeStyle()
                        },
                        '#storybook-preview-background > div': {
                            '&::before': {
                                content: `''`,
                                position: 'absolute',
                                bottom: '0',
                                top: '0',
                                left: '0',
                                right: '0',
                                margin: '8px',
                                zIndex: 1,
                                backgroundRepeat: 'no-repeat',
                                ...this.getBackgroundStyle()
                            }
                        }
                    }}
                />
                <Separator />
                <IconButton
                    key="HTML"
                    title="HTML"
                    active={this.state.action === 'HTML'}
                    onClick={e => this.handleClick('HTML')}
                >
                    <Html />
                </IconButton>
                <IconButton
                    key="Abstract"
                    title="Abstract"
                    active={this.state.action === 'Abstract'}
                    onClick={e => this.handleClick('Abstract')}
                >
                    <Abstract />
                </IconButton>
                <IconButton
                    key="Compare"
                    title="Compare HTML and Abstract"
                    active={this.state.action === 'Compare'}
                    onClick={e => this.handleClick('Compare')}
                >
                    <Compare />
                </IconButton>
                <IconButton
                    key="Invert"
                    title="Invert colors of Abstract"
                    active={this.state.action === 'Invert'}
                    onClick={e => this.handleClick('Invert')}
                >
                    <Invert />
                </IconButton>
                <Separator />
            </Fragment>
        );
    }
}

Tool.propTypes = {
    api: PropTypes.shape({
        on: PropTypes.func
    }).isRequired
};
