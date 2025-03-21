import React from 'react'

const UserIcon = ({ className, ...rest }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${className}`}
      {...rest}
    >
      <path
        d='M19.6515 20.4054C20.2044 20.2902 20.5336 19.7117 20.2589 19.2183C19.6533 18.1307 18.6993 17.1749 17.4789 16.4465C15.9071 15.5085 13.9812 15 12 15C10.0188 15 8.09295 15.5085 6.52115 16.4465C5.30072 17.1749 4.34669 18.1307 3.74111 19.2183C3.46641 19.7117 3.79565 20.2902 4.34846 20.4054V20.4054C9.39527 21.4572 14.6047 21.4572 19.6515 20.4054V20.4054Z'
        stroke='#BBBBBB'
        strokeWidth='0.923077'
        strokeLinecap='round'
      />
      <circle cx='12' cy='8' r='5' stroke='#BBBBBB' strokeWidth='0.923077' strokeLinecap='round' />
    </svg>
  )
}

export default UserIcon
