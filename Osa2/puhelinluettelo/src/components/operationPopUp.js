import React from "react"

const OperationPopUp = ({message}) => {
      
    if (!message)
    {
      return null
    }

    else if (message.includes("delete")) {
      return (
        <div className="redOperationPopUp">
          {message}
        </div>
      )
    }

    else {

      return (
        <div className="greenOperationPopUp">
          {message}
        </div>
      )

    }

  }


export default OperationPopUp
