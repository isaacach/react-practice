import Modal from "../components/Modal";
import { useState } from "react";
import Button from "../components/Button";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={
        <Button warning outline onClick={handleClose}>
          Close
        </Button>
      }
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
        nisl eget aliquam ultricies, massa nisl vestibulum enim, eget aliquam
        diam risus eget odio. Donec sed nunc sit amet magna aliquet ultricies.
        Donec ullamcorper, nisl nec aliquam ultricies, massa nisl vestibulum
        enim, eget aliquam diam risus eget odio. Donec
      </p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={() => setShowModal(true)}>
        Open Modal
      </Button>
      {showModal && modal}
      
    </div>
  );
}
