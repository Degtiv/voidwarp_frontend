import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    @Input('appStyle') color: string = 'green'
    @HostBinding('style.color') elColor: string = ''

    constructor() {
        
    }   

    @HostListener('mouseenter') onEnter() {
        this.elColor = this.color;
    }

    @HostListener('mouseleave') onLeave() {
        this.elColor = '';
    }
}