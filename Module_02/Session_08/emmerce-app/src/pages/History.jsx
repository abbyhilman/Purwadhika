import React from "react";
import Axios from "axios";
import { API_URL } from "../constants/API";
import { connect } from "react-redux";

class history extends React.Component {
  state = {
    transactionList: [],
    transactionDetail: [],
  };

  fetchTransactions = () => {
    Axios.get(`${API_URL}/transactions`, {
      params: {
        userId: this.props.userGlobal.id,
      },
    })
      .then((res) => {
        this.setState({ transactionList: res.data });
      })
      .catch((err) => {
        alert(`Terjadi Kesalahan di server`);
      });
  };

  seeDetailsBtnHandler = (transactionDetail) => {
    this.setState({ transactionDetail });
  };

  renderTransaction = () => {
    return this.state.transactionList.map((item) => {
      return (
        <tr>
          <td>{item.transactionDate}</td>
          <td>{item.transactionItems.length} items(s)</td>
          <td>Rp {item.totalPrice}</td>
          <td>
            <button
              onClick={() => this.seeDetailsBtnHandler(item.transactionItems)}
              className="btn btn-info"
            >
              See Details
            </button>
          </td>
        </tr>
      );
    });
  };

  renderTransactionDetailItems = () => {
    return this.state.transactionDetail.map((item) => {
      return (
        <div className="d-flex my-2 flex-row justify-content-between align-items-center">
          <span className="fw-bold">
            {item.productName} ({item.quantity})
          </span>
          <span>Rp {item.price * item.quantity}</span>
        </div>
      );
    });
  };

  componentDidMount() {
    this.fetchTransactions();
  }

  render() {
    return (
      <div className="p-5">
        <h1>Transaction History</h1>
        <div className="row mt-5">
          <div className="col-8">
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th>Transaction Date</th>
                  <th>Total Items</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{this.renderTransaction()}</tbody>
            </table>
          </div>
          <div className="col-4">
            {this.state.transactionDetail.length ? (
              <div className="card">
                <div className="card-header">
                  <strong>Transaction Details</strong>
                </div>
                <div className="card-body">
                  {this.renderTransactionDetailItems()}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

export default connect(mapStateToProps)(history);
