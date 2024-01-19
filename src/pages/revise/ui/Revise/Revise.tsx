import React, {FC} from 'react';
import {useLocation, useParams, useSearchParams} from 'react-router-dom';
import {Card} from '../Card/Card';
import {useSelector} from 'react-redux';
import {selectCardsIdsByFilters} from '../../model/selectors/selectCardsIdsByFilters';
import {MainLayout} from '../../../../shared/ui/layouts/main/MainLayout';
import {LinkButton, LinkButtonDefaultTypes} from '../../../../shared/ui/links/button/LinkButton';
import {ArrowLeft} from 'lucide-react';

export const Revise: FC = () => {
  const [searchParams] = useSearchParams();

  const cardsIds = useSelector(selectCardsIdsByFilters({tagsIds: searchParams.get('tags')?.split(',').filter(t => t.length) || []}));
  const location = useLocation();

  const cardId = useParams().cardId;

  return (
    <MainLayout>
      <header className={'flex gap-3 p-3 bg-gray-50 rounded border'}>
        <LinkButton to={'/'}><ArrowLeft/></LinkButton>
        <h1 className={'text-3xl font-bold'}>Revise</h1>
      </header>

      <section className={'flex flex-col p-3 gap-3 border rounded bg-gray-50'}>
        <div className={'flex flex-col gap-3 items-center'}>
          {cardId ? (
            <Card cardId={cardId} key={cardId}/>
          ) : 'Card not found'}

          <LinkButton
            to={`/revise/${cardsIds[Math.round(Math.random() * (cardsIds.length - 1))]}${location.search}`}
            theme={LinkButtonDefaultTypes.Accent}
          >
            Next Card
          </LinkButton>
        </div>
      </section>
    </MainLayout>
  );
};
