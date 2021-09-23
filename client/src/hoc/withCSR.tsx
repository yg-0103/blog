import { useRouter } from 'next/dist/client/router'

const withCSR = <P,>(Component: React.ComponentType<P>) => {
  const CSR = (props: P) => {
    const router = useRouter()
    if (Object.keys(router.query).length === 0) return null
    return <Component {...props} />
  }
  return CSR
}

export default withCSR
