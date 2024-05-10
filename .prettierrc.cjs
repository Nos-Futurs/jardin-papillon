// @ts-check

// Import plugin is crashing. We need to investigate later
// /** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */

module.exports = {
  // importOrder: ['<THIRD_PARTY_MODULES>', '^@zeus/(.*)', '^~(.*)/(.*)', '^[./]'],
  // importOrderBuiltinModulesToTop: true,
  // importOrderCaseInsensitive: true,
  // importOrderCombineTypeAndValueImports: true,
  // importOrderMergeDuplicateImports: true,
  // importOrderParserPlugins: ['typescript', 'decorators-legacy'],
  // importOrderSeparation: true,
  // importOrderSortSpecifiers: true,
  // printWidth: 120,
  // plugins: ['@ianvs/prettier-plugin-sort-imports'], // needed because of pnpm node module management
  // plugins: [require('@ianvs/prettier-plugin-sort-imports')],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,

  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '**/*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
