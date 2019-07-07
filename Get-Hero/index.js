module.exports = async function(context, config) {
  context.log('Get heros');

  context.res.json({ hello: 'world' });
};
