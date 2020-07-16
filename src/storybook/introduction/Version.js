import React from 'react'

import packageJSON from '../../../package.json'

const Version = () => <span>{packageJSON.version}</span>

export default Version
