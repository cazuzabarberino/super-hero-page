import { CardStyle, CardStyleProps } from "./Card.style"

export type CardProps = React.HTMLAttributes<HTMLDivElement> & CardStyleProps

export function Card({ elevation, children, ...divProps }: CardProps) {
  return (
    <CardStyle elevation={elevation} {...divProps}>
      {children}
    </CardStyle>
  )
}
