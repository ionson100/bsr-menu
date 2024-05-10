export declare class ObserverItem {
    private id;
    private element;
    private idRoot;
    private elementMenu;
    constructor(id: string, element: HTMLElement, idRoot: any, elementMenu: HTMLElement);
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
    _innerValue(o: any): void;
    ClickSelect(tag: any, element: any, funClick: any): void;
    _innerClearState(): void;
    _hasList(item: any): boolean;
    MoveMenu(observerItem: any, action: any): void;
    clearClick(callback: any): void;
}
export declare const InstanceHub: MyObserver;
export {};
