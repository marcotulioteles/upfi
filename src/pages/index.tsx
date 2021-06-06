import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const fetchImages = async ({ pageParam = null }) => await fetch(`/api/images?after=${pageParam}`)

  function buttonText() {
    if(isFetchingNextPage) {
      return "Carregando..."
    }

    if (fetchNextPage) {
      return "Carregar mais"
    }
  }
  
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images', fetchImages, {
      getNextPageParam: (lastPage) => lastPage || null, 
    });

  const formattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY
    data.pages.map(item => [item])
  }, [data]);

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <Error />
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
        {hasNextPage  &&  <Button>{buttonText()}</Button>}
      </Box>
    </>
  );
}
