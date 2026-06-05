import { isComingSoon } from '@/lib/site-mode';
import { ComingSoon } from '@/components/ComingSoon';
import { HomeContent } from '@/components/HomeContent';

export default function Home() {
  if (isComingSoon()) {
    return <ComingSoon />;
  }

  return <HomeContent />;
}
