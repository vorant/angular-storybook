import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import memoize from 'memoizerific';
import deprecate from 'util-deprecate';

import { Global } from '@storybook/theming';

import {
    Icons,
    IconButton,
    WithTooltip,
    TooltipLinkList
} from '@storybook/components';
import {
    SET_STORIES,
    STORY_CHANGED,
    STORY_INIT,
    SET_CURRENT_STORY,
    GET_CURRENT_STORY,
    SELECT_STORY
} from '@storybook/core-events';

import { PARAM_KEY } from './constants';
import MyIcon from './my-icon';

const actions = [
    {
        id: 'sh05',
        title: 'Show design',
        opacity: '0.05'
    },
    {
        id: 'sh25',
        title: 'Show design',
        opacity: '0.25'
    },
    {
        id: 'sh50',
        title: 'Show design',
        opacity: '0.5'
    },
    {
        id: 'sh75',
        title: 'Show design',
        opacity: '0.75'
    },
    {
        id: 'sh100',
        title: 'Show design',
        opacity: '1'
    },
    {
        id: 'revert',
        title: 'Invert color',
        opacity: '0.5'
    }
];

const iframeId = 'storybook-preview-iframe';

function createItem(id, title, opacity, change) {
    return {
        id,
        title,
        onClick: () => {
            change({ selected: id, expanded: false });
        },
        right: opacity,
        opacity
    };
}

const deprecatedViewportString = deprecate(
    () => 0,
    'The viewport parameter must be an object with keys `viewports` and `defaultViewport`'
);
const deprecateOnViewportChange = deprecate(
    () => 0,
    'The viewport parameter `onViewportChange` is no longer supported'
);

function getState(props, state, change) {
    const data = props.api.getCurrentStoryData();
    const parameters = data && data.parameters && data.parameters[PARAM_KEY];

    if (parameters && typeof parameters !== 'object') {
        deprecatedViewportString();
    }

    const { disable, viewports, defaultViewport, onViewportChange } =
        parameters || {};

    if (onViewportChange) {
        deprecateOnViewportChange();
    }

    const list = disable ? [] : actions;

    const selected = state.selected || null;

    const resets = selected
        ? [
              {
                  title: 'Remove image',
                  onClick: () => {
                      change({ selected: undefined, expanded: false });
                  }
              }
          ]
        : [];

    const items = list.length
        ? resets.concat(
              list.map(({ id, title, opacity }) =>
                  createItem(id, title, opacity, change)
              )
          )
        : list;

    return {
        items,
        selected
    };
}

export default class ViewportTool extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            selected: null,
            expanded: false,
            storyParams: {}
        };

        this.listener = stories => {
            const { api } = this.props;
            const storyId = api.getUrlState().storyId;
            this.onStoryChange(storyId);
            this.setState({
                selected: null
            });
        };
    }

    componentDidMount() {
        const { api } = this.props;
        api.on(SET_STORIES, this.listener);
        api.on(STORY_CHANGED, this.onStoryChange);
    }

    componentWillUnmount() {
        const { api } = this.props;
        api.off(SET_STORIES, this.listener);
    }

    onStoryChange = id => {
        const { api } = this.props;
        const storyParams = api.getParameters(id, PARAM_KEY);
        if (storyParams) {
            this.setState({ ...this.state, storyParams });
        }
    };

    change = (...args) => this.setState(...args);

    render() {
        const { expanded } = this.state;
        const { items, selected } = getState(
            this.props,
            this.state,
            this.change
        );
        const storyParams = this.state.storyParams;

        const item = items.find(i => i.id === selected);
        const backgroundPositionX =
            storyParams && storyParams.backgroundPositionX
                ? {
                      backgroundPositionX: `${
                          storyParams.backgroundPositionX
                      }px`
                  }
                : {};
        const backgroundPositionY =
            storyParams && storyParams.backgroundPositionY
                ? {
                      backgroundPositionY: `${
                          storyParams.backgroundPositionY
                      }px`
                  }
                : {};
        const backgroundImage =
            storyParams && storyParams.url
                ? { backgroundImage: `url(${storyParams.url})` }
                : {};

        const filter =
            item && item.title === 'Invert color'
                ? {
                      filter: 'invert(100%)'
                  }
                : {};

        return items.length ? (
            <Fragment>
                {item ? (
                    <Global
                        styles={{
                            [`#${iframeId}`]: {
                                position: 'relative',
                                display: 'block',
                                // margin: '10px auto',
                                // border: '1px solid #f00',
                                borderRadius: 4,
                                boxShadow:
                                    '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);',
                                boxSizing: 'content-box',
                                opacity: item.opacity || '1'
                            },
                            '#storybook-preview-background > div': {
                                '&::before': {
                                    content: `''`,
                                    position: 'absolute',
                                    bottom: '0',
                                    top: '0',
                                    left: '0',
                                    right: '0',
                                    ...backgroundPositionX,
                                    ...backgroundPositionY,
                                    ...backgroundImage,
                                    ...filter,

                                    backgroundRepeat: 'no-repeat'
                                }
                            }
                        }}
                    />
                ) : null}
                <WithTooltip
                    placement="top"
                    trigger="click"
                    tooltipShown={expanded}
                    onVisibilityChange={s => this.setState({ expanded: s })}
                    tooltip={<TooltipLinkList links={items} />}
                    closeOnClick
                >
                    <IconButton
                        key="viewport"
                        title="Change the size of the preview"
                        active={!!item}
                    >
                        <MyIcon />
                    </IconButton>
                </WithTooltip>
            </Fragment>
        ) : null;
    }
}

ViewportTool.propTypes = {
    api: PropTypes.shape({
        on: PropTypes.func
    }).isRequired
};
