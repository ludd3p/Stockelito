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
}