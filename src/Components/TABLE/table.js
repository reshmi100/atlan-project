import React from "react";
import "./table.css";
import PropTypes from "prop-types";
const { Component } = React;

export default class Table extends Component {
    constructor(props) {
        // Initial props:
        super(props);

        // Initial state:
        this.state = {
            columns: Object.keys(this.props.rows[0]),
            tableHeight: this.props.rowHeight * this.props.rows.length,
            scroll: {
                top: 0,
                index: 0,
                end: Math.ceil((this.props.tableHeight * 2) / this.props.rowHeight)
            }
        };

        // Event handlers:
        this.onScroll = this.onScroll.bind(this);
        this.scrollInterval = null;
    }

    onScroll({ target }) {
        let state = this.state;

        let scrollTop = target.scrollTop;
        let rowHeight = this.props.rowHeight;
        let tableHeight = this.props.tableHeight;
        let index = Math.floor(scrollTop / rowHeight);
        let padding = Math.ceil(
            (this.props.tableHeight * 2) / this.props.rowHeight
        );
        state.scroll.index = index - padding < 0 ? index : index - padding;
        state.scroll.end = index + Math.ceil((tableHeight * 2) / rowHeight);
        state.scroll.top = (scrollTop / rowHeight) * rowHeight;

        this.setState(state);
    }

    generateRows() {
        let columns = this.state.columns;
        let rowHeight = this.props.rowHeight;
        let rows = this.props.rows;
        let index = this.state.scroll.index;
        let items = [];

        do {
            if (index >= rows.length) {
                index = rows.length;
                break;
            }

            const rowAttrs = {
                style: {
                    position: "absolute",
                    top: index * rowHeight,
                    left: 0,
                    height: rowHeight,
                    lineHeight: `${rowHeight}px`
                },
                className: `tr ${index % 2 === 0 ? "tr-odd" : "tr-even"}`
            };

            items.push(
                <tr {...rowAttrs} key={index}>
                    {columns.map( (column, i) => <td key={i}>{rows[index][column]}</td>)}
                </tr>
            );

            index++;
        } while (index < this.state.scroll.end);

        return items;
    }

    render() {
        const attrs = {
            wrapper: { className: "wrapper" },
            tr: { className: "tr" },
            content: {
                className: "table-content",
                style: {
                    height:
                        this.props.tableHeight > this.state.tableHeight
                            ? this.state.tableHeight + 2
                            : this.props.tableHeight
                },
                onScroll: this.onScroll
            },
            tbody: {
                style: {
                    position: "relative",
                    display: "flex",
                    height: this.state.tableHeight,
                    maxHeight: this.state.tableHeight,
                    width: "100%",
                }
            }
        };

        return (
            <div {...attrs.wrapper}>
                <table>
                    <thead>
                    <tr {...attrs.tr}>
                        {this.state.columns.map((name, i) => (
                            <th key={i}>{name}</th>
                        ))}
                    </tr>
                    </thead>
                </table>
                <table {...attrs.content}>
                    <tbody {...attrs.tbody}>{this.generateRows()}</tbody>
                </table>
            </div>
        );
    }
}

Table.defaultProps = {
    rowHeight: 35,
    tableHeight: 500
};

Table.propTypes = {
    rowHeight: PropTypes.number.isRequired,
    tableHeight: PropTypes.number.isRequired,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired
};
