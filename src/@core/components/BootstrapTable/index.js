import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory from "react-bootstrap-table2-filter";
import classNames from "classnames";

import "@styles/react/libs/tables/react-bootstrap-table.scss";
import { FormGroup, Input, Label } from "reactstrap";

const customTotal = (from, to, size) => (
  <span className="pagination-total ms-2">
    Showing {from} to {to} of {size} Records
  </span>
);

const ReactDataTable = ({
  page,
  size,
  data,
  columns,
  type,
  sort,
  setSelection,
  pagination,
  selected = [],
  className,
  responsive,
  rowStyle,
  noTableStriped = true,
  ...rest
}) => {
  const node = useRef();
  const [selectedItem, setSelectedItem] = useState(selected);
  const [currentIndex, setCurrentIndex] = useState([]);
  const [lastIndex, setLastIndex] = useState([]);
  // console.log(selected, selectedItem)

  // useEffect(() => {
  //   setSelection(selected)
  // }, [selectedItem])

  const handleOnSelect = (row, isSelect, rowIndex, { shiftKey, ctrlKey }) => {
    if (type === "multi") {
      if (isSelect) {
        if (ctrlKey) {
          const list = [...selectedItem, row.id];
          const unique = [...new Set(list)];
          setCurrentIndex([rowIndex]);
          setLastIndex([rowIndex]);
          setSelectedItem([...unique]);
          setSelection([...unique]);
        } else if (shiftKey) {
          if (lastIndex.length) {
            let mappedData;
            let lastI;
            let unique;
            if (rowIndex > lastIndex[0]) {
              // asc order
              mappedData = data
                .map((v, i) =>
                  (i <= rowIndex || i <= lastIndex[0]) &&
                    (i >= lastIndex[0] || i >= lastIndex[0])
                    ? v.id
                    : null
                )
                .filter((x) => x !== null);
              lastI = rowIndex;
              const list = [...selectedItem, ...mappedData];
              unique = [...new Set(list)];
            } else {
              // desc order
              mappedData = data
                .map((v, i) =>
                  (i >= rowIndex || i >= lastIndex[0]) &&
                    (i <= lastIndex[0] || i <= lastIndex[0])
                    ? v.id
                    : null
                )
                .filter((x) => x !== null);
              lastI = lastIndex[0];
              const list = [...selectedItem, ...mappedData];
              unique = [...new Set(list)];
            }

            setLastIndex([lastI]);
            setSelectedItem([...unique]);
            setSelection([...unique]);
          } else {
            setLastIndex([rowIndex]);
            setSelectedItem([row.id]);
            setSelection([row.id]);
          }
        } else {
          setLastIndex([rowIndex]);
          setCurrentIndex([rowIndex]);
          setSelectedItem([row.id]);
          setSelection([row.id]);
        }
      } else {
        if (ctrlKey || shiftKey) {
          const unique = [...new Set(selectedItem)];
          const index = selectedItem.indexOf(row.id);
          if (index > -1) {
            unique.splice(index, 1);

            setLastIndex(currentIndex);
            setCurrentIndex([rowIndex]);
            setSelectedItem([...unique]);
            setSelection([...unique]);
          }
        } else {
          setLastIndex([]);
          setCurrentIndex([]);
          setSelectedItem([]);
          setSelection([]);
        }
      }
    } else {
      if (isSelect) {
        setLastIndex([]);
        setCurrentIndex([]);
        setSelectedItem([row.id]);
        setSelection([row.id]);
      } else {
        setLastIndex([]);
        setCurrentIndex([]);
        setSelectedItem([]);
        setSelection([]);
      }
    }
  };

  const selectRow = {
    mode: type === "single" ? "radio" : "checkbox",
    // clickToSelect: type !== undefined ? true : false,
    // bgColor: "#000",
    classes: "selected",
    hideSelectColumn: type !== undefined ? false : true,
    hideSelectAll: true,
    clickToEdit: true,
    selected: selectedItem,
    multipleSelectRow: true,
    selectionHeaderRenderer: ({ indeterminate, ...rest }) => (
      <FormGroup check className="form-check-primary">
        <Input
          {...rest}
          type="checkbox"
          ref={(input) => {
            if (input) input.indeterminate = indeterminate;
          }}
        />
      </FormGroup>
    ),
    selectionRenderer: ({ mode, ...rest }) => (
      <FormGroup
        check={mode}
        className="form-check-primary"
      >
        <Input {...rest} type="checkbox" />
      </FormGroup>
    ),
    onSelect: (row, isSelect) => {
      if (isSelect) {
        setSelectedItem([...selectedItem, row.Id]);
        setSelection([...selectedItem, row.Id])
      } else {
        setSelectedItem(selectedItem.filter(x => x !== row.Id));
        setSelection(selectedItem.filter(x => x !== row.Id));
      }
    },
    // onSelectAll: (isSelect, rows) => {
    //   const ids = rows.map(r => r.id);
    //   setSelectedItem(isSelect ? ids : []);
    // }
  };

  const options = {
    page: page ? page : 1,
    sizePerPage: size ? size : 10,
    paginationSize: 5,
    pageStartIndex: 1,
    alwaysShowAllBtns: true,
    withFirstAndLast: false,
    // showFirstPageNavigator: false,
    // showLastPageNavigator: false,
    // firstPageText: '«',
    // prePageText: '‹',
    // nextPageText: '›',
    // lastPageText: '»',
    showTotal: true,
    // ...(pagination && { paginationTotalRenderer: customTotal }),
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "50",
        value: 50,
      },
      {
        text: "100",
        value: 100,
      },
    ],
  };

  return (
    <div
      className={classNames({
        "react-table-responsive": responsive,
      })}
    >
      <BootstrapTable
        {...rest}
        ref={node}
        bordered={false}
        classes={`${noTableStriped ? 'table-striped ' : ''}${className ?? ''}`}
        bootstrap4
        data={data}
        columns={columns}
        selectRow={selectRow}
        noDataIndication={"No Records Found"}
        pagination={pagination !== null ? paginationFactory(options) : null}
        defaultSorted={sort}
        filter={filterFactory()}
        rowStyle={rowStyle}
      />
    </div>
  );
};

ReactDataTable.propTypes = {
  page: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  data: PropTypes.array.isRequired,
  columns: PropTypes.array,
  responsive: PropTypes.bool,
  noTableStriped: PropTypes.bool,
  // columns: PropTypes.arrayOf(
  //     PropTypes.exact({
  //         isDummyField: PropTypes.bool,
  //         dataField: PropTypes.any,
  //         formatter: PropTypes.func,
  //         hidden: PropTypes.bool
  //     })
  // ).isRequired,
  type: PropTypes.oneOf(["single", "multi"]),
  sort: PropTypes.arrayOf(
    PropTypes.exact({
      dataField: PropTypes.any,
      order: PropTypes.oneOf(["asc", "desc"]),
    })
  ),
  setSelection: PropTypes.func,
  selected: PropTypes.array,
  pagination: PropTypes.any,
  className: PropTypes.string,
  rowStyle: PropTypes.func,
};

export default ReactDataTable;
