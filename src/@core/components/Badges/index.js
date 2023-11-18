import classNames from "classnames"
import { Bell } from "react-feather"
import { Badge } from "reactstrap"
import PropTypes from "prop-types"

const AppBadge = ({
  color,
  light,
  children,
  className,
  isBlock,
  pill,
  notification,
  iconSize,
  glow
}) => {
  return (
    <>
      {notification ? (
        <div className={classNames("position-relative", {
          "d-inline-block": !isBlock
        })}>
          <Badge
            pill
            color={light ? `light-${color}` : color}
            className={classNames("badge-up", {
              "d-block": isBlock,
              [className]: className
            })}
          >
            {children}
          </Badge>
          <Bell className={`text-${color}`} size={iconSize ?? 22} />
        </div>
      ) : (
        <Badge
          color={light ? `light-${color}` : color}
          className={classNames({
            "d-block": isBlock,
            [className]: className,
            "badge-glow": glow
          })}
          pill={pill}
        >
          {children}
        </Badge>
      )}
    </>
  )

}

AppBadge.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger", "info", "warning", "dark"]).isRequired,
  light: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isBlock: PropTypes.bool,
  pill: PropTypes.bool,
  notification: PropTypes.bool,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  glow: PropTypes.bool
}

export default AppBadge
