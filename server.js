const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const GraphQLSchema = require("./schema");

const app = express();

//Allow cross-origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: GraphQLSchema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
