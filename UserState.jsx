import React, { useState } from "react";
function UserState() {
  // UserState la 1 hook duoc cung cap boi Reactjs
  //duoc de dung luu tru cac gia tri trong components
  //cu phap:
  //const[nameState, setNameState] = useState(initalStateValue)
  //NameState: ten state
  //setNameState: la 1 ham dung de set lai gia tri cho nameState
  //initalStateValue: Gia tri khoi tao
  //vi du :
  const [count, setCount] = useState(10);
  // kieu du lieu nguyen thuy : number, string, boolen, null...
  //String
  const [text, setText] = useState("hello world !!!");
  const handleChangeText = () => {
    setText("cam on ");
  };
  //bolen

  const [toggle, setToggle] = useState(true);
  const ChangeText = () => {
    setToggle(!toggle);
  };
  //   2.2 kieu du lieu tham chieu [array, Object]
  const [arrayList, setarrList] = useState([1, 3, 5, 7]);
  const handlRandom = () => {
    setarrList([...arrayList, Math.floor(Math.random() * 10)]);
  };
  //   Object
  const [objList, setObjList] = useState({
    objNumber: 1 / 4,
    objArr: [2, 4, 6, 8],
  });
  //   JSON : Array + object
  const [listStudent, setListStudent] = useState([
    { id: 1, name: "khanh", age: 21, address: "ha noi" },
    { id: 2, name: "anh", age: 23, address: "ha noi" },
    { id: 3, name: "b", age: 24, address: "ha noi" },
    { id: 4, name: "a", age: 20, address: "ha noi" },
  ]);
  return (
    <div>
      <h1>UserState</h1>
      {/* //number */}
      <div>Number:{count}</div>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <button onClick={() => setCount(count + 1)}>up</button>
      <br />
      <br />
      {/* string */}
      <div>String:{text}</div>
      <button onClick={handleChangeText}>Change</button>
      {/* dat ten cac ham de ten dau se la Handle 
      doi voi cac su kien de ten dau la on */}

      {/* toan tu ba ngoi : la viet tat cua if else 
      if(dieukien)
      {
        statement true

      }
      else{
        statement false
      }
      =>   dieu kien ? statement true: statement false
      */}
      {toggle ? (
        <div>
          <p>Khanh da toi </p>
          <button onClick={ChangeText}>Click me!</button>
        </div>
      ) : (
        <div>
          <p>khanh khong toi </p>
          <button onClick={ChangeText}>Click me! </button>
        </div>
      )}
      {/* array */}
      <h3>Array</h3>
      <div>Array gom: {arrayList.toString()}</div>
      <button onClick={handlRandom}>random</button>
      {/* khi nguoi dung click vao ramdom se them 1 so ngau nhien vao trong mang  */}

      {/* Object */}
      <h3>Object</h3>
      <div>Number object: {objList.objNumber}</div>
      <button
        onClick={() =>
          setObjList({ ...objList, objNumber: (objList.objNumber * 1) / 4 })
        }
      >
        up
      </button>
      <div>Array object: {objList.objArr.toString()}</div>
      <button
        onClick={() =>
          setObjList({
            ...objList,
            objArr: [...objList.objArr, Math.floor(Math.random() * 10)],
          })
        }
      >
        random
      </button>
      <h3>Json</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listStudent.map((e, i) => (
            <tr>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.address}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserState;
