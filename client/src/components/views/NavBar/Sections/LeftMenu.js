import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="About">
        <a href="/about">About</a>
      </Menu.Item>
      <Menu.Item key="Portfolio">
        <a href="/portfolio">Portfolio</a>
      </Menu.Item>
      <SubMenu title={<span>Blogs</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="Contact">
        <a href="/contact">Contact</a>
      </Menu.Item>
      <Menu.Item key="Test">
        <a href="/test">Test Page</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
