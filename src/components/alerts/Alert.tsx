import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import classNames from 'classnames'
import { CVE_DETAILS } from '../../constants/strings'
//import { solution } from '../../lib/words'
import { answer } from '../../constants/cvearray'

type Props = {
  isOpen: boolean
  message: string
  variant?: 'success' | 'error' | 'failed'
  topMost?: boolean
}

export const Alert = ({
  isOpen,
  message,
  variant = 'error',
  topMost = false,
}: Props) => {
  const classes = classNames(
    'fixed z-20 top-14 left-1/2 transform -translate-x-1/2 max-w-sm shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden',
    {
      'bg-rose-500 text-white': variant === 'error' || variant === 'failed',
      'bg-blue-500 text-white': variant === 'success',
    }
  )

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300 transition"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={classes}>
        <div className="p-2">
          <p className="text-sm text-center font-medium bold">{message}</p>{' '}
          {variant !== 'error' ? (
            <p className="text-sm text-center font-medium underline">
              <a href={CVE_DETAILS(answer)} target="_blank" rel="noreferrer">
                CVE-{answer}
              </a>
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    </Transition>
  )
}
