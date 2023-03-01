
import { StatusCodes } from "http-status-codes";
import customError from "./customError";

class badRequest extends customError {
    statusCode: number
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}
export default badRequest