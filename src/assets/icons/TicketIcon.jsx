import React from 'react'

const TicketIcon = ({ width, className, strokeColor, ...rest }) => {
  return (
    <svg
      className={`${className}`}
      {...rest}
      width={width ? width : '22'}
      height='18'
      viewBox='0 0 22 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.005 1H8.99507C5.21515 1 3.32518 1 2.15021 2.17198C1.34022 2.97796 1.08923 4.12294 1.01023 5.9889C0.995231 6.35889 0.987231 6.54489 1.05623 6.66788C1.12623 6.79088 1.40122 6.94588 1.95321 7.25387C2.26414 7.42721 2.52314 7.68044 2.70344 7.98739C2.88374 8.29433 2.9788 8.64385 2.9788 8.99984C2.9788 9.35582 2.88374 9.70534 2.70344 10.0123C2.52314 10.3192 2.26414 10.5725 1.95321 10.7458C1.40122 11.0548 1.12523 11.2088 1.05623 11.3318C0.987231 11.4548 0.995231 11.6398 1.01123 12.0098C1.08923 13.8767 1.34122 15.0217 2.15021 15.8277C3.32418 16.9997 5.21415 16.9997 8.99507 16.9997H13.005C16.7849 16.9997 18.6749 16.9997 19.8498 15.8277C20.6598 15.0217 20.9108 13.8767 20.9898 12.0108C21.0048 11.6408 21.0128 11.4548 20.9438 11.3318C20.8738 11.2088 20.5988 11.0548 20.0468 10.7458C19.7359 10.5725 19.4769 10.3192 19.2966 10.0123C19.1163 9.70534 19.0213 9.35582 19.0213 8.99984C19.0213 8.64385 19.1163 8.29433 19.2966 7.98739C19.4769 7.68044 19.7359 7.42721 20.0468 7.25387C20.5988 6.94588 20.8748 6.79088 20.9438 6.66788C21.0128 6.54489 21.0048 6.35989 20.9888 5.9889C20.9108 4.12294 20.6588 2.97896 19.8498 2.17198C18.6759 1 16.7859 1 13.005 1Z'
        stroke='#282828'
        strokeWidth='1.5'
      />
      <path d='M8 11.9999L13.9999 6' stroke='#282828' strokeWidth='1.5' strokeLinecap='round' />
      <path
        d='M14.4999 11.4999C14.4999 11.7651 14.3945 12.0194 14.207 12.207C14.0194 12.3945 13.7651 12.4999 13.4999 12.4999C13.2347 12.4999 12.9803 12.3945 12.7928 12.207C12.6053 12.0194 12.4999 11.7651 12.4999 11.4999C12.4999 11.2347 12.6053 10.9803 12.7928 10.7928C12.9803 10.6053 13.2347 10.4999 13.4999 10.4999C13.7651 10.4999 14.0194 10.6053 14.207 10.7928C14.3945 10.9803 14.4999 11.2347 14.4999 11.4999ZM9.49996 6.49998C9.49996 6.76519 9.3946 7.01954 9.20707 7.20707C9.01954 7.3946 8.76519 7.49996 8.49998 7.49996C8.23477 7.49996 7.98042 7.3946 7.79289 7.20707C7.60535 7.01954 7.5 6.76519 7.5 6.49998C7.5 6.23477 7.60535 5.98042 7.79289 5.79289C7.98042 5.60535 8.23477 5.5 8.49998 5.5C8.76519 5.5 9.01954 5.60535 9.20707 5.79289C9.3946 5.98042 9.49996 6.23477 9.49996 6.49998Z'
        fill='#282828'
      />
    </svg>
  )
}

export default TicketIcon
