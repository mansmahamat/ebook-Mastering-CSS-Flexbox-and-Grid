import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none',
  outline:
    'inline-flex justify-center rounded-md border py-[calc(theme(spacing.1)-1px)] px-[calc(theme(spacing.4)-1px)] text-base font-semibold tracking-tight focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900',
    blue: 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600',
    orange: 'bg-[#FF9102] text-white hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:bg-orange-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-orange-600',
    white:
      'bg-white text-black hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600',
  },
  outline: {
    slate:
      'border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:border-slate-200 active:bg-slate-50 active:text-slate-900/70 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent',
    blue: 'border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:text-blue-600/70 disabled:opacity-40 disabled:hover:border-blue-300 disabled:hover:bg-transparent',
    orange: 'border-[#FF9102] text-[#FF9102] hover:border-orange-400 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:text-orange-600/70 disabled:opacity-40 disabled:hover:border-orange-300 disabled:hover:bg-transparent',
  },
}

export function Button({
  variant = 'solid',
  color = 'slate',
  className,
  ...props
}) {
  return (
    <button
      className={clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        className
      )}
      {...props}
    />
  )
}

export function ButtonLink({
  variant = 'solid',
  color = 'slate',
  href,
  className,
  ...props
}) {
  return (
    <Link href={href}>
      <a
        className={clsx(
          baseStyles[variant],
          variantStyles[variant][color],
          className
        )}
        {...props}
      />
    </Link>
  )
}
