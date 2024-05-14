import './menu.css';
import React, {Children, Component} from "react";
import {v4 as uuidv4} from 'uuid';
import buildContent from "./contentBuilder";
import {ObserverItem, InstanceHub} from "./myObserver";
import {MapMenu, ResizeAction} from "./resizeFactory";
import {MyProps} from "./menu.type";


interface MyState {
    disabled: boolean,
    dropOpen: false,
    content: {
        contentLeft: any,
        content: any,
        contentRight: any
    },
    url?: string,
    tag: any
}

const MyRootContext = React.createContext<string>('superRoot');


const MyHub = {
    hub: InstanceHub
}


document.addEventListener("click", () => {

    MyHub.hub.clearClick()
});


export const MenuItem = class extends Component<MyProps, MyState> implements ResizeAction {
    /**
     * Close all open menu
     * @param callback
     * @constructor
     */


    static CloseMenu(callback?: () => void) {
        MyHub.hub.clearClick(callback)
    }

    static defaultProps: MyProps = {
        url: undefined,
        tag: undefined,
        content: undefined,
        id: undefined,
        children: undefined,
        accessKey: undefined,
        dataUser: undefined,

        onClick: undefined,
        contentRight: undefined,
        positionPopup: "down",
        disabled: false,
        behavior: 'move',
        popupClassName: 'popup-123',
        className: 'menu-123-item',
        buildContent: buildContent,
        contentLeft: undefined,
        title: undefined,
        tabIndex: undefined,
        iconDropClose: undefined,
        iconDropOpen: undefined,
        style: undefined,

        onMouseDown: undefined,
        onMouseDownCapture: undefined,
        onMouseEnter: undefined,
        onMouseLeave: undefined,
        onMouseOut: undefined,
        onMouseOutCapture: undefined,
        onMouseOver: undefined,
        onMouseOverCapture: undefined,
        onMouseUp: undefined,
        onMouseUpCapture: undefined,

    };
    public readonly mRefMenu: React.RefObject<HTMLDivElement>;
    public readonly mRefWrapper: React.RefObject<HTMLAnchorElement>;
    public readonly mRefPopup: React.RefObject<HTMLDivElement>;
    public readonly onClick?: (e: InstanceType<typeof MenuItem>) => void
    public readonly id: string;

    public _MyMenu: boolean
    public poopUpHeight: number | undefined;


    constructor(props: Readonly<MyProps>) {
        super(props);
        this.id = uuidv4();
        this.mRefMenu = React.createRef<HTMLDivElement>();
        this.mRefWrapper = React.createRef<HTMLAnchorElement>();
        this.mRefPopup = React.createRef<HTMLDivElement>();
        this.onClick = this.props.onClick;


        this._MyMenu = this.props.behavior === "move";

        this.state =
            {
                disabled: this.props.disabled,
                dropOpen: false,
                content: {
                    contentLeft: this.props.contentLeft,
                    content: this.props.content,
                    contentRight: this.props.contentRight
                },
                url: this.props.url,
                tag: this.props.tag
            }
        this._moveMenu = this._moveMenu.bind(this)
        this._click = this._click.bind(this)
        this.poopUpHeight = 0;

    }

    /**
     * HTMLDivElement menu
     */
    public get menu(): HTMLDivElement | null {
        return this.mRefMenu.current
    }

    /**
     * HTMLDivElement poopUp
     */
    public get popUp(): HTMLDivElement | null {
        return this.mRefPopup.current;
    }

    /**
     * HTMLAnchorElement wrapper menu
     */
    public get wrapper(): HTMLAnchorElement | null {
        return this.mRefWrapper.current;
    }

    _resizeWindows() {
        if (this.mRefPopup.current!.style.visibility === "visible") {
            this._visibilityPane(true)
        }
    }

    _validateResizeRight(l: number) {
        const width = window.innerWidth

        const rect: DOMRect = this.mRefPopup.current!.getBoundingClientRect();

        const res: number = width - (rect.left + this.mRefPopup.current!.offsetWidth)

        if (res < 0) {
            const lt = l + res

            this.mRefPopup.current!.style.left = `${lt}px`;
        }
    }


    _validateResizeLeft() {

        const rect = this.mRefPopup.current!.getBoundingClientRect();
        const res = rect.left;//-this.mRefPopup.current.offsetWidth
        if (res < 0) {

            this.mRefPopup.current!.style.left = `0px`;
        }
    }


    _visibilityPane(resizeWindows: any) {

        if (!resizeWindows) {
            if (!this.props.children) return


            if (this.mRefPopup.current!.style.visibility === "visible") return;
        }

        const MENU = this.mRefMenu.current!
        const POPUP = this.mRefPopup.current!
        switch (this.props.positionPopup) {
            case "dropDown": {

                break
            }
            case 'down': {
                // @ts-ignore
                const y: number = MENU.offsetTop + MENU.offsetHeight;
                // @ts-ignore
                this.mRefPopup.current.style.top = `${y}px`;
                // @ts-ignore
                this.mRefPopup.current.style.left = `${MENU.offsetLeft}px`;
                break
            }
            case 'top': {
                const y: number = MENU.offsetTop - POPUP.offsetHeight;
                POPUP.style.top = `${y}px`;
                POPUP.style.left = `${MENU.offsetLeft}px`;
                break
            }
            case 'middleRight': {
                const y: number = MENU.offsetTop - POPUP.offsetHeight / 2;
                POPUP.style.top = `${y}px`;
                const l: number = MENU.offsetLeft + MENU.offsetWidth - 5
                POPUP.style.left = `${l}px`;
                this._validateResizeRight(l)
                break
            }
            case 'middleRight3': {
                const y: number = MENU.offsetTop - POPUP.offsetHeight / 3;
                POPUP.style.top = `${y}px`;
                const l: number = MENU.offsetLeft + MENU.offsetWidth - 5
                POPUP.style.left = `${l}px`;
                this._validateResizeRight(l)
                break
            }
            case 'middleRight4': {
                const y: number = MENU.offsetTop - POPUP.offsetHeight / 4;
                POPUP.style.top = `${y}px`;
                const l: number = MENU.offsetLeft + MENU.offsetWidth - 5
                POPUP.style.left = `${l}px`;
                this._validateResizeRight(l)
                break
            }
            case 'middleRight5': {
                const y: number = MENU.offsetTop - POPUP.offsetHeight / 6;
                POPUP.style.top = `${y}px`;
                const l: number = MENU.offsetLeft + MENU.offsetWidth - 5
                POPUP.style.left = `${l}px`;
                this._validateResizeRight(l)
                break
            }
            case 'downRight': {
                const y: number = MENU.offsetTop + 5;
                POPUP.style.top = `${y}px`;
                const l: number = MENU.offsetLeft + MENU.offsetWidth - 5
                POPUP.style.left = `${l}px`;
                this._validateResizeRight(l)
                break
            }
            case 'topRight': {
                const y: number = MENU.offsetTop - POPUP.offsetHeight + MENU.offsetHeight - 5;
                POPUP.style.top = `${y}px`;
                const l: number = MENU.offsetLeft + MENU!.offsetWidth - 5;
                POPUP.style.left = `${l}px`;
                this._validateResizeRight(l)
                break
            }
            case 'middleLeft': {
                const y: number = MENU.offsetTop - POPUP.offsetHeight / 2;
                POPUP.style.top = `${y}px`;
                const l: number = MENU.offsetLeft - POPUP.offsetWidth + 5
                POPUP.style.left = `${l}px`;
                this._validateResizeLeft()
                break

            }
            case 'middleLeft3': {
                const y: number = MENU.offsetTop - POPUP.offsetHeight / 3;
                POPUP.style.top = `${y}px`;
                const l: number = MENU.offsetLeft - POPUP.offsetWidth + 5
                POPUP.style.left = `${l}px`;
                this._validateResizeLeft()
                break
            }
            case 'middleLeft4': {
                const y: number = MENU.offsetTop - POPUP.offsetHeight / 4;
                POPUP.style.top = `${y}px`;
                const l: number = MENU.offsetLeft - POPUP.offsetWidth + 5
                POPUP.style.left = `${l}px`;
                this._validateResizeLeft()
                break

            }
            case 'middleLeft5': {
                const y: number = MENU.offsetTop - POPUP.offsetHeight / 6;
                POPUP.style.top = `${y}px`;
                const l: number = MENU.offsetLeft - POPUP.offsetWidth + 5
                POPUP.style.left = `${l}px`;
                this._validateResizeLeft()
                break
            }

            case 'downLeft': {
                const y = MENU.offsetTop + 5;
                POPUP.style.top = `${y}px`;
                const l: number = MENU.offsetLeft - POPUP.offsetWidth + 5
                POPUP.style.left = `${l}px`;
                this._validateResizeLeft()
                break
            }
            case 'topLeft': {
                const y: number = MENU.offsetTop - POPUP.offsetHeight + MENU.offsetHeight - 5;
                POPUP.style.top = `${y}px`;
                const l: number = MENU.offsetLeft - POPUP.offsetWidth + 5
                POPUP.style.left = `${l}px`;
                break
            }

        }


        if (this.props.children) {
            MyHub.hub.Add(new ObserverItem({id: this.id, element: POPUP, idRoot: this.context, elementMenu: MENU}))
            POPUP.style.visibility = "visible"
            POPUP.style.display = "block"
        }
    }


    _click(e: React.MouseEvent) {

        // @ts-ignore
        e.stopPropagation()
        if (this.props.positionPopup === 'dropDown') {
            if (this.state.dropOpen === false) {
                this.open()
            } else if (this.state.dropOpen === true) {
                this.close()
            }

            return;
        }
        if (Children.count(this.props.children) === 0) {
            MyHub.hub.ClickSelect(this, this.onClick)
            return;
        }
        this._MyMenu = true;
        this._visibilityPane(undefined)
    }

    _moveMenu() {

        const myThis = this;

        function inner() {
            if (myThis._MyMenu) {
                myThis._visibilityPane(undefined)
            }
        }

        MyHub.hub.MoveMenu(new ObserverItem({
            id: this.id,
            element: this.mRefPopup.current!,
            idRoot: this.context,
            elementMenu: this.mRefMenu.current!
        }), inner);
    }

    _movePopUp() {
        this.mRefPopup.current!.style.visibility = "visible"
    }

    componentWillUnmount() {
        MapMenu.delete(this.id)
    }

    componentDidMount() {

        this.mRefPopup.current!.style.display = "block"
        this.mRefPopup.current!.style.position = 'absolute'
        this.mRefPopup.current!.style.visibility = 'hidden'
        this.mRefPopup.current!.style.zIndex = String(2);
        this.mRefMenu.current!.style.display = 'block'
        if (this.props.positionPopup === 'dropDown') {
            this.mRefPopup.current!.classList.add('is-close')

        }
        MapMenu.set(this.id, this)
    }

    /**
     * Change show
     * @constructor
     * @param  {boolean} value true-show, false-not show
     */
    public setShow(value: boolean): void {

        if (!value) {
            this.mRefWrapper.current!.style.display = "none"
        }
        if (value) {
            this.mRefWrapper.current!.style.display = "inline"
        }
    }

    /**
     *
     * @function
     * Change disabled
     * @param  {boolean} value true-disable, false- not disable
     */
    public setDisabled(value: boolean): void {
        if (value) {
            this.mRefWrapper.current!.style.cursor = 'not-allowed'
        } else {
            this.mRefWrapper.current!.style.cursor = 'default'
        }
        const s = Object.assign({}, this.state)
        // @ts-ignore
        s.disabled = value;
        this.setState(s);
    }

    /**
     * Open menu
     * @function
     */
    public open(): void {
        if (this.props.children) {
            this.mRefPopup.current!.classList.add("is-close");
            this.mRefPopup.current!.classList.add("is-open");
            setTimeout(() => {
                this.mRefPopup.current!.classList.remove("is-close");
            }, 100)


            this.mRefMenu.current!.classList.add('drop-123-open')
            this.mRefPopup.current!.style.position = 'relative'
            this.mRefPopup.current!.style.visibility = "visible"
            const s = Object.assign({}, this.state)
            // @ts-ignore
            s.dropOpen = true;
            this.setState(s);
            if (this.props.onClick) {
                this.props.onClick(this)
            }


        }
    }

    /**
     * CloseMenu
     * @function
     */
    public close(): void {
        this.mRefPopup.current!.classList.add("is-close");
        this.mRefPopup.current!.classList.remove("is-open");
        this.mRefMenu.current!.classList.remove('drop-123-open')
        setTimeout(() => {
            this.mRefPopup.current!.style.position = 'absolute'
            this.mRefPopup.current!.style.visibility = "hidden"
        }, 120)

        const s = Object.assign({}, this.state)
        // @ts-ignore
        s.dropOpen = false;
        this.setState(s);
        // console.log(this.mRefPopup.current!.classList)

        if (this.props.onClick) {
            this.props.onClick(this)
        }
    }

    /**
     * Change contents
     * @param  {any} contentLeft
     * @param {any} content
     * @param  {any} contentRich
     */
    public setContent(contentLeft?: any, content?: any, contentRich?: any): void {
        const s = Object.assign({}, this.state)

        // @ts-ignore
        s.content = {
            contentLeft: contentLeft,
            content: content,
            contentRight: contentRich
        };
        this.setState(s);


    }

    /**
     * Change url
     * @param {string} url
     */
    public setUrl(url: string | undefined): void {
        const s = Object.assign({}, this.state)
        // @ts-ignore
        s.url = url;
        this.setState(s);
    }

    /**
     * Change tag
     * @param  {any} tag
     */
    setTag(tag: any | undefined): void {
        const s = Object.assign({}, this.state)
        // @ts-ignore
        s.tag = tag;
        this.setState(s);
    }


    _getUrl() {
        if (this.props.positionPopup === 'dropDown') {

            if (this.state.url) {
                return `${this.state.url}&state=${this.props.id ? `${this.props.id}-` : ''}${this.state.dropOpen}`
            }
        } else {
            return this.state.url;
        }
    }


    render() {


        return (
            <object>
                <a href={this._getUrl()} data-wrapper={1} ref={this.mRefWrapper}>
                    <div ref={this.mRefMenu}
                         style={this.props.style}
                         id={this.props.id}
                         data-user-123={this.props.dataUser}
                         onClick={this._click}
                         onMouseMove={this._moveMenu}

                         onMouseDown={this.props.onMouseDown}
                         onMouseDownCapture={this.props.onMouseDownCapture}
                         onMouseEnter={this.props.onMouseEnter}
                         onMouseLeave={this.props.onMouseLeave}
                         onMouseOut={this.props.onMouseOut}
                         onMouseOutCapture={this.props.onMouseOutCapture}
                         onMouseOver={this.props.onMouseOver}
                         onMouseOverCapture={this.props.onMouseOverCapture}
                         onMouseUp={this.props.onMouseUp}
                         onMouseUpCapture={this.props.onMouseUpCapture}


                         accessKey={this.props.accessKey}
                         title={this.props.title}
                         tabIndex={this.props.tabIndex}
                         data-menu-tag={this.state.tag}
                        // @ts-ignore
                         disabled={this.state.disabled}
                         className={this.props.className}>
                        {

                            this.props.buildContent(
                                {
                                    contentLeft: this.state.content.contentLeft,
                                    contentCenter: this.state.content.content,
                                    contentRight: this.state.content.contentRight,
                                    iconDropOpen: this.props.iconDropOpen,
                                    iconDropClose: this.props.iconDropClose,
                                    isOpenDrop: this.state.dropOpen,
                                    id: this.props.id,
                                    tag: this.state.tag
                                }
                            )
                        }
                    </div>
                    <div
                        data-memu-poopup={this.state.tag}
                        // @ts-ignore
                        disabled={this.state.disabled}
                        onMouseMove={this._movePopUp.bind(this)}
                        ref={this.mRefPopup}
                        className={this.props.popupClassName}>
                        {
                            this.props.children === undefined ? (<div/>) : (
                                <MyRootContext.Provider value={this.id}>
                                    {this.props.children}
                                </MyRootContext.Provider>
                            )
                        }
                    </div>
                </a>
            </object>
        );
    }
}


MenuItem.contextType = MyRootContext;






