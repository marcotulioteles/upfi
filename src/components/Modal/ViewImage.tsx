import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalBody>
        <Image src={imgUrl} alt={imgUrl} maxWidth="900px" maxHeight="600px" objectFit="contain"/>
      </ModalBody>
      <ModalFooter>
        <Link href={imgUrl} isExternal>Abrir original</Link>
      </ModalFooter>
    </ModalContent>
  </Modal>
}
