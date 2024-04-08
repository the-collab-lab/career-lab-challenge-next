/** @type {import("eslint").Linter.Config} */
module.exports = {
	env: {
		browser: true,
		node: true,
		'vitest-globals/env': true,
	},
	extends: [
		'plugin:jsx-a11y/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'prettier',
		'plugin:vitest-globals/recommended',
	],
	plugins: ['import'],
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'import/order': [
			'warn',
			{
				alphabetize: { order: 'asc' },
				groups: [
					'external',
					'builtin',
					'internal',
					'parent',
					'sibling',
					'index',
				],
			},
		],
		'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
		'react/jsx-sort-props': [
			1,
			{
				callbacksLast: true,
				reservedFirst: true,
			},
		],
		'react/prop-types': 'off',
	},
};
