const path = require( 'path' );

module.exports = {
  webpackFinal: async ( baseConfig, options ) => {
    const { module = {} } = baseConfig;

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [ ...( module.rules || [] ) ]
      }
    };

    newConfig.module.rules.push( {
      test: /\.(ts|tsx)$/,
      include: [
        path.resolve( __dirname, '../src/components' ),
        path.resolve( __dirname, '../src/stories' )
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [ 'next/babel' ],
            plugins: [ 'react-docgen' ]
          }
        }
      ]
    } );
    newConfig.resolve.extensions.push( '.ts', '.tsx' );

    newConfig.module.rules.find(
      rule => rule.test.toString() === '/\\.css$/'
    ).exclude = /\.module\.css$/;

    newConfig.module.rules.push( {
      test: /\.module\.css$/,
      include: path.resolve( __dirname, '../src/components' ),
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true
          }
        }
      ]
    } );

    return newConfig;
  }
};
