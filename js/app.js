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
  }.property(),

  trackLists: function() {
    var tracks = this.get('model').get('tracks');
    var modulo = tracks.get('length') % 3;
    var divider = (tracks.get('length') - modulo) / 3 + 1

    return [ tracks.slice(0, divider), tracks.slice(divider, divider * 2), tracks.slice(divider * 2, divider * 3) ];
  }.property()
});

App.Store = DS.Store.extend({
  adapter: 'DS.FixtureAdapter'
});

App.Album = DS.Model.extend({
  title: DS.attr('string'),
  tracks: DS.hasMany('App.Track')
});

App.Track = DS.Model.extend({
  title: DS.attr('string'),
  composer: DS.attr('string')
});

App.Album.FIXTURES = [
  {
    id: 1,
    title: 'Classic 1',
    tracks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  },
  {
    id: 2,
    title: 'Classic 2',
    tracks: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
  },
  {
    id: 3,
    title: 'Classic Special',
    tracks: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]

  },
  { id: 4,
    title: 'Best Classic'
  },
  {
    id: 5,
    title: 'Classic 3'
  }
];

App.Track.FIXTURES = [
  {
    id: 1,
    title: 'Light Cavalry Achrimides',
    composer: 'F. Von Suppé'
  },
  {
    id: 2,
    title: 'Tritsch Tratsch Phaeromidos',
    composer: 'J. Strauss-Son'
  },
  {
    id: 3,
    title: 'La Gazza Ladra Voladiche',
    composer: 'G. Rossini'
  },
  {
    id: 4,
    title: 'Menuet for Stringquintet Tsjardjeb',
    composer: 'L. Boccherini'
  },
  {
    id: 5,
    title: 'Serenade for Strings Paramankos',
    composer: 'P.I. Tchaikovsky'
  },
  {
    id: 6,
    title: 'Out of Africa Carafulia',
    composer: 'W.A. Mozart'
  },
  {
    id: 7,
    title: 'Symphony Nr 40 Xophoratis',
    composer: 'W.A. Mozart'
  },
  {
    id: 8,
    title: 'La Primavera Soliveyra',
    composer: 'A. Vivaldi'
  },
  {
    id: 9,
    title: 'Romanza Zeyvolo',
    composer: 'W.A. Mozart'
  },
  {
    id: 10,
    title: 'Ode to Joy Imar It Heri',
    composer: 'L. Von Beethoven'
  },
  {
    id: 11,
    title: 'Eine Kleine Nachtmusik Djagobe',
    composer: 'W.A. Mozart'
  },
  {
    id: 12,
    title: 'Elvira Madigan Djazome',
    composer: 'W.A. Mozart'
  },
  {
    id: 13,
    title: 'The Marriage of Figaro Feztawi',
    composer: 'W.A. Mozart'
  },
  {
    id: 14,
    title: 'Habanera Frachotexar',
    composer: 'G. Bizet'
  },
  {
    id: 15,
    title: 'Walz of the Flowers Quosibatu',
    composer: 'P.I. Tchaikovsky'
  },
  {
    id: 16,
    title: 'Ruslan and Ludmilla Fabileju',
    composer: 'M.I. Glinka'
  },
  {
    id: 17,
    title: 'Il Trovatore Quodis Es Vitar',
    composer: 'G. Verdi'
  },
  {
    id: 21,
    title: 'Toreador Atjenki',
    composer: 'G. Bizet'
  },
  {
    id: 22,
    title: 'Alla Turca Ahriahne',
    composer: 'W.A. Mozart'
  },
  {
    id: 23,
    title: 'Morning Mood Trevobima',
    composer: 'W.A. Mozart'
  },
  {
    id: 24,
    title: 'Orpheus In The Underworld Nagodus',
    composer: 'P. Sterman'
  },
  {
    id: 25,
    title: 'Amazing Grace Siralynth',
    composer: 'E. Abrath'
  },
  {
    id: 26,
    title: 'Hungarian Dance Netonkla',
    composer: 'J. Brahms'
  },
  {
    id: 27,
    title: 'Barcarolle Ourybova',
    composer: 'J.Offenbach'
  },
  {
    id: 28,
    title: 'The Emperor Muvagora',
    composer: 'J. Strauss - Son'
  },
  {
    id: 29,
    title: 'Dance Of The Hours Souraktoff',
    composer: 'A. Ponchielli'
  },
  {
    id: 30,
    title: 'Air Dorilun',
    composer: 'J.S. Bach'
  },
  {
    id: 31,
    title: 'Aïda Solaekride',
    composer: 'G. Verdi'
  },
  {
    id: 32,
    title: 'Capriccio Italien Fagrozzi',
    composer: 'P.I. Tchaikovsky'
  },
  {
    id: 33,
    title: 'Going Home Midecras',
    composer: 'A.L. Dvorak',
  },
  {
    id: 34,
    title: 'Serenade Lakisong',
    composer: 'J. Haydn'
  },
  {
    id: 35,
    title: 'Swan Lake Ositares',
    composer: 'P.I. Tchaikovsky'
  },
  {
    id: 36,
    title: 'Harp Concerto Endasori',
    composer: 'G.F. Händel'
  },
  {
    id: 37,
    title: 'Italian Symphony Krilasko',
    composer: 'F. Mendelssohn, Bartholdy'
  },
{
  id: 41,
  title: 'Wings Of Summer',
  composer: 'P. Sterman - E. Abrath'
},
{
  id: 42,
  title: 'Tritsch Tratsch Phaeromidos',
  composer: 'J. Strauss - Son'
},
{
  id: 43,
  title: 'Out Of Africa Carafulia',
  composer: 'W.A. Mozart'
},
{
  id: 44,
  title: 'Alla Turca Ahriahne',
  composer: 'W.A. Mozart'
},
{
  id: 45,
  title: 'Light Cavalry Achrimides',
  composer: 'F. Von Suppé'
},
{
  id: 46,
  title: 'Barcarolle Ourybova',
  composer: 'J.Offenbach'
},
{
  id: 47,
  title: 'Toreador Atjenki',
  composer: 'G. Bizet'
},
{
  id: 48,
  title: 'Symphony N° 40 Xophoratis',
  composer: 'W.A. Mozart'
},
{
  id: 49,
  title: 'La Gazza Ladra Voladiche',
  composer: 'G. Rossini'
},
{
  id: 50,
  title: 'Aïda Solaekride',
  composer: 'G. Verdi'
},
{
  id: 51,
  title: 'La Primavera Soliveyra',
  composer: 'A. Vivaldi'
},
{
  id: 52,
  title: 'Morning Mood Trevobima',
  composer: 'E.H. Grieg'
},
{
  id: 53,
  title: 'The Emperor Muvagora',
  composer: 'J. Strauss - Son'
},
{
  id: 54,
  title: 'Ode To Joy Imar It Heri',
  composer: 'L. von Beethoven'
},
{
  id: 55,
  title: 'Romanza Zeyvolo',
  composer: 'W.A. Mozart'
},
{
  id: 56,
  title: 'Orpheus In The Underworld Nagodus',
  composer: 'J. Offenbach'
},
{
  id: 57,
  title: 'Dance Of The Hours Souraktoff',
  composer: 'P. Sterman'
},
{
  id: 58,
  title: 'Walz Of The Flowers Quosibatu',
  composer: 'P.I. Tchaikovsky'
},
{
  id: 59,
  title: 'Eine Kleine Nachtmusik Djagobe',
  composer: 'W.A. Mozart'
},
{
  id: 60,
  title: 'Hungarian Dance Netonkla',
  composer: 'J. brahms'
},
{
  id: 61,
  title: 'Halleluyah',
  composer: 'Adya - Classic Pop Mix'
}
];
