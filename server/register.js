'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'RichMarkdown',
    plugin: 'rich-markdown',
    type: 'richtext',
  });
};
