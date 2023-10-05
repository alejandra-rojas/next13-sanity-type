const welcome = {
  name: "welcome",
  title: "Welcome",
  type: "document",
  fields: [
    { name: "title", title: "Section title", type: "string" },
    { name: "subtitle", title: "Section subtitle", type: "string" },
    {
      name: "featured_project",
      title: "Featured project",
      type: "reference",
      to: [{ type: "project" }],
    },
    { name: "projects", title: "Projects header", type: "string" },
  ],
};

export default welcome;
