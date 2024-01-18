import React, {FC} from 'react';
import {MainLayout} from '../../../../shared/ui/layouts/main/MainLayout';
import {LinkButton} from '../../../../shared/ui/links/button/LinkButton';
import {ButtonDefault} from '../../../../shared/ui/buttons/default/ButtonDefault';
import {ArrowLeft} from 'lucide-react';

export const ExportPage: FC = () => {
  return (
    <MainLayout>
      <header className={'flex gap-3 p-3 bg-gray-50 rounded border'}>
        <LinkButton to={'/'}><ArrowLeft/></LinkButton>
        <h1 className={'text-3xl font-bold'}>Export methods</h1>
      </header>

      <section className={'flex flex-col p-3 gap-3 border rounded bg-gray-50 items-start'}>
        <LinkButton to={'/export-local'}>Export as local JSON file</LinkButton>

        <ButtonDefault disabled>Export to Google Drive</ButtonDefault>
      </section>
    </MainLayout>
  );
};
