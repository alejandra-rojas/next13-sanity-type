export type Welcome = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  featured: {
    _ref: string;
    _type: "reference";
    name: string; // Add the name property to access the name of the referenced project
    image: {
      asset: {
        url: string; // Add the url property to access the URL of the image in the referenced project
      };
    };
  };
  projects: string;
};
