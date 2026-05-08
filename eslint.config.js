// https://docs.expo.dev/guides/using-eslint/
import { defineConfig, globalIgnores } from "eslint/config";
import expoConfig from "eslint-config-expo/flat.js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default defineConfig([
    globalIgnores(["dist/*", "/.expo", "node_modules"]),
    expoConfig,
    eslintPluginPrettierRecommended,
    {
        files: ["babel.config.js"],
        languageOptions: {
            globals: globals.node,
        },
    },
]);
