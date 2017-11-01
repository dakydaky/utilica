import {
    Component,
    Input,
    ElementRef,
    ViewChild,
    Renderer,
    forwardRef,
    OnInit, Output, EventEmitter
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonService} from "../../../../commonService/common.service";

const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InlineEditComponent),
    multi: true
};

@Component({
    selector: 'app-inline-edit',
    templateUrl: './inline-edit.component.html',
    providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
    styleUrls: ['./inline-edit.component.scss']
})

export class InlineEditComponent implements ControlValueAccessor, OnInit {

    @ViewChild('inlineEditControl') inlineEditControl: ElementRef; // input DOM element
    @Input() label: string = '';  // Label value for input element
    @Input() type: string = 'text'; // The type of input element
    @Input() required: boolean = false; // Is input requried?
    @Input() disabled: boolean = false; // Is input disabled?
    private _value: string = ''; // Private variable for input value
    private preValue: string = ''; // The value before clicking to edit
    private editing: boolean = false; // Is Component in edit mode?
    public onChange: any = Function.prototype; // Trascend the onChange event
    public onTouched: any = Function.prototype; // Trascend the onTouch event
    @Input() apart: any;

    @Output() event: EventEmitter<any> = new EventEmitter();

    // Control Value Accessors for ngModel
    get value(): any {
        return this._value;
    }

    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
            this.apart.apartmentName = v;
        }
    }

    constructor(element: ElementRef, private _renderer: Renderer, private service: CommonService) {
    }

    // Required for ControlValueAccessor interface
    writeValue(value: any) {
        this._value = value;
    }

    // Required forControlValueAccessor interface
    public registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    // Required forControlValueAccessor interface
    public registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

    // Do stuff when the input element loses focus
    onBlur($event: Event) {
        this.editing = false;

        const data = {
            'a_id': this.apart.id,
            'a_n': this.apart.apartmentName,
            'jwt': JSON.parse(localStorage.getItem('user')).jwt
        };

        this.service.post('updateApart', data).then(resp => {

            this.event.emit('refresh');
        });
    }

    // Start the editting process for the input element
    edit(value) {
        if (this.disabled) {
            return;
        }

        this.preValue = value;
        this.editing = true;
        // Focus on the input element just as the editing begins
        setTimeout(_ => this._renderer.invokeElementMethod(this.inlineEditControl,
            'focus', []));
    }

    ngOnInit() {
    }
}
