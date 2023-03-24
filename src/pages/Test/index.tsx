import { useMemo } from 'react';

import {
  WhiteFillRoundButton,
  RedFillRoundButton,
  RedFillButton,
} from '@/components/Button';
import { HomeNewsCard, NewsStoryCard } from '@/components/Card';
import CouponCard from '@/components/Card/CouponCard';
import Copyright from '@/components/Copyright';
import DataTable from '@/components/DataTable';
import { SearchForm } from '@/components/Form';
import Menu from '@/components/Menu';
import { getColumns } from '@/utils/columns';
import { getData } from '@/utils/sampleData';

type IItem = {
  id: string;
  name: string;
  title: string;
  placeHolder: string;
};
export default function Index() {
  const fields: IItem[] = [
    {
      id: 'look-up',
      name: 'look-up-coin',
      title: 'Look-Up Your Coin',
      placeHolder: 'Certification Number',
    },
  ];

  const data = useMemo(() => getData(), []);
  const columns = useMemo(() => getColumns(), []);
  return (
    <div style={{ textAlign: 'center', padding: '50px 0' }}>
      <div style={{ padding: '5px 0' }}>
        <RedFillRoundButton title="portal login" />
      </div>
      <div style={{ padding: '5px 0' }}>
        <WhiteFillRoundButton title="request account" />
      </div>
      <div style={{ padding: '5px 0' }}>
        <Menu className="m-auto" screen="lg" />
      </div>
      <div style={{ padding: '5px 0' }}>
        <Copyright className="m-auto" />
      </div>
      <div style={{ padding: '5px 0' }}>
        <HomeNewsCard className="m-auto" screen="large" />
      </div>
      <div style={{ padding: '5px 0' }}>
        <CouponCard className="m-auto" />
      </div>
      <div style={{ padding: '5px 0' }}>
        <RedFillButton
          title="Do your coins qualify?"
          subtitle="Request an account."
          className="m-auto"
        />
      </div>
      <div style={{ padding: '5px 0' }}>
        <SearchForm fields={fields} className="m-auto md:w-[845px]" />
      </div>
      <div style={{ padding: '5px 0', marginTop: '30px' }}>
        <NewsStoryCard className="m-auto" />
      </div>
      <div style={{ padding: '5px 0', marginTop: '30px' }}>
        <div className="min-h-screen bg-gray-100 text-gray-900">
          <main className="mx-auto max-w-4xl px-4 pt-4 sm:px-6 lg:px-8">
            <div className="">
              <h1 className="text-xl font-semibold">
                React Table + Tailwind CSS = ❤
              </h1>
            </div>
            <div className="mt-4">
              <DataTable columns={columns} data={data} />
            </div>
          </main>
        </div>
      </div>

      <a href="#content" className=" not-sr-only focus:sr-only">
        Skip to content
      </a>
    </div>
  );
}
