import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'userfilter',
    pure: false
})
export class UserFilterPipe implements PipeTransform {
    transform(items: any[], callback: (item: any) => boolean): any {
        if (!items || !callback) {
            return items;
        }
        return items.filter(item => callback(item));
    }
}