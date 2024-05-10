import './menu.css';
import React from "react";
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
export declare function CloseMenu(callback?: () => void): void;
export declare const MenuItem: {
    new (props: Readonly<MyProps>): {
        readonly mRefMenu: React.RefObject<HTMLInputElement>;
        readonly mRefWrapper: React.RefObject<HTMLAnchorElement>;
        readonly mRefPopup: React.RefObject<HTMLInputElement>;
        readonly onClick: any;
        readonly id: string;
        stateDropMenu: boolean;
        _MyMenu: boolean;
        readonly menu: HTMLInputElement | null;
        readonly popUp: HTMLInputElement | null;
        readonly wrapper: HTMLAnchorElement | null;
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
        context: unknown;
        setState<K extends keyof MyState>(state: MyState | ((prevState: Readonly<MyState>, props: Readonly<MyProps>) => MyState | Pick<MyState, K> | null) | Pick<MyState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<MyProps>;
        state: Readonly<MyState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<MyProps>, nextState: Readonly<MyState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<MyProps>, prevState: Readonly<MyState>): any;
        componentDidUpdate?(prevProps: Readonly<MyProps>, prevState: Readonly<MyState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<MyProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<MyProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<MyProps>, nextState: Readonly<MyState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<MyProps>, nextState: Readonly<MyState>, nextContext: any): void;
    };
    defaultProps: MyProps;
    contextType?: React.Context<any> | undefined;
};
export {};
