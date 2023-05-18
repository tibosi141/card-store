module.exports = {
  extends: '@mistjs/eslint-config-vue',
  rules: {
    'no-console': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 2,
    }],
    'vue/block-tag-newline': ['error', {
      singleline: 'always',
      multiline: 'always',
      maxEmptyLines: 0,
      blocks: {
        'script': {
          singleline: 'always',
          multiline: 'always',
          maxEmptyLines: 0,
        },
        'template': {
          singleline: 'always',
          multiline: 'always',
          maxEmptyLines: 0,
        },
        'my-block': {
          singleline: 'always',
          multiline: 'always',
          maxEmptyLines: 0,
        },
      },
    }],
  },
}
