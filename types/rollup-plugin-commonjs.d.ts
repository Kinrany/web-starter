declare module 'rollup-plugin-commonjs' {
  import { PluginImpl } from 'rollup';
  const commonjs: PluginImpl<{}>;
  export default commonjs;
}
