import './menu.css';
import React, { Component } from "react";
import { ResizeAction } from "./resizeFactory";
import { MyProps } from "./menu.type";
interface MyState {
    disabled: boolean;
    dropOpen: false;
    content: {
        contentLeft: any;
        content: any;
        contentRight: any;
    };
    url?: string;
    tag: any;
}
export default class MenuItem extends Component<MyProps, MyState> implements ResizeAction {
    /**
     * Closes the menu chain
     * @param callback call after execute
     * @constructor
     */
    static CloseMenu(callback?: () => void): void;
    static defaultProps: MyProps;
    readonly mRefMenu: React.RefObject<HTMLDivElement>;
    readonly mRefWrapper: React.RefObject<HTMLAnchorElement>;
    readonly mRefPopup: React.RefObject<HTMLDivElement>;
    readonly onClick?: (e: InstanceType<typeof MenuItem>) => void;
    readonly id: string;
    stateDropMenu: boolean;
    _MyMenu: boolean;
    constructor(props: Readonly<MyProps>);
    /**
     * HTMLDivElement menu
     */
    get menu(): HTMLDivElement | null;
    /**
     * HTMLDivElement poopUp
     */
    get popUp(): HTMLDivElement | null;
    /**
     * HTMLAnchorElement wrapper menu
     */
    get wrapper(): HTMLAnchorElement | null;
    _resizeWindows(): void;
    _validateResizeRight(l: number): void;
    _validateResizeLeft(): void;
    _visibilityPane(resizeWindows: any): void;
    _click(e: Event): void;
    _moveMenu(): void;
    _movePopUp(): void;
    componentWillUnmount(): void;
    componentDidMount(): void;
    /**
     * Change show
     * @constructor
     * @param  {boolean} value true-show, false-not show
     */
    setShow(value: boolean): void;
    /**
     *
     * @function
     * Change disabled
     * @param  {boolean} value true-disable, false- not disable
     */
    setDisabled(value: boolean): void;
    /**
     * Open menu
     * @function
     */
    open(): void;
    /**
     * CloseMenu
     * @function
     */
    close(): void;
    /**
     * Change contents
     * @param  {any} contentLeft
     * @param {any} content
     * @param  {any} contentRich
     */
    setContent(contentLeft?: any, content?: any, contentRich?: any): void;
    /**
     * Change url
     * @param {string} url
     */
    setUrl(url: string | undefined): void;
    /**
     * Change tag
     * @param  {any} tag
     */
    setTag(tag: any | undefined): void;
    _getUrl(): string | undefined;
    render(): React.JSX.Element;
}
export {};
