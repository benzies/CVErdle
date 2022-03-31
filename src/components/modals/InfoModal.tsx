import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the CVE from 2021 in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the CVE.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="2"
          status="correct"
        />
        <Cell value="3" />
        <Cell value="8" />
        <Cell value="0" />
        <Cell value="5" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 2 is in the CVE and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="1" />
        <Cell value="5" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="3"
          status="present"
        />
        <Cell value="7" />
        <Cell value="1" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 3 is in the CVE but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="1" />
        <Cell value="3" />
        <Cell value="9" />
        <Cell isRevealing={true} isCompleted={true} value="5" status="absent" />
        <Cell value="4" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 5 is not in the CVE in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the wordle guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/benzies/CVErdle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
