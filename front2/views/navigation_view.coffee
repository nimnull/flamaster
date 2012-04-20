define [
  'chaplin/view',
  'text!templates/navigation.hbs'
], (View, template) ->
  'use strict'

  class NavigationView extends View

    id: 'navigation'
    tagName: 'ul'
    className: "nav nav-pills"
    containerSelector: '#navigation-wrapper'
    autoRender: true
    @template = template

    initialize: ->
      super
      @subscribeEvent 'startupController', @render

      @modelBind 'change:routes', @render

      @modelBind 'all', (args...) ->
        console.log args