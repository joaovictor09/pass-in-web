import { ComponentProps } from 'react'

interface TableRowProps extends ComponentProps<'tr'> {}

export function TableRow({ children, ...props }: TableRowProps) {
  return (
    <tr
      className="border-b border-white/10 transition hover:bg-white/5"
      {...props}
    >
      {children}
    </tr>
  )
}
