const dot = require('dot');

exports.default = function (source) {
  dot.templateSettings.selfcontained = true;

  return 'export default ' + dot.template(source);
};
