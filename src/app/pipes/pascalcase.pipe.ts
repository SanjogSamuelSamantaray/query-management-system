import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascalcase'
})
export class PascalcasePipe implements PipeTransform {

  transform(value: string): string {
    if(value.includes("_"))
    {
      value=value.replace("_"," ");
    }
    return value;
  }

}
