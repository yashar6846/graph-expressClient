const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const GraphQLSchema = require("./schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: GraphQLSchema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
