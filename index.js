module.exports = {
    extends: [
        'alloy',
        'alloy/react',
        'alloy/typescript',
        "plugin:prettier/recommended"
    ],
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    rules: {
        "react/react-in-jsx-scope": 0,
        "react/display-name": 1,
        "prettier/prettier": 2,//表示被prettier标记的地方抛出错误
    },
    plugins: ["prettier"],
}