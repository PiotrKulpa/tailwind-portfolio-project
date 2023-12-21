import { useRouter } from 'next/router';

const usePageCheck = (expectedPage: string) => {
  const router = useRouter();
  const isExpectedPage = router.pathname === expectedPage;  

  return isExpectedPage;
}

export default usePageCheck;