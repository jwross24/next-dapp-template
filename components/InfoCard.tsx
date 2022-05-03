import React from 'react'

interface InfoCardProps {
  href?: string
  title: string
  description: string
}

const InfoCard = React.forwardRef<HTMLAnchorElement, InfoCardProps>(
  ({ href, title, description }, ref) => {
    return (
      <a
        href={href}
        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        ref={ref}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-4 text-xl">{description}</p>
      </a>
    )
  }
)

InfoCard.displayName = 'InfoCard'

export default InfoCard
