const uniq = new Date().getTime();
export const ADDON_ID = 'storybook/viewport' + uniq;
export const PARAM_KEY = 'viewport' + uniq;

export default {
    UPDATE: `${ADDON_ID}/update`,
    CONFIGURE: `${ADDON_ID}/configure`,
    SET: `${ADDON_ID}/setStoryDefaultViewport`,
    CHANGED: `${ADDON_ID}/viewportChanged`
};
