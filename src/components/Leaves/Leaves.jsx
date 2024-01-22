import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import FormRequest from '../FormRequest/FormRequest';
import Modal from '../Modal/Modal';
import PrintableLeave from '../PrintableLeave/PrintableLeave';
import './Leaves.css';

const Leaves = () => {
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    requestDate: new Date().toISOString().slice(0, 10),
    recordNumber: '',
    department: 'شعبة الاستلام والتجهيز',
    jobTitle: '',
    leaveType: 'اجازة اعتيادية',
    startingDate: new Date().toISOString().slice(0, 10),
    duration: 1,
  });

  const printableRef = useRef();

  const handleCloseModal = () => setOpenModal(false);

  const handlePrint = useReactToPrint({
    content: () => printableRef.current,
  });

  return (
    <div className='leaves-container'>
      {openModal && (
        <Modal closeOverlay={handleCloseModal}>
          <div className='print-priview'>
            <div className='print-paper' ref={printableRef}>
              <PrintableLeave data={formData} />
            </div>
            <div className='print-actions'>
              <button className='print-actions_btn' onClick={handleCloseModal}>
                cancel
              </button>
              <button className='print-actions_btn' onClick={handlePrint}>
                Print
              </button>
            </div>
          </div>
        </Modal>
      )}
      <FormRequest
        formData={formData}
        setFormData={setFormData}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default Leaves;
