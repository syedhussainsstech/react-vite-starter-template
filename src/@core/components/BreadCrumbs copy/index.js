import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import PropTypes from "prop-types"

// interface BreadCrumbTypeFace {
//   type: "slash" | "dots" | "pipes" | "chevron" | "dashes";
//   list: Array<{ name: string; isLink: boolean; link?: string }>;
// }

const BreadCrumbs = ({ type, list }) => {
  return (
    <Breadcrumb listClassName={`breadcrumb-${type}`}>
      {list.map((data, index) => {
        return (
          <Fragment key={index}>
            {data.isLink ? (
              <BreadcrumbItem>
                <Link to={data.link ?? "#"}> {data.name} </Link>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem active>
                <span> {data.name} </span>
              </BreadcrumbItem>
            )}
          </Fragment>
        )
      })}
    </Breadcrumb>
  )
}

BreadCrumbs.propTypes = {
  type: PropTypes.oneOf(["slash", "dots", "pipes", "chevron", "dashes"]),
  list: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      isLink: PropTypes.bool.isRequired,
      link: PropTypes.string
    })
  )
}

export default BreadCrumbs
