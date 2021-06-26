import { Grid, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [selectedImage, setSelectedImage] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = (url: string) => {
    onOpen();
    setSelectedImage(url)
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <Grid templateColumns="repeat(3, 1fr)" gap="40px">
        {cards.map(card => (
          <Card
            viewImage={url => handleViewImage(url)}
            data={card}
            key={card.id}
          />
        ))}
      </Grid>

      {/* TODO MODALVIEWIMAGE */}
      {isOpen && (
        <ModalViewImage
          imgUrl={selectedImage}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
}
