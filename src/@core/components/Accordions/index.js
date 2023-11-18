import { UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap"
import PropTypes from 'prop-types'

const AppAccordion = ({ list, firstOpen }) => {
  return (
    <UncontrolledAccordion
      open={firstOpen ? "0" : "-1"}
      defaultOpen={firstOpen ? "0" : "-1"}
    >
      {list.map((data, index) => {
        return (
          <AccordionItem key={index}>
            <AccordionHeader targetId={`${index}`}>
              {data.header}
            </AccordionHeader>
            <AccordionBody accordionId={`${index}`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.body
                }}
              ></div>
            </AccordionBody>
          </AccordionItem>
        )
      })}
    </UncontrolledAccordion>
  )
}

AppAccordion.propTypes = {
  list: PropTypes.array.isRequired,
  firstOpen: PropTypes.bool
}

export default AppAccordion
