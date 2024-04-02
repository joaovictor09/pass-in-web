import { ComponentProps } from 'react'

interface TableProps extends ComponentProps<'table'> {}

export function Table({ children, ...props }: TableProps) {
  return (
    <div className="rounded-lg border border-white/10">
      <table className="w-full" {...props}>
        {children}
      </table>
    </div>
  )
}
