// ** Third Party Components
import { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import ReactPaginate from "react-paginate"

const AppPaginate = ({
  marginPagesDisplayed,
  perPage,
  nextLabel,
  pageRangeDisplayed,
  previousLabel,
  data,
  component,
  size,
  separate,
  initialPage,
  position,
  offset,
  color,
  className
}) => {
  const [itemOffset, setItemOffset] = useState(offset ?? 0)
  const itemsPerPage = perPage

  const endOffset = itemOffset + itemsPerPage
  const currentItems = data.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(data.length / itemsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
  }

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
    [className ?? ""]: className
  })

  return (
    <>
      {component(currentItems)}
      <ReactPaginate
        nextLabel={nextLabel ?? ""}
        pageCount={pageCount ?? 10}
        breakLabel="..."
        previousLabel={previousLabel ?? ""}
        pageRangeDisplayed={pageRangeDisplayed ?? 2}
        marginPagesDisplayed={marginPagesDisplayed ?? 2}
        activeClassName="active"
        pageClassName="page-item"
        breakClassName="page-item"
        onPageChange={handlePageClick}
        nextLinkClassName="page-link"
        initialPage={initialPage ?? 0}
        pageLinkClassName="page-link"
        nextClassName={separate ? "page-item next-item" : "page-item next"}
        previousClassName={separate ? "page-item prev-item" : "page-item prev"}
        breakLinkClassName="page-link"
        previousLinkClassName="page-link"
        containerClassName={classes}
      />
    </>
  )
}

AppPaginate.propTypes = {
  marginPagesDisplayed: PropTypes.number,
  perPage: PropTypes.number.isRequired,
  nextLabel: PropTypes.string,
  pageRangeDisplayed: PropTypes.number,
  previousLabel: PropTypes.string,
  data: PropTypes.any.isRequired,
  component: PropTypes.any.isRequired,
  size: PropTypes.oneOf(["sm", "lg"]),
  separate: PropTypes.bool,
  initialPage: PropTypes.number,
  position: PropTypes.oneOf(["start", "end", "center"]),
  offset: PropTypes.number,
  color: PropTypes.oneOf(["success", "warning", "danger", "info", "primary"]),
  className: PropTypes.string
}

export default AppPaginate
