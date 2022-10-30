import React, {useState, useEffect} from "react";
import { BiBrush } from "react-icons/bi";
import { getMahasiswa, mahasiswaSelector, updateMahasiswa } from "../redux/MahasiswaSlice";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';


const EditFriend = () => {

  const [namaMhs, setNamaMhs] = useState('');
  const [kelas, setKelas] = useState('');
  const [asal, setAsal] = useState('');
  const [zodiak, setZodiak] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  const data = useSelector((state) => mahasiswaSelector.selectById(state, id));

  useEffect(() => {
    dispatch(getMahasiswa())
  }, [dispatch]);

  useEffect(() => {
    if(data) {
      setNamaMhs(data.namaMhs);
      setKelas(data.kelas);
      setAsal(data.asal);
      setZodiak(data.zodiak);
    }
  }, [data]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateMahasiswa({id, namaMhs, kelas, asal, zodiak}));
    navigate('/')
  }

  return (
    <div className=' flex h-screen items-center justify-center'>
      <form onSubmit={handleUpdate} className="grid lg:grid-cols-2 w-4/6 gap-4 border-2 p-10 border-gray-200">
        <div className=" input-type">
          <input
            type="text"
            value={namaMhs.toUpperCase()}
            onChange={(e) => setNamaMhs(e.target.value)}
            name="namaLengkap"
            className=" border-2 w-full px-5 py-2 focus:outline-none rounded-md"
            placeholder="Nama Lengkap"
          />
        </div>
        <div className=" input-type">
          <input
            type="text"
            value={kelas.toUpperCase()}
            onChange={(e) => setKelas(e.target.value)}
            name="Kelas"
            className=" border-2 w-full px-5 py-2 focus:outline-none rounded-md"
            placeholder="Kelas"
          />
        </div>
        <div className=" input-type">
          <input
            type="text"
            value={asal.toUpperCase()}
            onChange={(e) => setAsal(e.target.value)}
            name="asal"
            className=" border-2 w-full px-5 py-2 focus:outline-none rounded-md"
            placeholder="asal"
          />
        </div>
        <div className=" input-type">
          <input
            type="text"
            value={zodiak.toUpperCase()}
            onChange={(e) => setZodiak(e.target.value)}
            name="zodiak"
            className=" border-2 w-full px-5 py-2 focus:outline-none rounded-md"
            placeholder="Zodiak"
          />
        </div>
        <button className=" flex mt-10 justify-center text-lg w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
          Update <BiBrush size={25} className=" px-1" />
        </button>
      </form>
    </div>
  );
};

export default EditFriend;
