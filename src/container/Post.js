import React from "react";

const Post = (props) =>{
    return(
        <div className="artikel">
            <div className="gambar-artikel">
            <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel"> {props.isi} </p>
                <button 
                    className="btn btn-sm btn-warning" 
                    onClick={()=>{ if(window.confirm("Realy delete this Artikel?")) props.hapusArtikel(props.idArtikel)}}
                    >
                        Delete
                    </button>
            </div>

        </div>
    )
}

export default Post;