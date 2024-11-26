type TagAttributes = {
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type DataItem = {
  id: number;
  attributes: TagAttributes;
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type Meta = {
  pagination: Pagination;
};

type BlogTagsResponseData = {
  data: DataItem[];
  meta: Meta;
};

export default BlogTagsResponseData;
