import { Response } from "express";
import { IPaginationData, MakeResponse, Paging } from "./interface";

export const PORT = process.env.PORT || 8000;
export enum Page {
  Limit = 10,
  Offset = 0,
  Sort = -1,
}

export const makeResponse = (
  status: number | boolean,
  message: string,
  data: Record<string, any>
): MakeResponse => {
  if (status) {
    return {
      status,
      message,
      data: data,
    };
  }
  return {
    status,
    message: message,
    data: data,
  };
};

export const sendSuccessResponse = (
  res: Response,
  message: string,
  data: Record<string, any>,
  statusCode: number = 200
) => {
  return res.status(statusCode).json({
    status: true,
    message,
    data: data,
  });
};

export const sendErrorResponse = (
  res: Response,
  message: string,
  data: Record<string, any>,
  statusCode: number = 400
): Response => {
  return res.status(statusCode).json({
    status: false,
    message,
    data: data,
  });
};

export const generatePaginationData = (
  totalItems: number,
  paging: Paging,
): IPaginationData => {
  const limit = paging.limit || Page.Limit;
  const offset = paging.offset || Page.Offset;
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    totalItems,
    totalPages,
    currentPage,
    pageSize: limit,
    hasNextPage: offset + limit < totalItems,
    hasPrevPage: offset > 0,
  };
};