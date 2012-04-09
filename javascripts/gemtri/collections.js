(function() {
  var Gemtris, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Gemtris = (function(_super) {

    __extends(Gemtris, _super);

    function Gemtris() {
      Gemtris.__super__.constructor.apply(this, arguments);
    }

    Gemtris.prototype.model = app.Gemtri;

    Gemtris.prototype.url = '/api/gemtris';

    Gemtris.prototype.duration = function() {};

    return Gemtris;

  })(Backbone.Collection);

  this.app = (_ref = window.app) != null ? _ref : {};

  this.app.Gemtris = new Gemtris;

}).call(this);
