// Generated by CoffeeScript 1.3.1
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['chaplin/mediator', 'chaplin/model'], function(mediator, Model) {
  'use strict';

  var Navigation;
  return Navigation = (function(_super) {

    __extends(Navigation, _super);

    Navigation.name = 'Navigation';

    function Navigation() {
      return Navigation.__super__.constructor.apply(this, arguments);
    }

    Navigation.prototype.defaults = {
      routes: [
        {
          id: 'index',
          path: '',
          title: 'Index'
        }, {
          id: 'signin',
          path: 'signin',
          title: 'Sign In'
        }, {
          id: 'signup',
          path: 'signup',
          title: 'Sign Up'
        }, {
          id: 'signout',
          path: 'signout',
          title: 'Sign Out'
        }
      ]
    };

    return Navigation;

  })(Model);
});
