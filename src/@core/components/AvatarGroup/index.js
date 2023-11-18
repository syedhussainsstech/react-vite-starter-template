// ** React Imports
import { Fragment } from "react"

// ** Third Party Components
import PropTypes from "prop-types"
import classnames from "classnames"

// ** Reactstrap Imports
import { UncontrolledTooltip } from "reactstrap"

// ** Custom Components Imports
import Avatar from "@components/Avatar"

const AvatarGroup = (props) => {
  // ** Props
  const { data, tag, className } = props

  // ** Conditional Tag
  const Tag = tag ? tag : "div"

  // ** Render Data
  const renderData = () => {
    return data.map((item, i) => {
      const ItemTag = item.tag ? item.tag : "div"
      return (
        <Fragment key={i}>
          {item.title ? (
            <UncontrolledTooltip
              placement={item.placement}
              target={item.title.split(" ").join("-")}
            >
              {item.title}
            </UncontrolledTooltip>
          ) : null}
          {!item.meta ? (
            <Avatar
              tag={ItemTag}
              className={classnames("pull-up", {
                [item.className]: item.className
              })}
              {...(item.title ? { id: item.title.split(" ").join("-") } : {})}
              {...item}
              title={undefined}
              meta={undefined}
            />
          ) : null}
          {item.meta ? (
            <ItemTag className="d-flex align-items-center ps-1">
              {item.meta}
            </ItemTag>
          ) : null}
        </Fragment>
      )
    })
  }

  return (
    <Tag
      className={classnames("avatar-group", {
        [className]: className
      })}
    >
      {renderData()}
    </Tag>
  )
}

export default AvatarGroup

// ** PropTypes
AvatarGroup.propTypes = {
  data: PropTypes.array.isRequired,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}
