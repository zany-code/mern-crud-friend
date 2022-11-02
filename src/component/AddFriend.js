import React, {useState} from "react";
import { BiPlus } from "react-icons/bi";
import {useNavigate} from 'react-router-dom';
import { createMahasiswa } from "../redux/MahasiswaSlice";
import {useDispatch} from 'react-redux';

const AddFriend = () => {

  const [namaMhs, setNamaMhs] = useState('');
  const [kelas, setKelas] = useState('');
  const [asal, setAsal] = useState('');
  const [zodiak, setZodiak] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createMahasiswa({namaMhs, kelas, asal, zodiak}));
    navigate('/')

    setNamaMhs('')
    setKelas('')
    setAsal('')
    setZodiak('')
  }


  return (
    <>
      <div className=' flex h-screen items-center justify-center'>
      <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 w-4/6 gap-4 border-2 p-10 border-gray-200">
        <div className=" input-type">
          <input
            type="text"
            value={namaMhs}
            onChange={(e) => setNamaMhs(e.target.value)}
            name="namaLengkap"
            className=" border-2 w-full px-5 py-2 focus:outline-none rounded-md"
            placeholder="Nama Lengkap"
          />
        </div>
        <div className=" input-type">
          <input
            type="text"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
            name="Kelas"
            className=" border-2 w-full px-5 py-2 focus:outline-none rounded-md"
            placeholder="Kelas"
          />
        </div>
        <div className=" input-type">
          <input
            type="text"
            value={asal}
            onChange={(e) => setAsal(e.target.value)}
            name="asal"
            className=" border-2 w-full px-5 py-2 focus:outline-none rounded-md"
            placeholder="asal"
          />
        </div>
        <div className=" input-type">
          <input
            type="text"
            value={zodiak}
            onChange={(e) => setZodiak(e.target.value)}
            name="zodiak"
            className=" border-2 w-full px-5 py-2 focus:outline-none rounded-md"
            placeholder="Zodiak"
          />
        </div>
        <button className=" flex mt-10 justify-center text-lg w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
          Add <BiPlus size={25} className=" px-1" />
        </button>
      </form>
    </div>
    </>
    
  );
};

export default AddFriend;
