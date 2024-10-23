import { Link } from 'expo-router'
import { LinkProps } from 'expo-router/build/link/Link'

type LinkButtonProps = LinkProps& {
  title: string
}

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link className="text-slate-300 text-center text-base font-body" {...rest}>
      {title}
    </Link>
  )
}