const path = require('path')

module.exports = {
  /* Mode is development (webpack 4) */
  mode: 'development',
  /* Start looking at /.../Health/client/ */
  context: path.join(__dirname, 'client'),
  /* Go into main.js to look for all dependencies (./ needed) */
  entry: [
    './main.js'
  ],
  /* Place final bundle (bundle.js) in /.../Health/www/ */
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
  /* Creates a source map to allow debugging */
  devtool: 'eval-source-map',
  /* Automatically resolves these file types when imports happen */
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less']
  },
  /* Container for rules for different types of modules we will be bundling */
  module: {
    rules: [
      {
        /* Match all .js or .jsx files */
        test: /\.jsx?$/,
        /* Preprocess code with babel (ES6+ -> ES5) */
        loader: 'babel-loader',
        /* Do not process anything in node_modules */
        exclude: /node_modules/,
        /* Options for babel */
        options: {
          /* Support language features from es2015 (ES6) and react */
          presets: ['es2015', 'react'],
          /* Supports ES6 Class syntactic sugar and converts into ES5 */
          plugins: ['transform-class-properties']
        }
      },
      {
        /* Files (images/gifs) */
        test: /\.jpg$|\.gif$/,
        exclude: /node_modules/,
        /* Use file loader to load in images */
        loader: 'file-loader'
      },
      {
        /* CSS */
        test: /\.css$/,
        /* Don't exclude node modules, might need CSS files */
        /* exclude: /node_modules/ */
        /* Rather than use: [ { loader: 'abc' }, { leader: 'xyz' },... ], do: */
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
