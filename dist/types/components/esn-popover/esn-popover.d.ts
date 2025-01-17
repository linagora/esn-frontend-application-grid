import { ComponentInterface } from '../../stencil-public-runtime';
export declare class EsnPopover implements ComponentInterface {
    private clickOutsideListener;
    private popoverContainerEl;
    private hostEl;
    active: boolean;
    fadingState: string;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /**
     * A method to toggle the popover on/off.
     */
    toggleShowState(): Promise<void>;
    render(): any;
}
