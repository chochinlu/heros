const { okJson, errorJson } = require('../Shared/util');
const container = require('../Shared/service');

module.exports = async function(context) {
  try {
    const { result: heros } = await container.items.readAll().toArray();
    return okJson({ heros });
  } catch (err) {
    return errorJson(err);
  }
};
