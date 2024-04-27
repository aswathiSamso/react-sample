import {
  Button,
  Header,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
} from "semantic-ui-react";
import React, { useState } from "react";

const EmpProfileModal = ({ employee, showModal, handleCloseModal }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        onClose={handleCloseModal}
        open={showModal}
        
      >
        <ModalHeader>Employee Detail</ModalHeader>
        <ModalContent>
          <ModalDescription>
            {employee && (
              <div>
                <p>Employee Code: {employee.code}</p>
                <p>Name: {employee.firstName} {employee.lastName}</p>
                <p>Department: {employee.department}</p>
                <p>Age : {employee.age}</p>
              </div>
            )}
          </ModalDescription>
        </ModalContent>
        <ModalActions>
          <Button color="black" onClick={handleCloseModal}>
            Close
          </Button>
        </ModalActions>
      </Modal>
    </>
  );
};

export default EmpProfileModal;
