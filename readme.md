# heroes-serverless

Azure Function APIs for heros. (inspired by [John Papa](https://github.com/johnpapa/heroes-serverless))

## Settings

Default database and container names are set in `Shared/config.js`.

You also need to add the database end point and primary key information in the `local.setting.json`:

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "DB_ENDPOINT": "<YOUR_DB_URI>",
    "DB_KEY": "<YOUR_PRIMARY KEY>"
  }
}
```
