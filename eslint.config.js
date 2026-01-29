// https://docs.expo.dev/guides/using-eslint/

export default {
    extends: ["expo", "prettier"],
    plugins: ["prettier"],
    // disabled prettier warnings because they're making me go crazy
    ignorePatterns: ["fknode.yaml", "**/assets/*"],
};
