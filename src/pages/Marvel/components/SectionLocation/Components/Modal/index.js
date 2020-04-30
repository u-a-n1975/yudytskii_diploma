import { ReactSVG } from "react-svg";
import classNames from "classnames";
import ReactDOM from "react-dom";
import types from "prop-types";
import React from "react";

import close from "../../../../../../assets/SVG/close.svg";

import "./styles.scss";

export class Modal extends React.Component {
  static propTypes = {
    children: types.node.isRequired,
    onClose: types.func,
    isOpen: types.bool.isRequired,
    title: types.string,
  };

  static defaultProps = {};

  element = null;

  componentDidMount() {
    this.element = document.getElementById("root");

    document.body.setAttribute("class", "overflow-hidden");
    this.element.setAttribute("class", "with-blur");
  }

  componentWillUnmount() {
    document.body.removeAttribute("class");
    this.element.removeAttribute("class");
  }

  enhancedClose = (e) => {
    e.stopPropagation();
    this.props.onClose();
  };

  render() {
    const { classNamess, children, isOpen, title } = this.props;

    const modify = classNames({
      modal: true,
      "modal--is-open": isOpen,
    });

    return ReactDOM.createPortal(
      isOpen ? (
        <div className={modify}>
          <div className={`modal--content ${classNamess}__modal--content`}>
            <div className="modal--header">
              {!!title && <p className="modal--header-title">{title}</p>}
            </div>
            <div
              className="modal--close-icon-wrapper"
              onClick={this.enhancedClose}
            >
              <ReactSVG className="modal--close-icon" src={close} />
            </div>
            {children}
          </div>
          <div className="modal--backdrop" onClick={this.enhancedClose} />
        </div>
      ) : null,
      document.body
    );
  }
}
