import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import pluginReactnative from "eslint-plugin-react-native";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
  {
    languageOptions: { globals: globals.browser },
    files: [".", "*.js", "*.jsx"],
    ignores: [
      ".expo",
      ".expo/**/**/*.*", 
      "node_modules",
      "babel.config.js",
      "*.json",
      "*.lock",
      ".git"
    ],
    plugins: {
      "react-native": pluginReactnative
    },
    rules: {
      quotes: [2, "double", { ignoreEscape: true }]
    }
  },
  ...compat.extends("airbnb"),
];
