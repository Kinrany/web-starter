declare module 'rollup-plugin-typescript' {
  import { PluginImpl } from 'rollup';
  import { CompilerOptions } from 'typescript';
  const typescript: PluginImpl<CompilerOptions>;
  export default typescript;
}
