(function() {
  var Gemtri, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Gemtri = (function(_super) {

    __extends(Gemtri, _super);

    function Gemtri() {
      Gemtri.__super__.constructor.apply(this, arguments);
    }

    Gemtri.prototype["default"] = {
      tag: ''
    };

    Gemtri.prototype.initialize = function(attributes, options) {};

    return Gemtri;

  })(Backbone.Model);

  this.app = (_ref = window.app) != null ? _ref : {};

  this.app.Gemtri = Gemtri;

}).call(this);
