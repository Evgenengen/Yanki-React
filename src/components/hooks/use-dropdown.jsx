import  { useState } from 'react'

const useDropdownMenu = (initialvalue) => {
    const [visibleDropMenu, setVisibleDropMenu] = useState(initialvalue);
    const dropdownMenu = () => {
        setVisibleDropMenu(prev => !prev)
    }

    return {dropdownMenu, visibleDropMenu, setVisibleDropMenu}
}
 
export default useDropdownMenu;