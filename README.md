# onekey-eslint
OneKey Customize ESLint Rule

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@onekeyfe/eslint-config-onekey`:

```
$ npm install @onekeyfe/eslint-config-onekey --save-dev
```

## Usage

Add `@onekeyfe/onekey` to the extends section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
    "extends": [
        "@onekeyfe/onekey"
    ]
}
```