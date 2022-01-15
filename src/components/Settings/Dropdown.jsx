import React, { useState } from "react";
import FontAwesome from "react-fontawesome";
import "./Dropdown.css";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isListOpen: false,
            headerTitle: this.props.title
        }
    }

    toggleList = () => {
        this.setState(prevState => ({
            isListOpen: !prevState.isListOpen
        }))
    }

    selectItem = (item) => {
        const { resetThenSet } = this.props;
        const { title, id, key } = item;

        this.setState({
            headerTitle: title,
            isListOpen: false,
        }, () => resetThenSet(id));
    }

    static getDerivedStateFromProps(nextProps) {
        const {list, title } = nextProps;
        const selectedItem = list.filter((item) => item.selected);

        if (selectedItem.length)  {
            return {
                headerTitle: selectedItem[0].title,
            };
        }
        
        return { headerTitle: title };
    }

    close = () => {
        this.setState({
            isListOpen: false,
        });
    }

    componentDidUpdate() {
        const { isListOpen } = this.state;

        setTimeout(() => {
            if (isListOpen) {
                window.addEventListener('click', this.close)
            }
            else {
                window.removeEventListener('click', this.close)
            }
        }, 0)
    }

    render() {
        const { isListOpen, headerTitle } = this.state;
        const { list } = this.props;

        return (
            <div className="ddt-wrapper">
                <button
                    type="button"
                    className="ddt-header"
                    onClick={this.toggleList}
                >
                    <div className="ddt-header-title">{headerTitle}</div>
                    {isListOpen
                        ? <FontAwesome name="angle-up" size="2x" />
                        : <FontAwesome name="angle-down" size="2x" />}
                </button>
                {isListOpen && (
                    <div
                        role="list"
                        className="ddt-list"
                    >
                        {list.map((item) => (
                            <button
                                type="button"
                                className="ddt-list-item"
                                key={item.id}
                                onClick={() => this.selectItem(item)}
                            >
                                {item.title}
                                {' '}
                                {item.selected && <FontAwesome name="check" />}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default Dropdown;
