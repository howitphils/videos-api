import { Request } from "express";

export type RequestWithParamsId = Request<{ id: string }>;

export type RequestWithBody<T> = Request<{}, {}, T>;

export type RequestWithParamsIdAndBody<T> = Request<{ id: string }, {}, T>;
