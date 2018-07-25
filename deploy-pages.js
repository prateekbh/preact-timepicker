const ghpages = require('gh-pages');

ghpages.publish('demo/build', {
  message: 'Deploying gh-pages'
});