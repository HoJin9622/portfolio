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
        <MenuItemGroup title="Post">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Test Page">
          <Menu.Item key="Test1">
            <a href="/test1">Test Page 1</a>
          </Menu.Item>
          <Menu.Item key="Test2">
            <a href="/test2">Test Page 2</a>
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="Contact">
        <a href="/contact">Contact</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
