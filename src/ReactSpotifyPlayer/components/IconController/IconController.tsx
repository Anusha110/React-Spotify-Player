import React from 'react'

interface IconControllerProps {
   renderIcon: (styles: React.CSSProperties) => JSX.Element
}

const IconController = (props: IconControllerProps) => {
   const { renderIcon } = props
   const styles = { fill: 'red', border: '1px solid white' }
   return <>{renderIcon(styles)}</>
}

export default IconController
