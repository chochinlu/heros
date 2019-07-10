const config = {};

config.endpoint = process.env['DB_ENDPOINT'];

config.primaryKey = process.env['DB_KEY'];

config.database = {
  id: 'FamilyDatabase'
};

config.container = {
  id: 'HeroContainer'
};

config.items = {
  SpiderMan: {
    id: 'spiderman',
    name: 'Peter Benjamin Parker',
    description:
      'Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books.'
  }
};

module.exports = config;
