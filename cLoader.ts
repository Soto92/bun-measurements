import { Loader } from "hyperimport";
import { basename, parse } from "path";

export default class extends Loader {
    constructor() {
        super("C Loader",
            {
                extension: "c",
                buildCommand: (importPath, outDir) => [
                    "gcc",
                    "-shared",
                    "-fpic",
                    importPath,
                    "-o",
                    `${outDir}/lib${parse(importPath).name}.so`
                ],
                outDir: importPath => `build/${basename(importPath)}`
            }
        );
    }
};