# cs-2022-todo-class

NODE (js but for the backend)
NPM (node package manager)
NVM (node version manager - optional but nice)

# Optional Stuff

1. Put the rest of the config stuff into flags and/or env vars
1. Caching
   - Memory
1. Websockets
1. Db Backup
   - Just Log it Out
   - File
1. Db restore
   - File
1. Metrics
   - Logs
1. Tags
   - Implement all the crud methods
1. Mongoose validation
1. Background process like "Delete “old” todo’s"
1. Split up files
1. Use async/await
1. Link Frontend Project to This Backend
1. Serve the UI from this code
1. Middleware
   - logging (log when each request happen)
   - Dos protection (rate limit base on ip or other identification)
1. Docker

# Docker Command

```shell
docker run -d --name cs-todo-2022-mongo -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=password -e MONGO_INITDB_DATABASE=cs-todo-2022 -p 27017:27017 -v $PWD/mongo-entrypoint/:/docker-entrypoint-initdb.d/ mongo
```
