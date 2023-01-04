import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';
/**
 * @param {[import('rich-markdown-editor/dist/types').EmbedDescriptor]} embeds
 */
const embeds = [
  {
    title: 'YouTube',
    keywords: 'youtube video tube google',
    defaultHidden: true,
    // eslint-disable-next-line react/display-name
    icon: () => <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg" width={24} height={24} />,
    matcher: (url) => {
      return url.match(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([a-zA-Z0-9_-]{11})$/i);
    },
    component: YoutubeEmbed,
  },
];
export default embeds;
