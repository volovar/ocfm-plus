import copy from "rollup-plugin-copy";
import typescript from "@rollup/plugin-typescript";

const { BROWSER } = process.env;
const outputDir = `dist/${BROWSER}`;

export default [
  {
    input: ["src/index.ts", "src/background.ts"],
    output: {
      dir: `${outputDir}`,
      entryFileNames: "[name].js",
    },
    plugins: [
      typescript(),
      copy({
        targets: [
          { src: "assets/img/**/*", dest: `${outputDir}/img` },
          { src: `config/${BROWSER}/manifest.json`, dest: outputDir },
          { src: "src/css/**/*", dest: outputDir },
        ],
      }),
    ],
  },
];
