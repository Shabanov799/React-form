import { useState } from "react"
import {BsFillTrashFill} from 'react-icons/bs'

function App() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [fin, setFin] = useState('');
  const [userList, setUserList] = useState([])

  const handleSubmit = () => {
    const newUser = {
      name,
      surname,
      fin,
    }
    setUserList(
      [...userList, newUser]
    )

    setName('')
    setSurname('')
    setFin('')
  }



  function deleteItem(fin) {
    const newList = userList.filter((item) => item.fin !== fin)
    setUserList(newList)
  }


  return (
    <>
      <div className="app-wrapper w-full flex">
        <div className="form-wrapper w-1/3">
          <div>
            <input
              value={name}
              placeholder="Ad daxil edin"
              className="px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mx-3 my-2"
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              value={surname}
              placeholder="Soyad daxil edin"
              className="px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mx-3 my-2"
              onChange={event => setSurname(event.target.value)}
            />
          </div>
          <div>
            <input
              value={fin}
              placeholder="FIN daxil edin"
              className="px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mx-3 my-2"
              onChange={event => setFin(event.target.value)}
            />
          </div>
          <div>
            <button
              className="rounded-full bg-indigo-500 text-white px-6 py-2 mx-3 my-2"
              onClick={handleSubmit}
            >
              Əlavə et
            </button>
          </div>
        </div>
        <div className="w-2/3">
          {
            !userList.length ? "Melumat daxil edilmeyib" :
              <table className="table-fixed border-collapse border w-full my-2">
                <tbody>
                  {
                    userList.map((item) => (
                      <tr key={item.fin}>
                        <td className="border-collapse border">{item.name}</td>
                        <td className="border-collapse border">{item.surname}</td>
                        <td className="border-collapse border">{item.fin}</td>
                        <td className="border-none w-6">{<button onClick={()=> deleteItem(item.fin)} ><BsFillTrashFill className="text-red-500 cursor-pointer"/></button>}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
          }
        </div>
      </div>
    </>
  )
}
export default App