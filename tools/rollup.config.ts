import path from 'path';
import { RollupOptions, OutputOptions } from 'rollup';

export const inputOptions: RollupOptions = {
  input: [
    path.normalize(__dirname + '../src/index.html')
  ],
};

export const outputOptions: OutputOptions = {
};
