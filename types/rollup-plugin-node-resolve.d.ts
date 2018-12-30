declare module 'rollup-plugin-node-resolve' {
  import { PluginImpl } from 'rollup';
  const nodeResolve: PluginImpl<{}>;
  export default nodeResolve;
}
