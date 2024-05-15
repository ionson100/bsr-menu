import {MenuItem} from "./menu_item";

interface TypeObserver{
    id: string, element: HTMLElement, idRoot: any, elementMenu: HTMLElement,isDrop:boolean
}
export class ObserverItem {

    public id: string;
    public element: HTMLElement;
    public idRoot: string;
    public elementMenu: HTMLElement
    public isDrop:boolean;

    constructor(param:TypeObserver) {
        this.id = param.id;
        this.element = param.element;
        this.idRoot = param.idRoot;
        this.elementMenu = param.elementMenu;
        this.isDrop=param.isDrop;

    }
}

class MyObserver {
    private root?: string;
    private listItem: Array<ObserverItem>;
    private lastActionMoveId: string | undefined;
    private lastActionAddId: string | undefined;
    public classRoot: string;
    public classItem: string;

    constructor(classRoot: string, classItem: string) {

        this.root = undefined;
        this.listItem = []
        this.lastActionMoveId = undefined;
        this.lastActionAddId = undefined;
        this.classRoot = classRoot;
        this.classItem = classItem;

    }

    Add(observerItem: any) {
        if (this.lastActionAddId !== observerItem.id) {
            this._innerAdd(observerItem);
            this.lastActionAddId = observerItem.id;
        }
    }

    _innerAdd(observerItem: any) {
        if (!this._hasList(observerItem)) {

            if (observerItem.idRoot === "superRoot") {
                if (this.root !== undefined) {
                    this._innerClearState();
                }
                if (this.classRoot) {
                    observerItem.elementMenu.classList.add(this.classRoot)
                }
            } else {
                if (this.classItem) {
                    observerItem.elementMenu.classList.add(this.classItem)
                }
            }
            this.listItem.push(observerItem)
        }
    }

    _innerValue(o: ObserverItem) {
        if (this.classRoot) {
            o.elementMenu.classList.remove(this.classRoot)
        }
        if (this.classItem) {
            o.elementMenu.classList.remove(this.classItem)
        }
        o.element.style.visibility = 'hidden';
    }

    ClickSelect(e:InstanceType<typeof MenuItem> , funClick: any) {

       this.actionInvisible()
        // this.listItem.forEach(a => {
        //     this._innerValue(a)
        // })
        //  this._innerClearState()

        if (funClick) {
            funClick(e)
        }
    }

    _innerClearState() {
        this.root = undefined
        this.listItem.length = 0;
        this.lastActionMoveId = undefined;
        this.lastActionAddId = undefined;
    }

    _hasList(item: any) {
        let res = false;
        this.listItem.forEach(a => {
            if (a.id === item.id) {
                res = true;
            }
        })
        return res;
    }

    MoveMenu(observerItem: ObserverItem, action: any) {

        if (this.lastActionMoveId === observerItem.id) return;
        const tempListRoot: any[] = [];
        let b = false;
        this.listItem.forEach((a) => {
            if (!b) {
                if (a.idRoot !== observerItem.idRoot) {
                    tempListRoot.push(a)
                } else {
                    b = true;
                }
            }
        })

       this.actionInvisible()

        // this.listItem.forEach(a => {
        //     this._innerValue(a)
        // })

        //this._innerClearState()
        tempListRoot.forEach(e => {
            this._innerAdd(e);
        })
        this.lastActionMoveId = observerItem.id;
        if (action) {
            action.call()
        }

    }
    actionInvisible(){
        let run=false;
        for (let i = 0; i < this.listItem.length; i++) {
            if(this.listItem[0].isDrop){
                run=true
                i++; continue;
            }
            this._innerValue(this.listItem[i])

        }
        this._innerClearState()
    }

    clearClick(callback?:()=>void) {

        this.actionInvisible()
        // this.listItem.forEach(a => {
        //     this._innerValue(a)
        // })
        //
        // this._innerClearState()
        if (callback){
            callback()
        }

    }
}

export const InstanceHub = new MyObserver('root-123-selected', 'item-123-selected')




