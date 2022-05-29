import { ReactNode } from 'react'

interface FooterProps {
  children: ReactNode
}

const Footer = ({ children }: FooterProps) => {
  return <footer className="sticky top-0 p-4 text-center font-extra-light">{children}</footer>
}

export { Footer }
