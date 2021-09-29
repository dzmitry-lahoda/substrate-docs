import cx from 'classnames'
import React from 'react'
import { LocalizedLink } from 'gatsby-theme-i18n'

interface PrimaryFixedButtonProps {
  children: string
  link?: string
  fullWidth?: boolean
  onClick: any
}

export function PrimaryFixedButton({
  children,
  link,
  fullWidth = false,
  onClick,
}: PrimaryFixedButtonProps) {
  return (
    <LocalizedLink className="cursor-pointer" to={link}>
      <div
        onClick={onClick}
        className={cx(
          'group bg-substrateGreen inline-flex relative rounded-md overflow-hidden',
          {
            'w-full justify-center': fullWidth,
          }
        )}
      >
        <p className="font-bold text-white mb-0 mx-6 py-3 group-hover:ml-4 group-hover:mr-8 transition-all">
          {children}
        </p>
        <div className="bg-substrateGreen-dark absolute flex px-1 -right-5 h-full group-hover:-translate-x-5 transition-transform fill-current text-white">
          <svg
            className="self-center"
            width="11"
            height="8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 11 8.01"
          >
            <path d="M6.69,1.7A1.07,1.07,0,0,1,6.43,1,1.06,1.06,0,0,1,6.7.29.89.89,0,0,1,7.34,0,.88.88,0,0,1,8,.28l2.75,3A1.08,1.08,0,0,1,11,4a1.06,1.06,0,0,1-.27.71L8,7.7a.83.83,0,0,1-1,.23.84.84,0,0,1-.31-.22,1.16,1.16,0,0,1-.2-.32A1.06,1.06,0,0,1,6.41,7a1,1,0,0,1,.07-.39,1,1,0,0,1,.21-.32L7.87,5H.92A.86.86,0,0,1,.27,4.7,1.06,1.06,0,0,1,0,4a1.08,1.08,0,0,1,.27-.71A.89.89,0,0,1,.92,3h7Z" />
          </svg>
        </div>
      </div>
    </LocalizedLink>
  )
}
