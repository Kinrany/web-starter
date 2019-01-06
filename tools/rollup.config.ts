import path from 'path';
import { OutputOptions, RollupOptions } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import vue from 'rollup-plugin-vue';
import replace from 'rollup-plugin-replace';

export const inputDir = path.resolve(__dirname, '../src');
export const outputDir = path.resolve(__dirname, '../dist');

export const inputOptions: RollupOptions = {
  input: path.resolve(inputDir, 'index.ts'),
  plugins: [
    vue(),
    typescript(),
    nodeResolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
};

export const outputOptions: OutputOptions = {
  format: 'iife',
  file: path.resolve(outputDir, 'index.js'),
};
