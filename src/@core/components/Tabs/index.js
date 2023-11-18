import { useState } from "react"
import {
  Nav,
  NavItem,
  TabContent,
  NavLink,
  TabPane,
  Row,
  Col
} from "reactstrap"
import PropTypes from "prop-types"

const AppTab = ({
  list,
  activeId,
  align,
  firstOpen,
  type
}) => {

  const [active, setActive] = useState(
    activeId ?? firstOpen === false ? -1 : 0
  )

  const toggle = (tab) => {
    setActive(tab)
  }

  return (
    <Row className="nav-tabs-style">
      <Col md={type === "vertical" ? "3" : "12"} sm="12">
        <Nav
          pills
          fill={align === "fill"}
          justified={align === "justify"}
          vertical={type === "vertical"}
          className={align === "center" ? "justify-content-center" : align === "right" ? "justify-content-end" : "justify-content-start"}
        >
          {list.map((data, index) => {
            return (
              <NavItem key={index}>
                <NavLink active={index === active} disabled={data.disabled ?? false} onClick={() => toggle(index)}>{data.header}</NavLink>
              </NavItem>
            )
          })}
        </Nav>
      </Col>
      <Col md={type === "vertical" ? "9" : "12"} sm="12">
        <TabContent activeTab={active} className="py-3">
          {list.map((data, index) => {
            return (
              <TabPane tabId={index} key={index}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.body
                  }}
                ></div>
              </TabPane>
            )
          })}
        </TabContent>
      </Col>
    </Row>
  )
}

AppTab.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      body: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
      disabled: PropTypes.bool
    })
  ).isRequired,
  activeId: PropTypes.number,
  align: PropTypes.oneOf(["fill", "justify", "center", "left", "right"]),
  firstOpen: PropTypes.bool.isRequired,
  type: PropTypes.any
}

export default AppTab
