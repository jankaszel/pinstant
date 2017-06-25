# pinboard-pwa 🗞

[PWA](https://developers.google.com/web/progressive-web-apps/) that consumes a [Pinboard](https://pinboard.in/) GraphQL API to serve your bookmarks fast and on any device.

### Setup

Get all dependencies via `$ npm install`. Make sure to get [Prettier](https://github.com/prettier/prettier) via `$ npm i -g prettier`.

* `$ npm run dev` to launch [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server).
* `$ npm run build` to build all assets via [Webpack](https://webpack.js.org/).

#### GraphQL Endpoint

In order to make the application work, you'll need a GraphQL API endpoint. I drafted one using [Apollo Launchpad](https://launchpad.graphql.com/): https://launchpad.graphql.com/1wq50q7j9. Simply create a file named `.env` in this directory, and point the `GRAPHQL_ENDPOINT` variable to this url. Feel free to fork this pad.
