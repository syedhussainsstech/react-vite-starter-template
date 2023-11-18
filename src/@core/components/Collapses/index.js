import { Collapse } from "reactstrap"
import PropTypes from "prop-types"

const AppCollapse = ({
  header,
  children,
  open,
  horizontal
}) => {
  return (
    <>
      {header}
      <Collapse isOpen={open} horizontal={horizontal}>
        {children}
      </Collapse>
    </>
  )
}

AppCollapse.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  horizontal: PropTypes.bool
}

export default AppCollapse
