// Generated by CoffeeScript 1.3.1
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

define(['chaplin/mediator', 'chaplin/lib/route'], function(mediator, Route) {
  'use strict';

  var Router;
  return Router = (function() {

    Router.name = 'Router';

    function Router() {
      this.route = __bind(this.route, this);
      this.registerRoutes();
      this.startHistory();
    }

    Router.prototype.registerRoutes = function() {
      this.match('', 'page#index');
      this.match('signup', 'page#signup');
      return this.match('dashboard', 'page#dashboard');
    };

    Router.prototype.startHistory = function() {
      return Backbone.history.start({
        pushState: true
      });
    };

    Router.prototype.match = function(pattern, target, options) {
      var route;
      if (options == null) {
        options = {};
      }
      Backbone.history || (Backbone.history = new Backbone.History);
      route = new Route(pattern, target, options);
      return Backbone.history.route(route, route.handler);
    };

    Router.prototype.route = function(path) {
      var handler, _i, _len, _ref;
      console.debug('Router#route', path);
      path = path.replace(/^(\/#|\/)/, '');
      _ref = Backbone.history.handlers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        handler = _ref[_i];
        if (handler.route.test(path)) {
          handler.callback(path, {
            changeURL: true
          });
          return true;
        }
      }
      return false;
    };

    Router.prototype.changeURL = function(url) {
      return Backbone.history.navigate(url, {
        trigger: false
      });
    };

    return Router;

  })();
});
