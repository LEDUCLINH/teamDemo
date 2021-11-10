import { RefObject, useCallback, useRef, useState } from 'react'

const useDropDown = function <T extends Element = any>(): [
  RefObject<T>,
  boolean,
  (event?: React.MouseEvent | any) => any,
  (event?: MouseEvent | any) => any
] {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const dropDownRef = useRef<T>(null)

  const closeDropDown = useCallback(
    (event?: MouseEvent, bypass = false) => {
      if (
        !bypass &&
        event &&
        dropDownRef.current?.contains(event.target as Node)
      ) {
        return
      }

      setIsDropDownOpen(false)
      document.removeEventListener('click', closeDropDown, { capture: true })
    },
    [dropDownRef, setIsDropDownOpen]
  )

  const toggleDropDown = useCallback(
    (event?: React.MouseEvent) => {
      event?.preventDefault()

      if (isDropDownOpen) {
        closeDropDown(undefined, true)
        return
      }

      setIsDropDownOpen(!isDropDownOpen)
      document.addEventListener('click', closeDropDown, { capture: true })
    },
    [isDropDownOpen, setIsDropDownOpen, closeDropDown]
  )

  return [dropDownRef, isDropDownOpen, toggleDropDown, closeDropDown]
}

export default useDropDown
