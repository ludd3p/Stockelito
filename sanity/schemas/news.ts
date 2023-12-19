import { defineField } from "sanity";

const news = {
  name: "news",
  title: "News",
  type: "document",
  fields: [
    defineField({
        name: "newsTitle",
        type: "string",
        title: "News title",
        description: "Title for your news post"
      }),
      defineField({
        name: "newsText",
        type: "string",
        title: "News text",
        description: "Content of news article"
      }),
      defineField({
        name: "newsImage",
        type: "image",
        title: "News image",
      })
  ],
};

export default news;