import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryformat'
})
export class CategoryformatPipe implements PipeTransform {

  transform(value: string) {
    if(!value){
      return null;
    }
    if(value.includes("-")){
      var strList = value.split("-");
      var output = "";
      var i = 0;
      for(i;i < strList.length; i++){
        
        strList[i] = strList[i].charAt(0).toUpperCase() + strList[i].slice(1);
        
        output += strList[i];
        if(i < strList.length-1){
          output += " ";
        }

      }
      
      return output;
   }
   else{
     return value.charAt(0).toUpperCase() + value.slice(1);
   }

  }

}
