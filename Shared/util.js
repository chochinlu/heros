const resJson = (status = 200) => body => ({
  status,
  headers: {
    'Content-Type': 'application/json'
  },
  body
});

const okJson = body => resJson()(body);

const errorJson = err => resJson(500)(err);

module.exports = {
  resJson,
  okJson,
  errorJson
};
