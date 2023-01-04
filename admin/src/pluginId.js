import pluginPkg from '../../package.json';

const pluginId = pluginPkg.name.replace(/^(@bolsel\/strapi-)plugin-/i, '');

export default pluginId;
