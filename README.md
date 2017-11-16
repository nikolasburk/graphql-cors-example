# graphql-cors-example

This repository demonstrates how to configure [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) for an express.js-based GraphQL server. (This example uses `apollo-server`, but usage with `express-graphql` is equivalent.)

Read the full article [here](https://medium.com/@graphcool/cors-for-graphql-express-apollo-server-1ef999bfb38d).

## Get started

**Clone the repository:**

```sh
git clone https://github.com/nikolasburk/graphql-cors-example.git
```

**Start the server:**

```sh
cd server
yarn install
yarn start
```

**Start the frontend:**

```sh
cd ../frontend
yarn install
yarn start
```

**Test the app:**

To test the app, simply open [http://localhost:3000](http://localhost:3000) in your browser. Note that you can provoke a CORS error by commenting out [`app.use(cors())`](server/index.js#L23) as described in the [article](https://medium.com/@graphcool/cors-for-graphql-express-apollo-server-1ef999bfb38d).