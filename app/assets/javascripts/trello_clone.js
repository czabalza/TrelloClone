window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.$rootEl = $('body').find("#main");
    new TrelloClone.Routers.Router({$rootEl: this.$rootEl});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
