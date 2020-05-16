import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

export class AppErrorHandler implements ErrorHandler{
    handleError(error : Error | HttpErrorResponse): void {
        let errorMessage : string;
        if (error instanceof HttpErrorResponse){
            // server error
            if (error.status === 404) {
                errorMessage = 'The target resouce is not found';
                
            }
            else if(error.status === 400){
                errorMessage = 'Bad request';
            }

            else if(error.status === 401) {
                errorMessage = 'Unauthorized';
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
