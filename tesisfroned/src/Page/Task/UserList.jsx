import * as React from 'react';
import { Avatar, Box, Button, Divider, ListItem, ListItemAvatar, ListItemText, Modal } from '@mui/material';


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

const tasks=[1,1,1,1]
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
        {
            [1,1,1,1].map((item,index) =>
            
              <> 
            <div className='flex items-center justify-between w-full'>
                <div>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'/>
                        </ListItemAvatar>
                        <ListItemText
                        secondary="jhoel@gmail.com"
                        primary={"Jhoel hairton"}/>
                    </ListItem>
                </div>
                <div>
                    <Button className='botonAsignar'>Seleccionar</Button>
                </div>

            </div>
              {index!==tasks.length-1 && <Divider variant='inset'/>}
                </>
            
        )
        }
      </Box>
    </Modal>
  </div>
  );
}
