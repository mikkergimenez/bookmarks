import React from 'react';

import ListStyle from './Components/ListStyle';
import GalleryStyle from './Components/GalleryStyle';

const NoteComponent = ({ tags, text, title, type, description, domain, viewType, saveNote, deleteNote }) => {
  if (viewType == "gallery") { return (<GalleryStyle type={type} title={title} tags={tags} text={text} description={description} domain={domain} />);}
  if (viewType == "list")    { return (<ListStyle deleteNote={deleteNote} saveNote={saveNote} title={title} type={type} description={description} domain={domain} tags={tags} text={text} domain={domain}/>);}
}

export default NoteComponent;
