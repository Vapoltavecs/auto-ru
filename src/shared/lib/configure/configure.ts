import * as path from "path"

export default (config: Record<string, string[]>) => {
  const aliases = config;

  const res: Record<string, string> = {};

  for (let [key, folderpath] of Object.entries(aliases)) {
    const name = key.slice(0, key.length - 2);
    const pathForViteConfig = folderpath.map(path => path.replace("*", ""));
    res[name] = path.resolve("./src", ...pathForViteConfig);
  }
  return res;
};

export const configWithJest = (config: Record<string, string[]>):Record<string, string> => {
  const aliases = config;

  const res: Record<string, string> = {};

  for (let [key, folderpath] of Object.entries(aliases)) {
    const name = "^" + key.slice(0, key.length - 1) + "(.*)$";
    const pathForJestConfig = folderpath.map(path => path.replace("*", ""));
    res[name] = path.join("<rootDir>", "src", ...pathForJestConfig, "$1")
  }
  return res;
}
