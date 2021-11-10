import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef } from 'react'

import MuiLink from '@material-ui/core/Link'

import type { LinkProps as MuiLinkProps } from '@material-ui/core/Link'

type LinkProps = MuiLinkProps & {
  href: string
  activeClassName?: string
  noRouter?: boolean
}

const Link = forwardRef<HTMLSpanElement, LinkProps>(function ForwardedLink(
  {
    activeClassName,
    noRouter,

    href,
    className: _className,

    children,
    ...other
  },
  ref
) {
  const router = useRouter()
  const className = `${_className} ${
    router.pathname === href ? activeClassName : ''
  }`

  return noRouter ? (
    <MuiLink {...other} ref={ref} className={className} href={href}>
      {children}
    </MuiLink>
  ) : (
    <NextLink href={href} passHref>
      <MuiLink {...other} ref={ref} className={className}>
        {children}
      </MuiLink>
    </NextLink>
  )
})

export default Link
