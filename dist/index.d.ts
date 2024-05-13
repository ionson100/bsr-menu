import React from 'react';

interface ParamBuildContent {
    contentLeft?: any;
    contentCenter?: any;
    contentRight?: any;
    iconDropOpen?: any;
    iconDropClose?: any;
    isOpenDrop?: boolean;
    id?: string;
    tag?: any;
}
interface MyProps {
    accessKey: string | undefined;
    /**
     * Overwriting menu content
     * @param contentLeft  left part
     * @param  contentCenter center part
     * @param  contentRight right part
     * @param  iconDropOpen for dropDown open icon
     * @param  iconDropClose for dropDown close icon
     * @param  isOpenDrop state dropDown menu
     * @param  id id menu
     * @param tag tag menu
     */
    buildContent: (param: ParamBuildContent) => any;
    /**The submenu opening behavior can be 'move' or 'click'. (mov: mouse move) (click: mouse click) . Default 'move'*/
    behavior: 'move' | 'click';
    /**css class menu. default: 'menu-123-item'.*/
    className?: string;
    style?: React.CSSProperties | undefined;
    children?: any;
    /**The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually.*/
    content?: any;
    /**The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually.*/
    contentLeft?: any;
    /**The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually.*/
    contentRight?: any;
    /**Sign of an disabled menu, boolean value, default: false*/
    disabled: boolean;
    id?: string;
    /**Only for menu where positionPopup='dropDown'.*/
    iconDropOpen?: any;
    /**Only for menu where positionPopup='dropDown'.*/
    iconDropClose?: any;
    onClick?: (e: InstanceType<typeof MenuItem>) => void;
    /**css class submenu panel. default:'popup-123'.*/
    popupClassName?: string;
    /**Position of the sub menu panel, can take value: ['down', 'top', 'downLeft', 'downRight', 'topRight', 'topLeft', 'dropDown','middleLeft','middleLeft3','middleLeft4','middleLeft5','middleRight','middleRight3','middleRight4','middleRight5']. Default:'down'*/
    positionPopup: 'down' | 'top' | 'downLeft' | 'downRight' | 'topRight' | 'topLeft' | 'dropDown' | 'middleLeft' | 'middleLeft3' | 'middleLeft4' | 'middleLeft5' | 'middleRight' | 'middleRight3' | 'middleRight4' | 'middleRight5';
    tabIndex?: number;
    title?: string;
    tag?: any;
    url?: string;
}

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
declare const MenuItem: {
    new (props: Readonly<MyProps>): {
        readonly mRefMenu: React.RefObject<HTMLDivElement>;
        readonly mRefWrapper: React.RefObject<HTMLAnchorElement>;
        readonly mRefPopup: React.RefObject<HTMLDivElement>;
        readonly onClick?: ((e: InstanceType<typeof MenuItem>) => void) | undefined;
        readonly id: string;
        stateDropMenu: boolean;
        _MyMenu: boolean;
        /**
         * HTMLDivElement menu
         */
        readonly menu: HTMLDivElement | null;
        /**
         * HTMLDivElement poopUp
         */
        readonly popUp: HTMLDivElement | null;
        /**
         * HTMLAnchorElement wrapper menu
         */
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
    /**
     * Close all open menu
     * @param callback
     * @constructor
     */
    CloseMenu(callback?: () => void): void;
    defaultProps: MyProps;
    contextType?: React.Context<any> | undefined;
};

export { MenuItem };
