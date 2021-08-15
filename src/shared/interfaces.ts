export default interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string,
    name: string
  };
  title: string;
  url: string;
  urlToImage: string;
}

export default interface GET200_Articles {
  articles: Article[];
  status: string;
  totalResults: number;
}

export default interface Response {
  status: string;
  totalResults: number;
}