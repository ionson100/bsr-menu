import React, {ReactElement} from "react";
import {ParamBuildContent} from "./menu.type";


function isFunction(value: any): boolean {
    return value ? (Object.prototype.toString.call(value) === "[object Function]" || "function" === typeof value || value instanceof Function) : false;
}


function buildContent(param: ParamBuildContent): ReactElement | undefined {

    if (isFunction(param.contentLeft)) {
        param.contentLeft = param.contentLeft();
    }
    if (isFunction(param.contentCenter)) {
        param.contentCenter = param.contentCenter();
    }
    if (isFunction(param.contentRight)) {
        param.contentRight = param.contentRight();
    }
    if (isFunction(param.iconDropOpen)) {
        param.iconDropOpen = param.iconDropOpen();
    }
    if (isFunction(param.iconDropClose)) {
        param.iconDropClose = param.iconDropClose();
    }
    if (param.iconDropClose && param.iconDropOpen) {
        if (param.isOpenDrop === true) {
            param.contentRight = param.iconDropOpen;
        } else if (param.isOpenDrop === false) {
            param.contentRight = param.iconDropClose;
        }
    }


    if (!param.contentLeft && param.contentCenter && !param.contentRight) {
        return (
            <div className='container-123'>
                <div className='vertical-center-123'>
                    <div className='content-123-center-100'>{param.contentCenter}</div>
                </div>
            </div>
        )
    }
    if (param.contentLeft && param.contentCenter && !param.contentRight) {
        return (

            <div className='box-123'>
                <div className='content-123-left-10'>{param.contentLeft}</div>
                <div className='content-123-center-90 t-over'>{param.contentCenter}</div>
            </div>

        )
    }
    if (param.contentLeft && param.contentCenter && param.contentRight) {
        return (

            <div className='box-123'>
                <div className='content-123-left-10'>{param.contentLeft}</div>
                <div className='content-123-center-80 t-over'>{param.contentCenter}</div>
                <div className='content-123-right-10'>{param.contentRight}</div>
            </div>

        )
    }
    if (!param.contentLeft && param.contentCenter && param.contentRight) {
        return (

            <div className='box-123'>
                <div className='  content-123-center-90 t-over'>{param.contentCenter}</div>
                <div className='content-123-right-10'>{param.contentRight}</div>

            </div>
        )
    }
    if (param.contentLeft && !param.contentCenter && !param.contentRight) {
        return (
            <div className='container-123'>
                <div className='center-icon-123'>
                    <div className='content-123-left-100'>{param.contentLeft}</div>
                </div>
            </div>
        )
    }

    if (!param.contentLeft && !param.contentCenter && param.contentRight) {
        return (
            <div className='container-123'>
                <div className='center-icon-123'>
                    <div className='content-123-right-100'>{param.contentRight}</div>
                </div>
            </div>
        )
    }
}


export default buildContent;
