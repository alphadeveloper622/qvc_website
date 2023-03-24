import { Meta } from '@/layouts/Meta';
import Home from '@/pages/Home';
import { AppConfig } from '@/utils/AppConfig';

export default function Index() {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Home />
    </>
  );
}
