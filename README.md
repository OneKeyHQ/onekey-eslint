# onekey-eslint
OneKey Customize ESLint Rule

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@onekeyhq/eslint-config-onekey`:

```
$ npm install @onekeyhq/eslint-config-onekey --save-dev
```

## Usage

Add `@onekeyhq/onekey` to the extends section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
    "extends": [
        "@onekeyhq/onekey"
    ]
}
```