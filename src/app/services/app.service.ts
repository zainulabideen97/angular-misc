// Always make Angular Service Singleton


import {inject, InjectOptions, Type} from '@angular/core';

export class AppService
{
    options: InjectOptions = {
        skipSelf: true,
        optional: true
    };

    constructor(type: Type<any>)
    {
        console.log('Type: ', type.name);

        const parent = inject(type, this.options);
        if (parent)
        {
            throw Error(`[${type.name}]: Can not create more than one instance`);
        }
    }
}