import {Sidebar,Menu,MenuItem,SubMenu,sidebarClasses} from 'react-pro-sidebar'

export default function Side() {
  return (
    <Sidebar>
        <Menu>
          <SubMenu label="Dasboard">
            <MenuItem>Teste</MenuItem>
            <MenuItem>Teste-2</MenuItem>
          </SubMenu>
          <SubMenu label="Conta">
            <MenuItem>Minha Conta</MenuItem>
            <MenuItem>Sair</MenuItem>
          </SubMenu>
        </Menu>
    </Sidebar>
  )
}