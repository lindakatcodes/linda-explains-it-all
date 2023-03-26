import * as contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

// Contentful Model Types

export interface TypePostFields {
  title: contentful.EntryFields.Symbol;
  slug?: contentful.EntryFields.Symbol;
  topics?: contentful.Entry<TypeTopicFields>[];
  body: contentful.EntryFields.RichText;
  bodyMarkdown: contentful.EntryFields.Text;
}

export type TypePost = contentful.Entry<TypePostFields>;

export interface TypeTopicFields {
  name?: contentful.EntryFields.Symbol;
}

export type TypeTopic = contentful.Entry<TypeTopicFields>;
