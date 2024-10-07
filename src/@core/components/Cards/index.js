import React, { useState } from "react";
import { ChevronDown } from "react-feather";
import { Card, CardBody, CardHeader, Collapse } from "reactstrap";
import classNames from "classnames";
import PropTypes from "prop-types";

const AppCard = ({
  children,
  title,
  noSpace,
  collapse,
  noShadow,
  noBg,
  open,
  noMargin,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div>
      <Card
        className={classNames({
          "shadow-none": noShadow,
          "bg-transparent": noBg,
          "m-0": noMargin
        })}
      >
        {title ? (
          <CardHeader tag="h4" className={collapse && isOpen ? "open" : ""}>
            {title}
            {collapse ? (
              <div className="action-icons" onClick={() => setIsOpen(!isOpen)}>
                <ChevronDown size="14" />
              </div>
            ) : null}
          </CardHeader>
        ) : null}
        {collapse ? (
          <Collapse isOpen={isOpen}>
            <CardBody className={classNames({ "p-0": noSpace })}>
              {children}
            </CardBody>
          </Collapse>
        ) : (
          <CardBody className={classNames({ "p-0": noSpace })}>
            {children}
          </CardBody>
        )}
      </Card>
    </div>
  );
};

AppCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  noSpace: PropTypes.bool,
  collapse: PropTypes.bool,
  open: PropTypes.bool,
  noShadow: PropTypes.bool,
  noBg: PropTypes.bool,
  noMargin: PropTypes.bool
};

export default AppCard;
