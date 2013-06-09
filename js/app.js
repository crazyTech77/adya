App = Ember.Application.create();

App.Router.map(function() {
  this.resource('discography');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.DiscographyRoute = Ember.Route.extend({
  model: function() {
    return App.Album.find();
  }
});

App.AlbumController = Ember.ObjectController.extend({
  coverImage: function() {
    return 'images/album-' + this.get('model').get('title').dasherize() + '.png';
  }.property()
});

App.Store = DS.Store.extend({
  adapter: 'DS.FixtureAdapter'
});

App.Album = DS.Model.extend({
  title: DS.attr('string')
});

App.Album.FIXTURES = [
  {
    id: 1,
    title: 'Classic 1'
  },
  {
    id: 2,
    title: 'Classic 2'
  },
  {
    id: 3,
    title: 'Classic Special'
  },
  { id: 4,
    title: 'Best Classic'
  },
  {
    id: 5,
    title: 'Classic 3'
  }
];
