import { PortableTextBlock } from "sanity";

export type NewsItem = {
    _id: string;
    _createdAt: Date;
    newsTitle: string;
    isFulfilled: boolean;
    newsText: string;
    slug: string;
    content: PortableTextBlock[];
}

export type Business = {
    _id: string;
    _createdAt: Date;
    businessTicker: string;
    businessName: string;
    businessText: string;
    businessLogo: string,
    slug: string;
    content: PortableTextBlock[];
    diUrl: string;
}

export type Horoscope = {
    _id: string;
    title: string;
    text: string;
    image: string;
}