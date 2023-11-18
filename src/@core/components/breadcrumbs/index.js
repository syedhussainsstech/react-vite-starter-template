// ** Third Party Components
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

const BreadCrumbs = (props) => {
  // ** Props
  const { page, title, description, icon, close } = props;

  return (
    <div className="content-header">
      <div className="content-header-left mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <div className="cs-breadcrumbs d-flex align-items-center">
              {page && (
                <h2 className="fw-bolder">
                  <a className="breadcrumb-page-redirect" onClick={close}>
                    {icon ? <span className="me-50">{icon}</span> : null}
                    {page}
                  </a>
                </h2>
              )}
              <h2 className="fw-bolder">
                {!page && icon ? <span className="me-50">{icon}</span> : null}
                {title}
              </h2>
            </div>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BreadCrumbs;

// ** PropTypes
BreadCrumbs.propTypes = {
  title: Proptypes.string,
  page: Proptypes.string,
  discription: Proptypes.string,
  icon: Proptypes.node,
  // data: Proptypes.arrayOf(
  //   Proptypes.shape({
  //     link: Proptypes.string,
  //     title: Proptypes.string.isRequired,
  //   })
  // ),
};
