module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'alloy',
        'alloy/react',
        'alloy/typescript',
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "plugin:@onekeyhq/literal-blacklist/recommended",
    ],
    plugins: ["react-hooks", "jsx-a11y", "prettier", "@onekeyhq/literal-blacklist"],
    // 0：关闭该条规则；1：违反这条规则，会抛出一个警告；2：违反这条规则，会抛出一个错误。
    rules: {
        "react/react-in-jsx-scope": 0,
        "react/jsx-wrap-multilines": 0,
        "react/no-unstable-nested-components": 0,
        "react/display-name": 1,
        "prettier/prettier": 2,//表示被prettier标记的地方抛出错误
        "react-hooks/rules-of-hooks": 2,
        "react-hooks/exhaustive-deps": 1,
        "max-params": 0,
        "camelcase": 2,
        "@typescript-eslint/explicit-member-accessibility": 0,
    },
    settings: {
        react: {
            pragma: "React", // Pragma to use, default to "React"
            fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
            version: "detect", // React version. "detect" automatically picks the version you have installed.
        },
    },
}