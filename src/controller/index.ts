import { NextFunction, Request, Response } from "express";
import { sendErrorResponse, sendSuccessResponse } from "../utils";
import {
  GetPropertyListingByIdService,
  GetPropertyListingsService,
} from "../service";

export async function HomeFn(req: Request, res: Response) {
  sendSuccessResponse(res, "Welcome to the base endpoint", {
    app: "Property Listing API",
  });
}

export async function GetPropertyListingById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    if (!id) {
      sendErrorResponse(res, "Id is required.", {}, 400);
    }
    const response = await GetPropertyListingByIdService(Number(id));
    if (response.status) {
      sendSuccessResponse(res, response.message, response.data, 200);
    } else {
      sendErrorResponse(res, response.message, {}, 400);
    }
  } catch (error: any) {
    sendErrorResponse(
      res,
      "Error occurred while processing your request.",
      { error },
      500
    );
  }
}

export async function GetPropertyListings(req: Request, res: Response) {
  try {
    const response = await GetPropertyListingsService(req.query);
    if (response.status) {
      sendSuccessResponse(res, response.message, response.data, 200);
    } else {
      sendErrorResponse(res, response.message, {}, 404);
    }
  } catch (error: any) {
    sendErrorResponse(
      res,
      "Error occurred while processing your request.",
      { error },
      500
    );
  }
}
