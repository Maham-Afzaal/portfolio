import React from 'react';
import { Box, } from '@mui/system';
import { Typography } from '@mui/material';
import './Port.css';
import ui1 from '../Ui/ui1.png';
import ui2 from '../Ui/ui2.png';
import ui3 from '../Ui/ui3.png';
import ui4 from '../Ui/ui4.png';
import ui5 from '../Ui/ui5.png';
import ui6 from '../Ui/ui6.png';
import ui7 from '../Ui/ui7.png';
import ui8 from '../Ui/ui8.png';
import ui9 from '../Ui/ui9.png';
import ui10 from '../Ui/ui10.png';
import ui11 from '../Ui/ui11.png';
import {useState} from 'react';
import ModalComponent from './ModalComponent';

const imageList = [ui1,ui11,ui5,ui9,ui6,ui10,ui7,ui8,ui4,];
const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  return (
    <Box id='Portfolio'sx={{backgroundColor: '#fcfcfc',boxShadow: '0 0 10px #e0e0e0',p:'100px 50px 50px 50px',}}>
        <Box>
          <Box sx={{display:'flex',justifyContent:'center'}}>
          <Typography variant='h4'  className='PortFolioTypo' sx={{fontWeight: 'bold',borderBottom:'5px solid #673ab766',display:'inline-block',marginBottom: '70px',}}>Portfolio 📷</Typography>
        </Box>
           <Box className='Box'>
           
              {imageList.map((imageSrc) => (
                <div className='div' key={imageSrc}>
        <img src={imageSrc}
          
          onClick={() => handleImageClick(imageSrc)}
          className='imgStyle'
        />
              </div>

      ))}
              
          

      {/* Render the modal if an image is selected */}
      {selectedImage && (
        <ModalComponent
          imageSrc={selectedImage}
          onClose={handleCloseModal}
        />
      )}
             
            </Box>

    </Box>
    </Box>
  )
}

export default Portfolio