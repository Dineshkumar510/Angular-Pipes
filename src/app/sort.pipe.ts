import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:  false
})
export class SortPipe implements PipeTransform {

  transform(value: any, PropName: any) {
    return value.sort((el1, el2)=> {
      if(el1[PropName] > el2[PropName]){
        return 1;
      } else {
        return -1
      }
    })
  }

}
