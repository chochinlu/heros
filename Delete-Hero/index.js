const { resJson } = require('../Shared/util');
const container = require('../Shared/service');

module.exports = async function(context, req) {
  try {
    const { id } = req.body;
    await container.item(id, { partitionKey: undefined }).delete();
    return resJson(200)({ ok: true });
  } catch (error) {
    // context.log(error);
    const { code = 500, body = {} } = error;

    return resJson(code)(body);
  }
};
