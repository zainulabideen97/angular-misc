import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WrapFnPipe} from 'src/app/pipes';

@Component({
    selector: 'wrap-func-example',
    template: `<div>{{title | wrapFn: doI}}</div>`,
    standalone: true,
    imports: [WrapFnPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapFnExample 
{
    title = 'This will change soon...';

    doI(title: string)
    {
        return `${title} changed!!!`;
    }
}