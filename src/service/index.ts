import { generatePaginationData, makeResponse, Page } from "../utils";
import { mockData } from "../utils/data";
import { IProperty, Paging } from "../utils/interface";

export async function GetPropertyListingsService(payload?: Paging) {
  const limit = payload?.limit || Page.Limit;
  const offset = payload?.offset || Page.Offset;

  let data: IProperty[] = mockData.slice(offset, offset + limit);

  const pagination = generatePaginationData(data.length, { limit, offset });

  return makeResponse(true, "Property Listings retrieved successfully", {
    pagination,
    list: data,
  });
}

export async function GetPropertyListingByIdService(id: number) {
  let property = mockData.find((data) => data.id === id);
  if (!property) {
    return makeResponse(false, "Property not found!", {});
  }
  return makeResponse(
    true,
    "Property Listings retrieved successfully",
    property
  );
}
