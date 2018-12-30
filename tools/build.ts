import { rollup } from 'rollup';
import { inputOptions, outputOptions } from './rollup.config';

rollup(inputOptions)
.then(bundle => bundle.generate(outputOptions))
.then(({ output }) => {
  console.log(output);
});
