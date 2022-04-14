const {getDefaultConfig} = require('metro-config');
const {resolver: defaultResolver} = getDefaultConfig.getDefaultValues();
exports.resolver = {
  ...defaultResolver,
  sourceExts: [...defaultResolver.sourceExts, 'cjs'],
};
// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// };
