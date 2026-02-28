// https://docs.expo.dev/guides/using-eslint/
import { defineConfig, globalIgnores } from "eslint/config";
import expoConfig from "eslint-config-expo/flat";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
    globalIgnores(["dist/*"]),
    expoConfig,
    eslintPluginPrettierRecommended,
    {
        files: ["babel.config.js"],
        languageOptions: {
            globals: globals.node,
        },
    },
]);
