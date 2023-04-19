import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    titleInput: '',
    amountInput: '',
    type: 'INCOME',
    historyList: [],
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onEnterAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onSelectType = event => {
    this.setState({type: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, type} = this.state

    const newHistory = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type,
    }

    if (type === 'INCOME') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(newHistory.amount),
      }))
      this.setState(prevState => ({
        income: prevState.income + parseInt(newHistory.amount),
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(newHistory.amount),
      }))
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(newHistory.amount),
      }))
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      titleInput: '',
      amountInput: '',
      type: 'INCOME',
    }))
  }

  onDeleteItem = (id, type, amount) => {
    this.setState(prevState => ({
      historyList: prevState.historyList.filter(eachItem => {
        if (eachItem.id !== id) {
          return eachItem
        }
        return ''
      }),
    }))

    if (type === 'EXPENSES') {
      this.setState(prevState => ({
        expenses: prevState.expenses - amount,
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - amount,
      }))
    }
  }

  render() {
    const {
      titleInput,
      amountInput,
      type,
      balance,
      income,
      expenses,
      historyList,
    } = this.state
    return (
      <div className="main-container">
        <div className="container">
          <div className="header">
            <h1 className="name">Hi Richard</h1>
            <p className="greeting">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expenses}
              type={type}
            />
          </div>
          <div className="bottom-container">
            <form
              onSubmit={this.addTransaction}
              className="add-transaction-container"
            >
              <h1 className="heading">Add Transaction</h1>
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <input
                onChange={this.onChangeTitle}
                placeholder="TITLE"
                value={titleInput}
                className="title"
                id="title"
                type="text"
              />
              <label className="label" htmlFor="date">
                AMOUNT
              </label>
              <input
                onChange={this.onEnterAmount}
                placeholder="AMOUNT"
                value={amountInput}
                className="date"
                id="date"
                type="amount"
              />
              <label className="label" htmlFor="select">
                TYPE
              </label>
              <select onClick={this.onSelectType} id="select">
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history">History</h1>
              <div className="headings">
                <p className="tag">Title</p>
                <p className="tag">Amount</p>
                <p className="tag">Type</p>
              </div>
              <ul>
                {historyList.map(eachItem => (
                  <TransactionItem
                    key={eachItem.id}
                    onDeleteItem={this.onDeleteItem}
                    eachItem={eachItem}
                    transactionTypeOptions={transactionTypeOptions}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
