import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem } from '@mui/material';
import UserList from '../UserList';
import React, { useState } from 'react';
import SubmissionsList from './SubmissionsList';
import EditTaskForm from './EditTaskForm';

const role = "ROLE_ADMIN"
const TaskCard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    //usuario list
    const [openUserList, setOpenUserList] = useState(false);
    const handleCloseUserList = () => {
        setOpenUserList(false)
    }

    const handleOpenUserList = () => {
        setOpenUserList(true);
        handleMenuClose()
    }


    //ver presentacion
    const [openSubmissionList, setOpenSubmissionList] = useState(false);
    const handleCloseSubmissionList = () => {
        setOpenSubmissionList(false);
    }
    const handleOpenSubmissionList = () => {
        setOpenSubmissionList(true)
        handleMenuClose()

    };
    //////////////
    const [openUpdateTaskForm, setOpenUpdateTaskForm] = useState(false);
    const handleCloseUpdateTaskForm = () => {
        setOpenUpdateTaskForm(false);
    }
    const handleOpenUpdateTaskModel = () => {
        setOpenUpdateTaskForm(true);
        handleMenuClose();
    };

    //////////
    const handleDeleteTask = () => {
        handleMenuClose();
    };

    return (
        <div>
            <div className='cardd lg:flex justify-between'>
                <div className='lg:flex gap-5 items-center space-y-2 w-[0%] lg:w-[50%]'>
                    <div className=''>
                        <img className='lg:w-[10rem] lg:h-[9.2rem] object-cover'
                            src='https://cdn-icons-png.flaticon.com/256/3536/3536445.png' alt="" />
                    </div>
                    <div className='space-y-5'>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-lg'>que tal amigos</h1>
                            <p className='text-gray-900 text-sm'>hola cm </p>
                        </div>

                        <div className='flex flex-wrap gap-2 items-center'>
                            {[1, 1, 1, 1].map((item) => <span className='py-1 px-5 rounded-full
                        techStack'> docente</span>)}
                        </div>
                    </div>

                </div>
                <div>
                    <IconButton id="basic-button"
                        aria-controls={openMenu ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openMenu ? 'true' : undefined}
                        onClick={handleMenuClick}>
                        <MoreVertIcon/>
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleMenuClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {
                            role==="ROLE_ADMIN"? <>
                                <MenuItem onClick={handleOpenUserList}>Asignar Docente</MenuItem>
                                <MenuItem onClick={handleOpenSubmissionList}>Ver presentaciones</MenuItem>
                                <MenuItem onClick={handleOpenUpdateTaskModel}>Editar</MenuItem>
                                <MenuItem onClick={handleDeleteTask}>Eliminar</MenuItem>
                            </> : <>
                            </>

                        }
                    </Menu>
                </div>
            </div>
            <UserList open={openUserList} handleClose={handleCloseUserList} />
            <SubmissionsList open={openSubmissionList} handleClose={handleCloseSubmissionList} />
            <EditTaskForm open={openUpdateTaskForm} handleClose={handleCloseUpdateTaskForm} />
        </div>
    )
}

export default TaskCard