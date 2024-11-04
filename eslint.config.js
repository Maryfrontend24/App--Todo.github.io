import js from '@eslint/js'
import globals from 'globals'
import eslintReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginHtml from 'eslint-plugin-html'
import eslintConfigReactApp from 'eslint-config-react-app'
import eslintAllyPlugin from 'eslint-plugin-jsx-a11y'
import eslintImportPlugin from 'eslint-plugin-import'

export default [
  { ignores: ['node_modules', 'coverage', 'eslint.config.js'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3.1' } },
    plugins: {
      "react-hooks": reactHooks,
      "react":eslintReact,
      "react-refresh": reactRefresh,
      "prettier": prettierPlugin,
      "import":eslintImportPlugin,
      "eslint-plugin-html": eslintPluginHtml,
      "jsx-a11y":eslintAllyPlugin,
      "eslint-config-react-app":eslintConfigReactApp,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      ...reactHooks.configs.recommended.rules,


        'linebreak-style': 'off', // Неправильно работает в Windows.

        'arrow-parens': 'off', // Несовместимо с prettier
        'no-console': 'error', // airbnb использует предупреждение
        'no-alert': 'error', // airbnb использует предупреждение
        'react/require-default-props': 'off', // airbnb использует уведомление об ошибке
        'react/forbid-prop-types': 'off', // airbnb использует уведомление об ошибке
        'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb использует .jsx

        'prefer-destructuring': 'off',

        'react/no-find-dom-node': 'off', // Я этого не знаю
        'react/no-did-mount-set-state': 'off',
        'react/no-unused-prop-types': 'off', // Это всё ещё работает нестабильно
        'react/jsx-one-expression-per-line': 'off',

        "jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }],
        "jsx-a11y/label-has-for": [2, {
          "required": {
            "every": ["id"]
          }
        }],

        'prettier/prettier': ['error'],

      "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"],
            "moduleDirectory": ["node_modules", "src/"],
          },
        },
      },
      },

  },
]
