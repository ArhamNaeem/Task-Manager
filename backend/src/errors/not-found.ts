import { StatusCodes } from "http-status-codes";
import customAPIError from "./customError";

class notFound extends customAPIError{
    statusCode: number;
    constructor(messege: string) {
        super(messege);
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}
export default notFound