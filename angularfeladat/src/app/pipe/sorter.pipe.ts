import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[] | null, key: string ): any[] | null{
    
    if (!Array.isArray(value) || !key ){
      return value;
    }
    
      return value.sort(function(a:any,b:any):any{        
           return b[key]-a[key];       
    }
      )
    }
  }