import React from 'react'
import TextStyleConfig from './TextStyleConfig'
import ImageUpdate from './ImageUpload'
import {useState} from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs;
const GeneratePDF= () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [fontSize, setFontSize] = useState("12")
    const [fontColor, setFontColor] = useState('black')
    const[isBold, setIsBold] = useState(false)
    const [image, setImage] = useState(null)


    const generatePDF = () => {

        const customStyles = {
            fontSize: parseInt(fontSize),
            color: fontColor,
            bold: isBold
        }
        const documentDefinition = {
            content: [
                {text:`Titulo: ${title}`, style:"customStyles"},
                {text:`Descrição: ${description}`, style:"customStyles"},
                image ? {image: image, width:150} : {},
            ],
            styles:{
                customStyles:customStyles
            },
        };
        pdfMake.createPdf(documentDefinition).download();
    };

       
    
  return (
    <div className='container'>
        <label  className='label'>
            Titulo:
            <input type="text" className='input' value={title} onChange={(e)=> setTitle(e.target.value)} />
        </label>
        <label  className='label'>
            Descrição:
            <input type="text" className='input' value={description} onChange={(e)=> setDescription(e.target.value)} />
        </label>

        <TextStyleConfig fontSize={fontSize} setFontSize={setFontSize} fontColor={fontColor} setFontColor={setFontColor} isBold={isBold} setIsBold={setIsBold}/>
        <ImageUpdate setImage={setImage}/>

        <button type="button" className='button' onClick={generatePDF}>Gerar PDF</button>
    </div>
  )
}


export default GeneratePDF