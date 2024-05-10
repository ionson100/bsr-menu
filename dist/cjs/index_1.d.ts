import React from 'react';
interface MyState {
    disabled: boolean;
    dropOpen: false;
    content: {
        contentLeft: any;
        content: any;
        contentRight: any;
    };
    url: string | undefined;
    tag: any;
}
/**
 * asas saisioais
 */
interface MyProps {
    accessKey: string | undefined;
    buildContent: any;
    /** The submenu opening behavior can be 'move' or 'click'. (mov: mouse move) (click: mouse click) . Default 'move' */
    behavior: 'move' | 'click';
    /** css class menu. default: 'menu-123-item'. */
    className: string;
    style: React.CSSProperties | undefined;
    children: any;
    /** The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually. */
    content?: any | number;
    /** The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually. */
    contentLeft: any;
    /** The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually. */
    contentRight: any;
    /** Sign of an disabled menu, boolean value, default: false */
    disabled: boolean;
    id: string | undefined;
    /** Only for menu where positionPopup='dropDown'. */
    iconDropOpen: any;
    /** Only for menu where positionPopup='dropDown'. */
    iconDropClose: any;
    onClick: (tag: any, element: HTMLElement, isOpen: boolean | undefined) => void | undefined;
    /** css class submenu panel. default:'popup-123'. */
    popupClassName: string;
    /** Position of the sub menu panel, can take value: ['down', 'top', 'downLeft', 'downRight', 'topRight', 'topLeft', 'dropDown','middleLeft','middleLeft3','middleLeft4','middleLeft5','middleRight','middleRight3','middleRight4','middleRight5']. Default:'down' */
    positionPopup: 'down' | 'top' | 'downLeft' | 'downRight' | 'topRight' | 'topLeft' | 'dropDown' | 'middleLeft' | 'middleLeft3' | 'middleLeft4' | 'middleLeft5' | 'middleRight' | 'middleRight3' | 'middleRight4' | 'middleRight5';
    tabIndex: number | undefined;
    title: string | undefined;
    tag: any;
    url: string | undefined;
}
/**
 * @extends {React.Component<Props, {}>}
 */
export declare const MenuItem: {
    new (props: Readonly<MyProps>): {
        readonly id?: string | undefined;
        render(): React.JSX.Element;
        context: unknown;
        setState<K extends keyof MyState>(state: MyState | ((prevState: Readonly<MyState>, props: Readonly<MyProps>) => MyState | Pick<MyState, K> | null) | Pick<MyState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<MyProps>;
        state: Readonly<MyState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<MyProps>, nextState: Readonly<MyState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
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
    displayName: string;
    contextType?: React.Context<any> | undefined;
};
export {};
