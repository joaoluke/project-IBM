module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "prettier",
        "prettier/react",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [
            "warn",
            { extensions: [".ts", ".tsx"] }
        ],
        "import/prefer-default-export": "off",
        "jsx-quotes": ["error", "prefer-single"]
    }
}
