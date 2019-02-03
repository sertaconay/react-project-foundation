module.exports = (api) => {
  api.cache(false);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          loose: true,
          targets: {
            browsers: ['last 2 versions'],
          },
        },
      ],
      '@babel/typescript',
      '@babel/preset-react',
    ],
    plugins: [
      [
        'transform-imports',
        {
          lodash: {
            transform: 'lodash/${member}', // eslint-disable-line
            preventFullImport: true,
          },
        },
      ],
      ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }],
      ['emotion', { sourceMap: true, autoLabel: true }],
      '@babel/plugin-proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      'react-hot-loader/babel',
    ],
  };
};
