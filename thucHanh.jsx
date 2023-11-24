import React, { useState } from "react";

function Thuchanh() {
  // Thuc Hanh 1
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  //   Thuc Hanh2

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !address || !phone) {
      setError("Họ và tên, địa chỉ và số điện thoại là bắt buộc.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setError("Số điện thoại không đúng định dạng.");
      return;
    }

    // TODO: handle order submission
    setSuccess(true);
    // Thuc Hanh 3
    const [products, setProducts] = useState([
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
      { id: 3, name: "Product 3", price: 30 },
    ]);
    //   Thuc Hanh 4
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTask() {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }

    function handleChange(event) {
      setNewTask(event.target.value);
    }
  };
  return (
    <div>
      {/* Thuc Hanh 1 */}
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      {/* Thuc Hanh 2 */}
      {!success ? (
        <form onSubmit={handleSubmit}>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <div>
            <label htmlFor="name">Họ và tên:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Địa chỉ:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Số điện thoại:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="note">Ghi chú:</label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <button type="submit">Đặt hàng</button>
        </form>
      ) : (
        <div style={{ color: "green" }}>Đặt hàng thành công!</div>
      )}

      {/* Thuc Hanh3 */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      {/* Thuc Hanh 4 */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input type="text" value={newTask} onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default Thuchanh;
