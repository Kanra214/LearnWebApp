import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abstract'
})
export class AbstractPipe implements PipeTransform {

  transform(value: string, limit?: number): any {
    if(!value){
      return null;
    }
    let innerLimit;
    if(!limit){
      innerLimit = 50;
    }
    else{
      innerLimit = limit;
    }

    if(value.length < innerLimit){
      return value;
    }
    else{
      return value.slice(0, innerLimit) + "...";
    }
    
  }

}
