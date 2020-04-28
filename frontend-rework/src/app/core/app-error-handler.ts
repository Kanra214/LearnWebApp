import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

export class AppErrorHandler implements ErrorHandler{
    handleError(error : Error | HttpErrorResponse): void {
        let errorMessage : string;
        if (error instanceof HttpErrorResponse){
            // server error
            if (error.status === 400) {
                errorMessage = 'The target resouce is not found';
                
            }

        }
        else {
            //client error
            errorMessage = 'An unexpected error occured';
        }

        alert(errorMessage);
        console.log(error);
    }
}
