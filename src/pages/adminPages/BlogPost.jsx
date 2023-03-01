import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AdminMenu from '../../components/AdminMenu';

function BlogPost() {

    const [value, setValue] = useState('');

  return (
    <div className='blogPosts'>
        <div className="contentblog">
        <div className="containermnu">
            <AdminMenu />
        </div>
        <div className="contentedit">
            <div className="content">
                <input type="text" placeholder='Titre'/>
                <div className="editorContainer">
                <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
        </div>
        <div className="menu">
                <div className="item first">
                    <h1>Publier</h1> 
                    <span>
                        <b>Visibilité:</b> Public
                    </span>
                    <span>
                        <b>Status:</b> Brouillon
                    </span>
                    <input style={{display:"none"}} type="file" name='' id='file'/>
                    <label className='file' htmlFor="file">Téléchatger une image</label>
                    <div className="buttons">
                        <button>Enregistrer le brouillon</button>
                        <button>Modifier</button>
                    </div>
                </div>
                <div className='item'>
                    <h1>Categories</h1>
                    <label htmlFor="actus">Actus</label>
                    <input type="radio" name='cat' value="actus" id="actus"/>
                    <label htmlFor="dev">Dev</label>
                    <input type="radio" name='cat' value="dev" id="dev"/>
                    <label htmlFor="tech">Tech</label>
                    <input type="radio" name='cat' value="tech" id="tech"/>
                    <label htmlFor="astuces">Astuces</label>
                    <input type="radio" name='cat' value="astuces" id="astuces"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogPost
