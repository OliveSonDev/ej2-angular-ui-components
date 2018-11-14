import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['buttonModel'];
let outputs: string[] = ['click', 'type'];
/**
 * 'e-button' directive represent a button of angular dialog 
 * It must be contained in a Dialog component(`ej-dialog`). 
 * ```html
 * <ejs-dialog id='dialog' showCloseIcon=true> 
 *   <e-buttons>
 *    <e-dialogbutton [buttonModal]='okButton'></e-button>
 *    <e-dialogbutton [buttonModal]='cancelButton'></e-button>
 *   </e-buttons>
 * </ejs-dialog>
 * ```
 */
@Directive({
    selector: 'e-buttons>e-dialogbutton',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class DialogButtonDirective extends ComplexBase<DialogButtonDirective> {


    /** 
     * Specifies the button component properties to render the dialog buttons.
     */
    public buttonModel: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * DialogButton Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-dialog>e-buttons',
    queries: {
        children: new ContentChildren(DialogButtonDirective)
    },
})
export class ButtonsDirective extends ArrayBase<ButtonsDirective> {
    constructor() {
        super('buttons');
    }
}