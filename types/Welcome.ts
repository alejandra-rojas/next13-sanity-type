export type Welcome = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  featured: {
    _ref: string;
    _type: "reference";
    name: string;
    slug: {
      current: string;
    };
    image: {
      asset: {
        url: string; // Add the url property to access the URL of the image in the referenced project
      };
    };
  };
  projects: string;
};
