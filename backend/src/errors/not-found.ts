<<<<<<< HEAD
import { StatusCodes } from "http-status-codes";
import customAPIError from "./customError";

class notFound extends customAPIError{
=======
import { customError } from "./customError";
import { StatusCodes } from "http-status-codes";

export class notFound extends customError{
>>>>>>> 484a5a2 (worked on error handlers)
    statusCode: number;
    constructor(messege: string) {
        super(messege);
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}
<<<<<<< HEAD
export default notFound
=======
>>>>>>> 484a5a2 (worked on error handlers)
