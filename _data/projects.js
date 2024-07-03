// import the client we just created
const client = require("../scripts/contentful").contentfulClient;

module.exports = async () => {
  // create a request for all entries that match our project type.
  // we can use the `order` property to sort them reverse-chronologically by their published date.
  const projects = await client.getEntries({
    content_type: "project",
  });
  return projects.items;
};
