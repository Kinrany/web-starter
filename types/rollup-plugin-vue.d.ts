declare module 'rollup-plugin-vue' {
  import { PluginImpl } from 'rollup';
  const vue: PluginImpl<{}>;
  export default vue;
}
