import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import FieldIcon from './components/editor/fieldIcon';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.customFields.register({
      name: 'RichMarkdown',
      type: 'richtext',
      pluginId: pluginId,
      icon: FieldIcon,
      intlLabel: {
        id: 'rich-markdown.label',
        defaultMessage: 'RichMarkdown',
      },
      intlDescription: {
        id: 'rich-markdown.description',
        defaultMessage: 'The rich markdown editor for every use case',
      },
      components: {
        Input: async () => import('./components/editor'),
      },
      options: {
        base: [
          {
            intlLabel: {
              id: 'rich-markdown.options.showLabel.label',
              defaultMessage: 'Show Label',
            },
            description: {
              id: 'rich-markdown.options.showLabel.description',
              defaultMessage: 'Lihat label pada form field',
            },
            name: 'options.showLabel',
            type: 'bool',
          },
        ],
      },
    });
  },

  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(/* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
