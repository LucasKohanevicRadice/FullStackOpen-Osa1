import React from "react"

const OperationPopUp = ({message}) => {
      
    if (!message)
    {
      return null
    }

    else if (message.includes("delete") || message.includes("Error")) {
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
