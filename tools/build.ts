import { copyFileSync } from 'fs';
import path from 'path';
import { rollup } from 'rollup';
import { inputOptions, outputOptions, inputDir, outputDir } from './rollup.config';

const inputHtml = path.resolve(inputDir, 'index.html');
const outputHtml = path.resolve(outputDir, 'index.html');

rollup(inputOptions)
.then(bundle => bundle.write(outputOptions))
.then(() => copyFileSync(inputHtml, outputHtml));
