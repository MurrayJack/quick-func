import { MdLocalMovies as icon } from "react-icons/md";

export default {
  name: "functions",
  title: "Functions",
  type: "document",
  icon,
  fields: [
    {
      name: "key",
      title: "Page Key (filename)",
      type: "string",
    },
    {
      name: "caption",
      title: "Page Caption",
      type: "string",
    },
  ],
};
