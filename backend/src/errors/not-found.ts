import { customError } from "./customError";
import { StatusCodes } from "http-status-codes";

export class notFound extends customError{
    statusCode: number;
    constructor(messege: string) {
        super(messege);
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}
