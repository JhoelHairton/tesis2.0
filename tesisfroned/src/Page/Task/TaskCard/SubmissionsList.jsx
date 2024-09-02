import { Box, Modal } from '@mui/material';
import { SubmissionsCard } from './SubmissionsCard';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
  borderRadius:'20px',
  color: 'white' ,
};

const submissions=[1,1,1,1]
export default function UserList({handleClose,open}) {


  return (
    <div>
    <Modal 
      open={open}     
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div>
            {submissions.length>0?<div className='space-y-2'>
              {submissions.map((item)=><SubmissionsCard/>)}
              </div>: <div className=""> 
              <div className='text-center'>No se encontró ningún envío</div>
        </div>}
        </div>
      </Box>
    </Modal>
  </div>
  );  
}
