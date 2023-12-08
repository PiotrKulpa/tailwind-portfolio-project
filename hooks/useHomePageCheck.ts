import { useRouter } from 'next/router'

const useHomePageCheck = () => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  return isHomePage
}

export default useHomePageCheck