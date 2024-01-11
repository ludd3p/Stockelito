import { PortableTextBlock } from "sanity";

export type NewsItem = {
    _id: string;
    _createdAt: Date;
    newsTitle: string;
    newsText: string;
}

export type Business = {
    _id: string;
    _createdAt: Date;
    businessTicker: string;
    businessName: string;
    businessText: string;
    slug: string;
    content: PortableTextBlock[]
}

export type Horoscope = {
    _id: string;
    title: string;
    text: string;
    image: string;
}