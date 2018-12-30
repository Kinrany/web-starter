import path from 'path';
import { RollupOptions, OutputOptions } from 'rollup';
import htmlEntry from 'rollup-plugin-html-entry';
import typescript from 'rollup-plugin-typescript';

export const inputOptions: RollupOptions = {
  input: [
    path.normalize(__dirname + '../src/index.html')
  ],
  plugins: [
    htmlEntry(),
    typescript(),
  ],
};

export const outputOptions: OutputOptions = {
};
