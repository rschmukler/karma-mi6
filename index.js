var path = require('path');

var pattern = function(file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
    files.unshift(pattern(path.resolve(require.resolve('mi6'))));
};

framework.$inject = ['config.files'];
module.exports = {'framework:mi6': ['factory', framework]};
