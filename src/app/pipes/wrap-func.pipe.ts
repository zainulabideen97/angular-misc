import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'wrapFn',
    standalone: true
})
export class WrapFnPipe implements PipeTransform
{
    transform<T>(value: T, func: (...x: any[]) => any, ...args: any[]): ReturnType<typeof func>
    {
        return func(value, ...args);
    }
}
