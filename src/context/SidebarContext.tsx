import { createContext, ReactNode, useContext, useState } from 'react'

type sidebarContextType = {
  openOnSmall: boolean
  openOnLarge: boolean
  toggleFunction: () => void
  closeFunction: () => void
}

type sidebarProviderProps = {
  children: ReactNode
}

const SidebarContext = createContext<sidebarContextType | null>(null)

export const SidebarProvider = ({ children }: sidebarProviderProps) => {
  const [openOnSmall, setOpenOnSmall] = useState(false)
  const [openOnLarge, setOpenOnLarge] = useState(false)

  const toggleFunction = () => {
    if (window.innerWidth < 1024) {
      setOpenOnSmall((s) => !s)
    } else {
      setOpenOnLarge((l) => !l)
    }
  }

  const closeFunction = () => {
    if (window.innerWidth < 1024) {
      setOpenOnSmall(false)
    } else {
      setOpenOnLarge(false)
    }
  }

  return (
    <SidebarContext.Provider value={{ openOnSmall, openOnLarge, toggleFunction, closeFunction }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebarContext should use in SidebarProvider!')
  }
  return context
}
