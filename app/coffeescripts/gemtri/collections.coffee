#Collections

class Gemtris extends Backbone.Collection
   model: app.Gemtri
   url: '/api/gemtris'
   duration: ->

@app = window.app ? {}
@app.Gemtris = new Gemtris
