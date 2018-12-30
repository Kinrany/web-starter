import path from 'path';
import { OutputOptions, RollupOptions } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import htmlEntry from 'rollup-plugin-html-entry';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import vue from 'rollup-plugin-vue';

export const inputOptions: RollupOptions = {
  input: [
    path.normalize(__dirname + '../src/index.html')
  ],
  plugins: [
    htmlEntry(),
    vue(),
    typescript(),
    nodeResolve(),
    commonjs(),
  ],
};

export const outputOptions: OutputOptions = {
};
