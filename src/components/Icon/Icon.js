import React from 'react'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'

/*
Bulma is compatible with Font Awesome icons.
*/
const Icon = ({
  children
}) =>
  <span className='icon'>
    {children}
  </span>

Icon.displayName = 'Icon'

Icon.propTypes = {
  children: PropTypes.node
}

export default Icon
