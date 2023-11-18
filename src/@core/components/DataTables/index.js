import { forwardRef, useState } from "react";
import DataTable from "react-data-table-component";
import { Col, Input, Label, Row, Spinner } from "reactstrap";
import { ChevronDown } from "react-feather";
import ReactPaginate from "react-paginate";
import classNames from "classnames";
import PropTypes from "prop-types";

// ** Styles
import "@styles/react/libs/tables/react-dataTable-component.scss";

// ** Checkbox
const BootstrapCheckbox = forwardRef((props, ref) => (
  <div className="form-check mb-0">
    <input {...props} ref={ref} className="form-check-input"></input>
    {/* <Input ref={ref} {...props} /> */}
  </div>
));

// const selectProps = {
//   indeterminate: (isIndeterminate: boolean) => isIndeterminate,
// }

function AppDataTable(props) {
  // ** Props and States
  const {
    separate,
    data,
    nextLabel,
    previousLabel,
    perPage,
    pageRangeDisplayed,
    marginPagesDisplayed,
    size,
    color,
    position,
    defaultPagination,
    className,
    search,
  } = props;
  const [rowsPerPage, setRowsPerPage] = useState(perPage ?? 5);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // ** Function to handle filter
  const handleFilter = (e) => {
    const value = e.target.value;
    let updatedData = [];
    setSearchValue(value);

    if (value.length) {
      updatedData = data.filter(
        (item) =>
          item &&
          JSON.stringify(item).toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(updatedData);
      setSearchValue(value);
    }
  };

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };

  // ** Class for Tables
  const classes = classNames("pagination react-paginate", {
    "pagination-sm": size === "sm",
    "pagination-lg": size === "lg",
    "pagination-success": color === "success",
    "pagination-warning": color === "warning",
    "pagination-info": color === "info",
    "pagination-danger": color === "danger",
    "justify-content-start": position === "start",
    "justify-content-end": position === "end",
    "justify-content-center": position === "center",
    [className ?? ""]: className,
  });

  // ** Function to handle per page
  const handlePerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value));
  };

  // ** Custom Pagination
  const CustomPagination = () => (
    <div className={separate ? 'separate-pagination' : 'mt-2'}>
      <ReactPaginate
        nextLabel={nextLabel ?? ""}
        previousLabel={previousLabel ?? ""}
        forcePage={currentPage}
        onPageChange={(page) => handlePagination(page)}
        pageCount={
          searchValue.length
            ? Math.ceil(filteredData.length / (rowsPerPage ?? 5))
            : Math.ceil(data.length / (rowsPerPage ?? 5)) || 1
        }
        breakLabel="..."
        pageRangeDisplayed={pageRangeDisplayed ?? 2}
        marginPagesDisplayed={marginPagesDisplayed ?? 2}
        activeClassName="active"
        pageClassName="page-item"
        breakClassName="page-item"
        nextLinkClassName="page-link"
        pageLinkClassName="page-link"
        // initialPage={props.initialPage ?? 0}
        breakLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextClassName={separate ? "page-item next-item" : "page-item next"}
        previousClassName={separate ? "page-item prev-item" : "page-item prev"}
        containerClassName={classes}
        className={className}
      />
    </div>
  );

  return (
    <>
      {search ? (
        <Row className="justify-content-between mx-0">
          <Col
            className="d-flex align-items-center justify-content-start mt-1"
            sm="12"
            md="4"
          >
            {!defaultPagination ? (
              <div className="d-flex align-items-center">
                <Label for="sort-select">show</Label>
                <Input
                  style={{ height: 30, padding: "0 10px" }}
                  className="dataTable-select"
                  type="select"
                  id="sort-select"
                  value={rowsPerPage}
                  onChange={(e) => handlePerPage(e)}
                >
                  <option value={perPage ?? 5}>{perPage ?? 5}</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={75}>75</option>
                  <option value={100}>100</option>
                </Input>
                <Label for="sort-select">entries</Label>
              </div>
            ) : null}
          </Col>
          <Col
            className="d-flex align-items-center justify-content-end mt-1"
            md="4"
            sm="12"
          >
            <Label className="me-1" for="search-input">
              Search
            </Label>
            <Input
              className="dataTable-filter mb-1"
              type="search"
              bsSize="sm"
              placeholder="Search..."
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>
      ) : null}
      <DataTable
        {...props}
        paginationPerPage={rowsPerPage ?? 5}
        // selectableRowsComponentProps={selectProps}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={!defaultPagination ? CustomPagination : undefined}
        selectableRowsComponent={BootstrapCheckbox}
        sortIcon={<ChevronDown size={10} />}
        progressComponent={
          <div className="p-3">
            <Spinner color="primary" />
          </div>
        }
        data={searchValue.length ? filteredData : data}
      />
    </>
  );
}

AppDataTable.propTypes = {
  separate: PropTypes.bool,
  data: PropTypes.array.isRequired,
  nextLabel: PropTypes.string,
  previousLabel: PropTypes.string,
  perPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pageRangeDisplayed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginPagesDisplayed: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "success",
    "info",
    "danger",
    "dark",
    "light",
  ]),
  position: PropTypes.oneOf(["start", "end", "center"]),
  defaultPagination: PropTypes.bool,
  className: PropTypes.string,
  search: PropTypes.bool,
};

export default AppDataTable;
