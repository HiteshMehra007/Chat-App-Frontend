import React from 'react'

const Message = ({ flag ,text}) => {
  return (
    <div className={`px-4 py-2 ${ (flag) ? "bg-slate-200" : "bg-white"}`}>
        {text}
    </div>
  )
}

export default Message;