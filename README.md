# ReqCatch

Basic Node.JS devtool app allowing to catch `POST` requests with JSON body. After that we can make a `GET` request to get 
the latest requests back (reversed). Sending `DELETE` clears the history.

Assumptions:
 - All caught requests are stored in memory.
 - No UI.
 - No security.

Running the server: `npm start`

Running the dev mode (powered by `nodemon`): `npm dev`

Supported environment variables:
 - `PORT` to set HTTP port to listen to (default is `3000`)
 - `MAX_REQUESTS_STORED` to set maximum number of requests to be stored in memory. The default is `100`.

Demo instance running on Heroku: https://reqcatch.herokuapp.com/
