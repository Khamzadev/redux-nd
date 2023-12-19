import './App.css';
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customer.customers)
  const dispatch = useDispatch()

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }
  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch({ type: 'ADD_CUSTOMER', payload: customer })
  }

  const deleteCustomer = (id) => {
    dispatch({ type: 'DELETE_CUSTOMER', payload: id })
  }

  return (
    <div className="App">
      <h1>Счет в банке : {cash} $</h1>
      <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
      <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>


      {
        customers.length > 0 ?
          <div>
            {
              customers.map(customer => (
                <div style={{ cursor: 'pointer' }} onClick={() => deleteCustomer(customer.id)}>{customer.name}</div>
              ))
            }
          </div>
          :
          <div>клиевтов неут</div>
      }
    </div>
  );
}

export default App;
