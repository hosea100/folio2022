import React, { useState } from 'react';
import Link from 'next/link';
import { Box } from 'theme-ui';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import {
  RiLinkedinBoxLine,
  RiInstagramLine,
  RiTwitterLine,
  RiFacebookBoxLine,
  RiGithubFill,
} from "react-icons/ri";
import { Drawer } from 'antd';
import 'antd/dist/antd.css';

const social = [
  {
    path: 'https://www.facebook.com/hosea.yoarana',
    icon: <RiFacebookBoxLine />,
  },
  {
    path: 'https://www.linkedin.com/in/hosea-yoarana/',
    icon: <RiLinkedinBoxLine />,
  },
  {
    path: 'https://www.instagram.com/hosea_yoarana/?hl=en',
    icon: <RiInstagramLine />,
  },
  {
    path: 'https://twitter.com/HoseaYoarana',
    icon: <RiTwitterLine />,
  },
  {
    path: 'https://github.com/hosea100',
    icon: <RiGithubFill />,
  },
];

const MobileDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  
  return (
    <>
      <Drawer 
      closeIcon={
        <IoMdClose size="24px" style={styles.closeIcon} />
      }
      placement="right" 
      onClose={onClose} 
      visible={visible}
      drawerStyle={styles.drawerStyle}
      headerStyle={styles.headerStyle}
      >
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            <Link href='/' passHref><a onClick={onClose}>Home</a></Link>
            <Link href='/about' passHref><a onClick={onClose}>About</a></Link>
            <Link href='/projects' passHref><a onClick={onClose}>Projects</a></Link>
          </Box>
          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map((socialItem, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Link href={socialItem.path}>{socialItem.icon}</Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
       
      </Drawer>
      <Box sx={styles.handler}>
        <IoMdMenu size="36px" onClick={showDrawer} />
      </Box>
    </>
  );
};
const styles = {
  drawerStyle: {
    height: '100%',
    backgroundColor: '#0f141e',
  },

  headerStyle: {
    backgroundColor: '#0f141e',
  },

  closeIcon: {
    color: "white",
    display: "flex",
    margin: "10px",
  },

  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '78px',
    marginY: '20px',
    cursor: "pointer",
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    pt: '20px',
    pb: '40px',

    position: 'absolute',
    // top: '25px',
    width: '20rem',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '20px',
      fontWeight: '500',
      color: 'white',
      py: '35px',
      cursor: 'pointer',
      // borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      textDecoration: 'none',
      alignItems:'center',
      textAlign:'center',
      '&:hover': {
        color: '#647A8F',
      },
      '&.active': {
        color: '#647A8F',
      },
    },
  },
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "5rem",

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#00cc8e',
      fontSize: 26,
      mr: '20px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: '#c8d938',
      },
    },
  },
}

export default MobileDrawer;
