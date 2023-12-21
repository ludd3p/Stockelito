import { defineField } from "sanity";

const horoscope = {
  name: "horoscope",
  title: "Horoscope",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Horoscope title",
      description: "Enter the title for this weeks horoscope"
    }),
    defineField({
        name: "text",
        type: "string",
        title: "Horoscope text",
        description: "Text for this weeks horoscope"
      }),
      defineField({
        name: "image",
        type: "image",
        title: "Image",
        fields: [
            {
                name: "alt",
                title: "Alt",
                type: "string"
            }
        ]
      })
  ],
};

export default horoscope;