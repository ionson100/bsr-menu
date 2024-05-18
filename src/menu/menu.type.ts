import React from "react";
import MenuItem from "./menu_item";

 export interface ParamBuildContent{
    contentLeft?: any,
    contentCenter?: any,
    contentRight?: any,
    iconDropOpen?: any,
    iconDropClose?: any,
    isOpenDrop?: boolean,
    id?: string,
    tag?: any
}
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
    buildContent: (param:ParamBuildContent) => any
    /**The submenu opening behavior can be 'move' or 'click'. (mov: mouse move) (click: mouse click) . Default 'move'*/
    behavior: 'move' | 'click',
    /**css class menu. default: 'menu-123-item'.*/
    className?: string,
    style?: React.CSSProperties | undefined,
    children?: any,
    /**The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually.*/
    content?: any,
    /**The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually.*/
    contentLeft?: any,
    /**The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually.*/
    contentRight?: any,
    /**Sign of an disabled menu, boolean value, default: false*/
    disabled: boolean,
    id?: string ,
    /**Only for menu where positionPopup='dropDown'.*/
    iconDropOpen?: any,
    /**Only for menu where positionPopup='dropDown'.*/
    iconDropClose?: any,

    onClick?: (e:InstanceType<typeof MenuItem>) => void

    /**css class submenu panel. default:'popup-123'.*/
    popupClassName?: string,
    /**Position of the sub menu panel, can take value: ['down', 'top', 'downLeft', 'downRight', 'topRight', 'topLeft', 'dropDown','middleLeft','middleLeft3','middleLeft4','middleLeft5','middleRight','middleRight3','middleRight4','middleRight5']. Default:'down'*/
    positionPopup: 'down' | 'top' | 'downLeft' | 'downRight' | 'topRight' | 'topLeft' | 'dropDown' | 'middleLeft' | 'middleLeft3' | 'middleLeft4' | 'middleLeft5' | 'middleRight' | 'middleRight3' | 'middleRight4' | 'middleRight5',
    //style: stylePropType,
    tabIndex?: number,
    title?: string,
    tag?: any,
    url?: string
}