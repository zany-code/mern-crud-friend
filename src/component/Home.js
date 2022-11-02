import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux';
import { mahasiswaSelector, getMahasiswa, deleteMahasiswa } from "../redux/MahasiswaSlice";

const Home = () => {

  const dispatch = useDispatch();
  const mahasiswa = useSelector(mahasiswaSelector.selectAll)

  useEffect(() => {
    dispatch(getMahasiswa())
  }, [dispatch]);

  return (
    <>
      <Link to="/add-mhs">
        <button className="block bg-green-500 p-2 ml-20 rounded-lg text-white font-bold mt-10 text-[10px] md:text-xl">
          Add friend
        </button>
      </Link>

      <table className="container text-sm text-left text-gray-500 dark:text-gray-400 mx-auto mt-10 shadow-xl">
        <thead className=" text-lg text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Nama Lengkap
            </th>
            <th scope="col" className="py-3 px-6">
              Kelas
            </th>
            <th scope="col" className="py-3 px-6">
              Asal
            </th>
            <th scope="col" className="py-3 px-6">
              Zodiak
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((item) => {
            return (
              <tr key={item._id} className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {
                    item.namaMhs.toUpperCase()
                  }
                </th>
                <td className="py-4 px-6">{item.kelas.toUpperCase()}</td>
                <td className="py-4 px-6">{item.asal.toUpperCase()}</td>
                <td className="py-4 px-6">{item.zodiak.toUpperCase()}</td>
                <td className="py-4 px-6 flex gap-5">
                  <Link to={`/edit-mhs/${item._id}`}>
                    <button>
                      <BiEdit size={25} color={"green"} />
                    </button>
                  </Link>
                  <button onClick={() => dispatch(deleteMahasiswa(item._id))}  className=" cursor">
                    <BiTrashAlt size={25} color={"red"} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className=" mt-10 ml-10">Link API yang saya buat : <a className=" text-blue-700 underline" target='_blank' href='https://crud-myfriend.herokuapp.com/mahasiswa/ti/'>API Friend By : Muhamad Muzani</a></p>
    </>
  );
};

export default Home;
