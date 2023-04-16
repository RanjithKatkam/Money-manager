import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <>
      <div className="balance">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="balance-name">Your Balance</p>
          <p data-testid="balanceAmount" className="amount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="balance-name">Your Income</p>
          <p data-testid="incomeAmount" className="amount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="balance-name">Your Expenses</p>
          <p data-testid="expensesAmount" className="amount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
