import React from 'react'

function Button({
  children="More News",
  Type,
  w="96",
  backgroundColor = "custom_Orang",
  
  ClassName

}) {
  return (
    <div className={`flex items-stretch items-center	w-${w} justify-center	`}>
      <button type={Type} className={`
      w-32
      h-10
      text-white 
      bg-${backgroundColor} 
      hover:bg-yellow-500 
      focus:outline-none 
      focus:ring-4 
      focus:ring-yellow-300 
      rounded-lg
      font-medium
      text-sm 
      px-5
      py-2.5
      text-center 
      me-2 mb-2 
      dark:focus:ring-yellow-900
      
      ${ClassName}
      `}>{children}</button>
    </div>
  )
}

export default Button
