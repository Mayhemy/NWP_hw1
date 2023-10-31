import { Pipe, PipeTransform } from '@angular/core';
import {ApiRequest} from "../entity.model";

@Pipe({
  name: 'request'
})
export class RequestPipe implements PipeTransform {

  transform(myRequest: ApiRequest): string {
    const dateParts = myRequest.date.toLocaleString().split(' ');
    const datePart = dateParts[0].substring(0, dateParts[0].length - 1);
    const timePart = dateParts[1];
    const [month, day, year] = datePart.split('/');
    const [hours, minutes, seconds] = timePart.split(':');

    console.log(dateParts[0],dateParts[1]);


    const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;

    return `[${formattedDate}] ${myRequest.type} ${myRequest.body}`;
  }

}
