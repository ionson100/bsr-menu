import React from "react";

export interface MyProps {
    accessKey: string | undefined,
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
    buildContent: (contentLeft: any,
                   contentCenter: any,
                   contentRight: any,
                   iconDropOpen: any,
                   iconDropClose: any,
                   isOpenDrop: boolean | undefined,
                   id: string | undefined,
                   tag: any) => any
    /**The submenu opening behavior can be 'move' or 'click'. (mov: mouse move) (click: mouse click) . Default 'move'*/
    behavior: 'move' | 'click',
    /**css class menu. default: 'menu-123-item'.*/
    className?: string,
    style: React.CSSProperties | undefined,
    children: any,
    /**The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually.*/
    content: any,
    /**The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually.*/
    contentLeft: any,
    /**The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually.*/
    contentRight: any,
    /**Sign of an disabled menu, boolean value, default: false*/
    disabled: boolean,
    id: string | undefined,
    /**Only for menu where positionPopup='dropDown'.*/
    iconDropOpen: any,
    /**Only for menu where positionPopup='dropDown'.*/
    iconDropClose: any,
    //key: PropTypes.string,
    onClick?: (tag: any, element: HTMLElement, isOpen: boolean | undefined) => void | undefined;

    /**css class submenu panel. default:'popup-123'.*/
    popupClassName?: string,
    /**Position of the sub menu panel, can take value: ['down', 'top', 'downLeft', 'downRight', 'topRight', 'topLeft', 'dropDown','middleLeft','middleLeft3','middleLeft4','middleLeft5','middleRight','middleRight3','middleRight4','middleRight5']. Default:'down'*/
    positionPopup: 'down' | 'top' | 'downLeft' | 'downRight' | 'topRight' | 'topLeft' | 'dropDown' | 'middleLeft' | 'middleLeft3' | 'middleLeft4' | 'middleLeft5' | 'middleRight' | 'middleRight3' | 'middleRight4' | 'middleRight5',
    //style: stylePropType,
    tabIndex: number | undefined,
    title: string | undefined,
    tag: any,
    url?: string
}