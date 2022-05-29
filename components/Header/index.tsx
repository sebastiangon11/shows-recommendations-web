import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="sticky top-0 bg-primary p-4 text-center font-extra-light shadow-md shadow-secondary">
      {children}
    </header>
  )
}

export { Header }
