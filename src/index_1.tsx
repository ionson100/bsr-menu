//  import './index.css'
import React, { Component } from 'react'






interface MyState {
  disabled: boolean
  dropOpen: false
  content: {
    contentLeft: any
    content: any
    contentRight: any
  }
  url: string | undefined
  tag: any
}

/**
 * asas saisioais
 */
 interface MyProps {
  accessKey: string | undefined
  buildContent: any
  /** The submenu opening behavior can be 'move' or 'click'. (mov: mouse move) (click: mouse click) . Default 'move' */
  behavior: 'move' | 'click'
  /** css class menu. default: 'menu-123-item'. */
  className: string
  style: React.CSSProperties | undefined
  children: any
  /** The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually. */
  content?: any | number
  /** The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually. */
  contentLeft: any
  /** The visual content of the menu consists of three horizontal areas: contentLeft - content - contentRight. Can be determined individually. */
  contentRight: any
  /** Sign of an disabled menu, boolean value, default: false */
  disabled: boolean
  id: string | undefined
  /** Only for menu where positionPopup='dropDown'. */
  iconDropOpen: any
  /** Only for menu where positionPopup='dropDown'. */
  iconDropClose: any
  // key: PropTypes.string,
  onClick: (
    tag: any,
    element: HTMLElement,
    isOpen: boolean | undefined
  ) => void | undefined

  /** css class submenu panel. default:'popup-123'. */
  popupClassName: string
  /** Position of the sub menu panel, can take value: ['down', 'top', 'downLeft', 'downRight', 'topRight', 'topLeft', 'dropDown','middleLeft','middleLeft3','middleLeft4','middleLeft5','middleRight','middleRight3','middleRight4','middleRight5']. Default:'down' */
  positionPopup:
    | 'down'
    | 'top'
    | 'downLeft'
    | 'downRight'
    | 'topRight'
    | 'topLeft'
    | 'dropDown'
    | 'middleLeft'
    | 'middleLeft3'
    | 'middleLeft4'
    | 'middleLeft5'
    | 'middleRight'
    | 'middleRight3'
    | 'middleRight4'
    | 'middleRight5'
  // style: stylePropType,
  tabIndex: number | undefined
  title: string | undefined
  tag: any
  url: string | undefined
}

/**
 * @extends {React.Component<Props, {}>}
 */
export const MenuItem = class extends React.Component<MyProps, MyState> {
  static defaultProps: MyProps = {
    url: undefined,
    tag: undefined,
    content: undefined,
    id: undefined,
    children: undefined,
    accessKey: undefined,
    // @ts-ignore
    onClick: undefined,
    contentRight: undefined,
    positionPopup: 'down',
    disabled: false,
    behavior: 'move',
    popupClassName: 'popup-123',
    className: 'menu-123-item',
    contentLeft: undefined,
    title: undefined,
    tabIndex: undefined,
    iconDropClose: undefined,
    iconDropOpen: undefined,
    style: undefined
  }
  static displayName = "MenuItem";



  public readonly id?: string



  constructor(props: Readonly<MyProps>) {
    super(props)
    this.id = this.props.id

  }


  render() {
    return (
      <div>{this.id}</div>
    )
  }
}




