module.exports = {
  '*.{js,css,json,md}': ["prettier --write 'src/**/*.js'", 'git add'],
  // '*.js': ['eslint --fix src', 'git add'],
}
