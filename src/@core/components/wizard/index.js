// // ** React Imports
// import { useEffect, useState, Fragment, forwardRef } from 'react'

// // ** Third Party Components
// import Stepper from 'bs-stepper'
// import classnames from 'classnames'
// import { PropTypes } from 'prop-types'
// import { ChevronRight } from 'react-feather'

// // ** Styles
// import 'bs-stepper/dist/css/bs-stepper.min.css'
// import '../../../@core/scss/base/plugins/forms/form-wizard.scss'

// const Wizard = forwardRef((props, ref) => {
//   // ** Props
//   const {
//     type,
//     steps,
//     options,
//     instance,
//     separator,
//     className,
//     headerClassName,
//     contentClassName,
//     contentWrapperClassName
//   } = props

//   // ** State
//   const [activeIndex, setActiveIndex] = useState(0)

//   // ** Vars
//   let stepper = null

//   // ** Step change listener on mount
//   useEffect(() => {
//     stepper = new Stepper(ref.current, options)

//     ref.current.addEventListener('shown.bs-stepper', function (event) {
//       setActiveIndex(event.detail.indexStep)
//     })

//     if (instance) {
//       instance(stepper)
//     }
//   }, [])

//   // ** Renders Wizard Header
//   const renderHeader = () => {
//     return steps.map((step, index) => {
//       return (
//         <Fragment key={step.id}>
//           {index !== 0 && index !== steps.length ? <div className='line'>{separator}</div> : null}
//           <div
//             className={classnames('step', {
//               crossed: activeIndex > index,
//               active: index === activeIndex
//             })}
//             data-target={`#${step.id}`}
//           >
//             <button type='button' className='step-trigger' disabled={step.disabled}>
//               <span className='bs-stepper-box'>{step.icon ? step.icon : index + 1}</span>
//               <span className='bs-stepper-label'>
//                 <span className='bs-stepper-title'>{step.title}</span>
//                 {step.subtitle ? <span className='bs-stepper-subtitle'>{step.subtitle}</span> : null}
//               </span>
//             </button>
//           </div>
//         </Fragment>
//       )
//     })
//   }

//   // ** Renders Wizard Content
//   const renderContent = () => {
//     return steps.map((step, index) => {
//       return (
//         <div
//           className={classnames('content', {
//             [contentClassName]: contentClassName,
//             'active dstepper-block': activeIndex === index
//           })}
//           id={step.id}
//           key={step.id}
//         >
//           {activeIndex === index && step.content}
//         </div>
//       )
//     })
//   }

//   return (
//     <div
//       ref={ref}
//       className={classnames('bs-stepper', {
//         [className]: className,
//         vertical: type === 'vertical',
//         'vertical wizard-modern': type === 'modern-vertical',
//         'wizard-modern': type === 'modern-horizontal'
//       })}
//     >
//       <div className={classnames('bs-stepper-header', { [headerClassName]: headerClassName })}>{renderHeader()}</div>
//       <div className={classnames('bs-stepper-content', { [contentWrapperClassName]: contentWrapperClassName })}>
//         {renderContent()}
//       </div>
//     </div>
//   )
// })

// export default Wizard

// // ** Default Props
// Wizard.defaultProps = {
//   options: {},
//   type: 'horizontal',
//   separator: <ChevronRight size={17} />
// }

// // ** PropTypes
// Wizard.propTypes = {
//   type: PropTypes.string,
//   instance: PropTypes.func,
//   options: PropTypes.object,
//   className: PropTypes.string,
//   separator: PropTypes.element,
//   headerClassName: PropTypes.string,
//   contentClassName: PropTypes.string,
//   contentWrapperClassName: PropTypes.string,
//   steps: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       subtitle: PropTypes.string,
//       icon: PropTypes.any,
//       content: PropTypes.any.isRequired
//     })
//   ).isRequired
// }

