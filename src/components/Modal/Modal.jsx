import { Component } from "react";
import css from './modal.module.css'
import React from "react-dom";


export default class Modal extends Component{
    onClose = eve => {
            if (eve.code === 'Escape') {
                this.props.onClose();
            }
    }
    componentDidMount() {
        window.addEventListener('keydown', this.onClose)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onClose)
    }

    clickBackDrop = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }
    render() {
        return (
            <div className={css.modalBackdrop} onClick={this.clickBackDrop}>
                <div className={css.modalContent}>{this.props.children}</div>
            </div>
        )
    }
}
