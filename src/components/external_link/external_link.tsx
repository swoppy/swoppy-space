import React from "react"

type ExternalLinkProps = {
  to: string
  children: React.ReactNode
  className?: string
}

export const ExternalLink = ({ to, children, ...props }: ExternalLinkProps) => {
  return (
    <a href={to} rel="noopener noreferrer" target="_blank" {...props}>
      {children}
    </a>
  )
}