import { useEffect, useState, Fragment, forwardRef, useRef } from 'react'
import Stepper from 'bs-stepper'
import classnames from 'classnames'
import { PropTypes } from 'prop-types'
import { ChevronRight } from 'react-feather'
import 'bs-stepper/dist/css/bs-stepper.min.css'
import '../../../@core/scss/base/plugins/forms/form-wizard.scss'

// Mobile view breakpoint
const MOBILE_BREAKPOINT = 560

const Wizard = forwardRef((props, ref) => {
  const {
    type,
    steps,
    options,
    instance,
    separator,
    className,
    headerClassName,
    contentClassName,
    contentWrapperClassName,
    isMobileView,
    setIsMobileView
  } = props

  const [activeIndex, setActiveIndex] = useState(0)
  // const [isMobileView, setIsMobileView] = useState(window.innerWidth <= MOBILE_BREAKPOINT)
  const [clickedButtonIndex, setClickedButtonIndex] = useState(null)

  // Refs for each button to enable scrolling
  const buttonRefs = useRef([])

  let stepper = null

  useEffect(() => {
    stepper = new Stepper(ref.current, options)

    ref.current.addEventListener('shown.bs-stepper', function (event) {
      setActiveIndex(event.detail.indexStep)
    })

    if (instance) {
      instance(stepper)
    }

    // Handle resize event to toggle mobile view
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= MOBILE_BREAKPOINT)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // ** Handle button click and scroll to the center of the screen
  const handleButtonClick = (index) => {
    setClickedButtonIndex(index)

    // Scroll the button into view and center it
    if (buttonRefs.current[index]) {
      buttonRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start',   
        inline: 'start' 
      })
    }
  }

  // ** Renders Wizard Header
  const renderHeader = () => {
    return steps.map((step, index) => (
      <Fragment key={step.id}>
        {index !== 0 && index !== steps.length ? <div className="line">{separator}</div> : null}
        <div
          className={classnames('step', {
            crossed: activeIndex > index,
            active: index === activeIndex
          })}
          data-target={`#${step.id}`}
        >
          <button
            ref={(el) => (buttonRefs.current[index] = el)} 
            type="button"
            className={classnames('step-trigger', {
              'full-width-button': isMobileView,
              'clicked-button': clickedButtonIndex === index 
            })}
            disabled={step.disabled}
            onClick={() => handleButtonClick(index)} 
          >
            <span className="bs-stepper-box">{step.icon ? step.icon : index + 1}</span>
            <span className="bs-stepper-label">
              <span className="bs-stepper-title">{step.title}</span>
              {step.subtitle ? <span className="bs-stepper-subtitle">{step.subtitle}</span> : null}
            </span>
          </button>
        </div>
      </Fragment>
    ))
  }

  // ** Renders Wizard Content
  const renderContent = () => {
    return steps.map((step, index) => (
      <div
        className={classnames('content', {
          [contentClassName]: contentClassName,
          'active dstepper-block': activeIndex === index
        })}
        id={step.id}
        key={step.id}
      >
        {activeIndex === index && step.content}
      </div>
    ))
  }

  return (
    <div
      ref={ref}
      className={classnames('bs-stepper', {
        [className]: className,
        vertical: type === 'vertical',
        'vertical wizard-modern': type === 'modern-vertical',
        'wizard-modern': type === 'modern-horizontal'
      })}
    >
      <div className={classnames('bs-stepper-header', { [headerClassName]: headerClassName })}>
        {renderHeader()}
      </div>
      <div className={classnames('bs-stepper-content', { [contentWrapperClassName]: contentWrapperClassName })}>
        {renderContent()}
      </div>
    </div>
  )
})

export default Wizard

// ** Default Props
Wizard.defaultProps = {
  options: {},
  type: 'horizontal',
  separator: <ChevronRight size={17} />
}

// ** PropTypes
Wizard.propTypes = {
  type: PropTypes.string,
  instance: PropTypes.func,
  options: PropTypes.object,
  className: PropTypes.string,
  separator: PropTypes.element,
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  contentWrapperClassName: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      icon: PropTypes.any,
      content: PropTypes.any.isRequired
    })
  ).isRequired
}
