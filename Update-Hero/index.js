const { resJson } = require('../Shared/util');
const container = require('../Shared/service');

module.exports = async function(context, req) {
  try {
    const hero = context.req.body;
    const result = await container.items.upsert(hero);
    context.log({ result });
    return resJson(200)({ ok: true });
  } catch (error) {
    const { code = 500, body = {} } = error;
    return resJson(code)(body);
  }
};
