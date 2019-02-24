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
      ['@emotion/babel-preset-css-prop', { sourceMap: true, autoLabel: true }],
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
      ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }, 'antd'],
      ['import', { libraryName: 'ant-design-pro', libraryDirectory: 'lib', style: true, camel2DashComponentName: false }, 'ant-design-pro'],
      '@babel/plugin-proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      'react-hot-loader/babel',
    ],
  };
};
