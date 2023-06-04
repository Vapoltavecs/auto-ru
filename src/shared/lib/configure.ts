import path from "path";
import conf from "../../../tsconfig.json";

export const configureAliases = () => {
  const aliases = conf.compilerOptions.paths;

  const res: Record<string, string> = {};

  for (let [key, folderpath] of Object.entries(aliases)) {
    const name = key.slice(0, key.length - 2);
    const pathForViteConfig = folderpath[0].replace("*", "");
    res[name] = path.resolve("./src", pathForViteConfig);
  } 
  console.log(res)
  return res;
};
