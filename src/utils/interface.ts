export interface MakeResponse {
  status: number | boolean;
  message: string;
  data: Record<string, any>;
}

export interface Paging {
  limit?: number;
  offset?: number;
  sort?: string;
}

export interface IPaginationData {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface IProperty {
  id:           number;
  name:         string;
  address:      string;
  price:        string;
  propertyType: string;
  imageUrl:     string;
}
