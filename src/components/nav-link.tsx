import { ComponentProps } from 'react'

interface NavLinkProps extends ComponentProps<'a'> {
  children: string
}

export function NavLink({ children, ...rest }: NavLinkProps) {
  return (
    <a {...rest} className="text-sm font-medium text-zinc-300">
      {children}
    </a>
  )
}
