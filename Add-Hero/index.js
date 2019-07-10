const { resJson, okJson, errorJson } = require('../Shared/util');
const container = require('../Shared/service');

module.exports = async function(context) {
  try {
    const hero = context.req.body;
    hero.id = `Hero${context.req.body.name}`;
    const result = await container.items.create(hero);
    context.log({ result });
    return resJson(201)({ ok: true });
  } catch (error) {
    const { code = 500, body = {} } = error;
    return resJson(code)(body);
  }
};
