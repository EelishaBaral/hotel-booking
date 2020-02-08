import React, { Component, Fragment } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import httpServices from "../../services/httpServices";
import config from "../../config.json";
import Swal from "sweetalert2";
import {  toast } from "react-toastify";
class MemberList extends Component {
  constructor(props) {
    super(props);
    this.config = {
      page_size: 5,
      length_menu: [5, 10, 20, 50]
    };
    this.state = {
      UserData: {}
    };
  }
  componentDidMount = () => {
    this.getUser();
  };
  getUser = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
    let response = await httpServices.get(`${config.apiEndPoint}/users`, {
      headers
    });
    this.setState({UserData: response.data.data });
  };
  handleDelete = async id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async result => {
      if (result.value) {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        };
        let response = await httpServices.delete(
          `${config.apiEndPoint}/users/${id}`,
          { headers }
        );
        if (response.status == 200) {
          let filData = this.state.UserData.filter(userData => {
            return userData._id != id;
          });
          this.setState({ UserData: filData });
          toast.success("SucessFully Deleted!", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  render() {
    let columns = [
      {
        key: "name",
        text: "UserName",
        className: "id",
        align: "left",

        sortable: true
      },
      {
        key: "email",
        text: "Email",
        className: "email",
        align: "left",
        sortable: true
      },

      {
        key: "action",
        text: "Action",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: data => {
          return (
            <Fragment>
              <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(data._id)}>
                <i className="fa fa-trash"></i>
              </button>
            </Fragment>
          );
        }
      }
    ];
    return (
      <div>
        <div classname="app-main__outer">
          <div classname="app-main__inner">
            <div classname="app-page-title">
              <div className="main-card mb-3 card">
                <div className="card-body">
                  <div>
                    <ReactDatatable
                      config={this.config}
                      records={this.state.UserData}
                      columns={columns}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemberList;

// import {Datatable} from "@o2xp/react-datatable";
// import React, { Component } from "react";

// let options  = {
//     keyColumn: 'id',
//     data: {
//         columns: [
//             {
//                 id: "id",
//                 label: "id",
//                 colSize: "80px"
//             },
//             {
//                 id: "name",
//                 label: "name",
//                 colSize: "150px"
//             },
//             {
//                 id: "age",
//                 label: "age",
//                 colSize: "50px"
//             },
//         ],
//         rows: [
//             {
//                 id: "50cf",
//                 age: 28,
//                 name: "Kerr Mayo"
//             },
//             {
//                 id: "209",
//                 age: 34,
//                 name: "Freda Bowman"
//             },
//             {
//                 id: "2dd81ef",
//                 age: 14,
//                 name: "Becky Lawrence"
//             }
//         ],
//     }
// }

// class MemberList extends Component {

//     render() {
//         return (
//             <div> <Datatable options={options} /> </div> )
//     }
// }

// export default MemberList;
