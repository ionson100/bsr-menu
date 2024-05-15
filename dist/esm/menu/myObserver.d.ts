import { MenuItem } from "./menu_item";
interface TypeObserver {
    id: string;
    element: HTMLElement;
    idRoot: any;
    elementMenu: HTMLElement;
    isDrop: boolean;
}
export declare class ObserverItem {
    id: string;
    element: HTMLElement;
    idRoot: string;
    elementMenu: HTMLElement;
    isDrop: boolean;
    constructor(param: TypeObserver);
}
declare class MyObserver {
    private root?;
    private listItem;
    private lastActionMoveId;
    private lastActionAddId;
    classRoot: string;
    classItem: string;
    constructor(classRoot: string, classItem: string);
    Add(observerItem: any): void;
    _innerAdd(observerItem: any): void;
    _innerValue(o: ObserverItem): void;
    ClickSelect(e: InstanceType<typeof MenuItem>, funClick: any): void;
    _innerClearState(): void;
    _hasList(item: any): boolean;
    MoveMenu(observerItem: ObserverItem, action: any): void;
    actionInvisible(): void;
    clearClick(callback?: () => void): void;
}
export declare const InstanceHub: MyObserver;
export {};
