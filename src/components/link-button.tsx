// Importa o componente Link e as propriedades LinkProps da biblioteca expo-router
import { Link } from 'expo-router'
import { LinkProps } from 'expo-router/build/link/Link'

// Define o tipo de propriedades para o componente LinkButton
type LinkButtonProps = LinkProps & {
  title: string
}

// Componente LinkButton, usado para criar links estilizados
export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link className="text-slate-300 text-center text-base" {...rest}>
      {title}
    </Link>
  )
}
