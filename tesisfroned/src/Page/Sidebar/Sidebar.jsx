import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import "./Sidebar.css"
import CraeteNewTaskForm from "../Task/CreateTask";

const menu = [
  { name: "INICIO", value: "Inicio", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "HECHO", value: "Hecho", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "ASIGNADO", value: "Asignado", role: ["ROLE_ADMIN"] },
  { name: "NO ASIGNADO", value: "Pendiente", role: ["ROLE_ADMIN"] },
  { name: "Crear nueva tarea", value: "", role: ["ROLE_ADMIN"] },
  { name: "Notificacion", value: "Notificacion", role: ["ROLE_CUSTOMER"] },
]

const role = "ROLE_ADMIN";

const Sidebar = () => {

  const [activeMenu, setActiveMenu] = useState("INICIO");
  const [openCreateTaskForm, setOpenCreateTaskForm] = useState(false);
  const handleCloseCreateTaskForm = () => {
      setOpenCreateTaskForm(false);
  }
  const handleOpenCreateTaskModel = () => {
      setOpenCreateTaskForm(true);
  };

  const handleMenuChange = (item) => {

    if (item.name=="Crear nueva tarea") {
      handleOpenCreateTaskModel()
    }
    setActiveMenu(item.name)
  }

  const handleLogout = () => {
    console.log("manejar el cierre de sesión");
  }

  return (
    <>
      <div className="cardd min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
        <div className="space-y-5 h-full">
          <div className="flex justify-center">
            <Avatar
              sx={{ width: "8rem", height: "8rem" }}
              className="border-4 border-[#5e5e5e]"
              src="https://seeklogo.com/images/U/Universidad_Peruana_Union-logo-6205753F70-seeklogo.com.png" />
          </div>
          {
            menu.filter((item) => item.role.includes(role))
              .map((item) => <p onClick={() => handleMenuChange(item)} className={`py-3 px-5 rounded-full text-center cursor-pointer ${activeMenu === item.name ?
                "activeMenuItem" : "menuItem"}`} >
                {item.name}
              </p>)
          }
          <Button onClick={handleLogout} sx={{ padding: ".7rem", borderRadius: "2rem" }} fullWidth className="logoutButton">
            Cerrar Sesion
          </Button>
        </div>
      </div>
      <CraeteNewTaskForm open={openCreateTaskForm} handleClose={handleCloseCreateTaskForm} />

    </>

  )
}
export default Sidebar;