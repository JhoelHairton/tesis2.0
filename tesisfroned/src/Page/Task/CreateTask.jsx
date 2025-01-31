import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


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
  borderRadius: '20px',
  color: 'white',

};
const tags = ["Angular", "React", "Vuejs", "Spring boot", "Node js", "Python"]

export default function CraeteNewTaskForm({ handleClose, open }) {

   

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    tags: [],
    deadline: new Date(),
  });
  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData, 
      [name]: value,
    });
  };

  const handleTagsChange = (event, value) => {
    setSelectedTags(value);
  }


  const handleDeadlineChange = (date) => {
    setFormData({
      ...formData, deadline: date
    })
  }

  const formateDate = (input) => {
  let {
    $y: year,
    $M: month,
    $D: day,
    $H: hours,
    $m: minutes,
    $s: seconds,
    $ms: milliseconds,
  } = input;
  
  const date=new Date(year,month,day,hours,minutes,seconds,milliseconds);
  const formatedDate=date.toISOString();
  return formatedDate;

}


  // 2024-02-29T15:30:00 
  const handleSubmit =(e)=> {
    e.preventDefault();
    const { deadline } = formData;
    formData.deadline=formateDate(deadline);
    formData.tags=selectedTags
    console.log("formData", formData, "deadline:", formData.deadline);
    handleClose();
  }

  useEffect(() => {

  },)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} >
                <TextField
                  label="Titulo"
                  fullWidth
                  name='title'
                  value={formData.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  label="Imagen"
                  fullWidth
                  name='image'
                  value={formData.image}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  label="Descripcion"
                  fullWidth
                  multiline
                  rows={4}
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} >
                <Autocomplete
                  multiple
                  id='multiple-limit-tags'
                  options={tags}
                  onChange={handleTagsChange}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => <TextField
                    label="Etiquetas"
                    fullWidth
                    {...params}
                  />}
                />

              </Grid>
              <Grid item xs={12} >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    onChange={handleDeadlineChange}
                    className='w-full'
                    label="Fecha límite"
                    renderInput={(params) => <TextField {...params} />} />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} >
                <Button fullWidth
                  className='customeButton'
                  type='submit'
                  sx={{ padding: ".9rem" }} >
                  Crear
                </Button>
              </Grid>
            </Grid>


          </form>

        </Box>
      </Modal>
    </div>
  );
}

