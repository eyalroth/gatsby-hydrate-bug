import React from "react"

const Layout = ({children}) => {
  const time = new Date().getTime()
  console.log(`time: ${time}`)
  return (
    <div className={time}>
        {children}
        <br/>
        {time}
    </div>
  )
}

export default Layout
