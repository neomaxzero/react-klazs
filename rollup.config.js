import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/lib/index.js',
  output: {
    file: 'build/klazs-min.js',
    format: 'cjs'
  },
  exports: 'named',
  external: [ 'lodash' ],
  plugins: [
    uglify()
  ]
}