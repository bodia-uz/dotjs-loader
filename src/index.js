const dot = require('dot');

exports.default = function (source) {
  dot.templateSettings.varname = 'props';
  dot.templateSettings.interpolate = /\$\{([\s\S]+?)\}/g;
  dot.templateSettings.selfcontained = true;

  return 'export default ' + dot.template(source);
};
