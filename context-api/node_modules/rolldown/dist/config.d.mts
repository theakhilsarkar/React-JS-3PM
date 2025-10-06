import "./shared/binding-aYdpw2Yk.mjs";
import { ConfigExport, defineConfig } from "./shared/define-config-DMtLQsA0.mjs";

//#region src/utils/load-config.d.ts
declare function loadConfig(configPath: string): Promise<ConfigExport>;
//#endregion
//#region src/config.d.ts
declare const VERSION: string;
//#endregion
export { VERSION, defineConfig, loadConfig };