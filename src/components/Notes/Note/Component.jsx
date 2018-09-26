import React from 'react';

import ListStyle from './Components/ListStyle';
import GalleryStyle from './Components/GalleryStyle';

const NoteComponent = ({ tags, text, title, type, description, domain, viewType, saveNote, deleteNote, makeNote, setInput }) => {
  if (viewType == "gallery") {
    return (<GalleryStyle type={type} title={title} tags={tags} text={text} description={description} domain={domain} />);
  }
  if (viewType == "list")    {
    return (<ListStyle makeNote={makeNote} deleteNote={deleteNote} saveNote={saveNote} setInput={setInput} title={title} type={type} description={description} domain={domain} tags={tags} text={text} domain={domain}/>);
  }
}

export default NoteComponent;
