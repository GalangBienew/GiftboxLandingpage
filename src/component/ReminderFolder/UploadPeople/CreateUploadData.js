/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../UploadPeople/CreateUploadData.css";

const CreateUploadData = ({ addEntry }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState(null);
  const [ShowPopup , setShowPopup] = useState(false);



  const onDrop = (acceptedFiles) => {
    // Mengambil file gambar yang diunggah
    const file = acceptedFiles[0];
    
    // Membaca file menggunakan FileReader
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Membuat objek entri baru
    const newEntry = {
      id: Date.now(),
      name,
      age: parseInt(age),
      image,
    };

    // Menambahkan entri baru ke daftar
    addEntry(newEntry);

    //update showpopup 
    setShowPopup(true);
    
    // Mengosongkan input field setelah submit
    setName("");
    setAge("");
    setImage(null);
  };

  

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  
  return (
    <form onSubmit={handleSubmit}>
      {ShowPopup && (
        <div className='Showpopup'>
          <p>data berhasil di tambahkan</p>
          <button onClick={() => setShowPopup(false)}>close</button>
        </div>
      ) }
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <div className='ImageAdd' {...getRootProps()}>
        <input {...getInputProps()} accept="image/*" />
        {image ? (
          <img src={image} alt="Gambar" className='Imagesrc' />
        ) : (
          <p>Tambahkan foto</p>
        )}
      </div>
      <button type="submit">Tambah</button>
    </form>
  );
};

export default CreateUploadData;
