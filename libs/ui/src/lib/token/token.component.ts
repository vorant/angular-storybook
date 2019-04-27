import {
    Component,
    Input,
    InjectionToken,
    Inject,
    Optional
} from '@angular/core';

@Component({
    selector: 'myworkspace-token',
    templateUrl: './token.component.html',
    styleUrls: ['./token.component.css']
})
export class TokenComponent {
    items = [];
    @Input() name: string;

    constructor(
        @Optional()
        @Inject('DEFAULT_NAME')
        defaultName: string,
        @Inject('ITEMS') items: string[]
    ) {
        this.name = defaultName;
        this.items = items;
    }
}
