import './index.css'

const TransactionItem = props => {
  const {eachItem, onDeleteItem, transactionTypeOptions} = props

  const deleteItem = () => {
    onDeleteItem(eachItem.id, eachItem.type, eachItem.amount)
  }

  const displayOptionText = transactionTypeOptions.filter(
    item => item.optionId === eachItem.type,
  )

  return (
    <li className="list-item">
      <p className="title-name">{eachItem.title}</p>
      <p className="title-name">Rs {eachItem.amount}</p>
      <p className="title-name">{displayOptionText[0].displayText}</p>
      <button
        data-testid="delete"
        onClick={deleteItem}
        className="delete-button"
        type="button"
      >
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
