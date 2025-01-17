import { ComponentInterface } from '../../stencil-public-runtime';
import { Application } from './esn-app-grid.types';
export declare class EsnAppGrid implements ComponentInterface {
    private popover;
    /**
     * A serialized JSON object that contains information about the available apps.
     */
    serializedApplications: string;
    parseSerializedApplications(): Application[];
    render(): any;
}
