<template>
  <div>
    <div class="m-content">
      <div class="m-title">
        <div class="m-content-text">Nhân viên</div>
        <div class="m-content-btn">
          <button id="btnAddEmployee" @click="btnAddOnclick()" class="m-btn">
            <div class="m-btn-text"><b>Thêm mới khách hàng</b></div>
          </button>
        </div>
      </div>
      <div class="m-wrap">
        <div class="m-filter">
          <div class="m-row-input">
            <input
              class="m-input"
              placeholder="Tìm theo mã, tên nhân viên"
              type="text"
              name=""
              id="txtSearch"
            />
            <div class="m-icon-search"></div>
          </div>
          <div id="btnRefresh" class="btn-refresh"></div>
        </div>
        <div class="m-grid">
          <table id="tblEmployee" class="m-table">
            <thead>
              <tr>
                <th class="text-align-center" formattype="checkbox">
                  <div class="m-checkbox">
                    <div class="m-icon-check"></div>
                  </div>
                </th>
                <th class="text-align-left" >
                  MÃ NHÂN VIÊN
                </th>
                <th class="text-align-left" >
                  TÊN NHÂN VIÊN
                </th>
                <th class="text-align-left" >
                  GIỚI TÍNH
                </th>
                <th
                  class="text-align-center"
                 
                  formattype="date"
                >
                  NGÀY SINH
                </th>
                <th class="text-align-center">
                  SỐ CMND
                </th>
                <th class="text-align-left" >
                  CHỨC DANH
                </th>
                <th class="text-align-left" >
                  TÊN ĐƠN VỊ
                </th>
                <th class="text-align-left">
                  SỐ TÀI KHOẢN
                </th>
                <th class="text-align-left" >
                  TÊN NGÂN HÀNG
                </th>
                <th class="text-align-left" >
                  CHI NHÁNH NGÂN HÀNG
                </th>
                <th class="text-align-center" formattype="test">CHỨC NĂNG</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="employee in employees"
                :key="employee.EmployeeId"
                @dblclick="rowDblClick(employee.EmployeeId)"
              >
                <td>
                  <div class="m-checkbox">
                    <div class="m-icon-check"></div>
                  </div>
                </td>
                <td class="text-align-left">{{ employee.EmployeeCode }}</td>
                <td class="text-align-left">{{ employee.FullName }}</td>
                <td class="text-align-left">Nam</td>
                <td class="text-align-center">
                  {{
                    employee.DateOfBirth 
                  }}
                </td>
                <td class="text-align-left">{{ employee.IdentityNumber }}</td>
                <td class="text-align-left">Giám Đốc</td>
                <td class="text-align-left">Phòng Marketing</td>
                <td class="text-align-left">123123124</td>
                <td class="text-align-left">TP Bank</td>
                <td class="text-align-left">Hà Nội</td>
                <td>
                  <div class="text-align-center">
                    <div class="mcombobox v3">
                      <div class="m-cbx-text">Sửa</div>
                      <button class="m-combobox-button v3">
                        <div class="m-combobox-button-v3"></div>
                      </button>
                      <div class="m-combobox-data">
                        <div value="1" class="m-combobox-item">Nhân bản</div>
                        <div value="0" id="btnDelete" class="m-combobox-item">
                          Xóa
                        </div>
                        <div value="0" class="m-combobox-item">
                          Ngừng sử dụng
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="m-paging">
          <div id="dem" class="m-left">
            Tổng số: <b id="totalRecord">8</b> bản ghi
          </div>
          <div class="m-right-cbx">
            <div class="m-selected-options">
              <div class="mcombobox">
                <input
                  value="10 bản ghi trên 1 trang"
                  id="m-show"
                  type="text"
                  class="m-input-v2"
                />
                <button class="m-combobox-button turn">
                  <div class="m-combobox-button-v2"></div>
                </button>
                <div class="m-combobox-data turn-top">
                  <div value="10" class="m-combobox-item refresh">
                    10 bản ghi trên 1 trang
                  </div>
                  <div value="20" class="m-combobox-item refresh">
                    20 bản ghi trên 1 trang
                  </div>
                </div>
              </div>
            </div>
            <div class="m-combo-actions">
              <div class="m-paging">
                <div class="m-center">
                  <div class="m-first"></div>
                  <div class="m-prev">Trước</div>
                  <div class="m-number">
                    <div
                      id="m-number-page"
                      class="page-number-active m-page-number"
                    >
                      1
                    </div>
                    <div id="m-number-page" class="m-page-number">2</div>
                  </div>
                  <div class="m-next">Sau</div>
                  <div class="m-last"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <employee-detail
      :isShow="isShowDialog"
      :employeeId="employeeIdSelected"
      :EmloyeeCode="NewEmployeeCode"
      @showDialog="showDialog"
      @resetNewCode="resetNewCode"
      @resetOldId="resetOldId"
      @loadData="loadData"
    />
  </div>
</template> 
<script>
import axios from "axios";
import EmployeeDetail from "../../view/employee/EmployeeDetail.vue";
export default {
  components: { EmployeeDetail },
  //load data
  created() {
    this.loadData();
  },

  methods: {
    //lấy dữ liệu
    loadData: function () {
      var me = this;
      // gọi api cho dữ liệu
      axios
        .get("http://cukcuk.manhnv.net/api/v1/Employees")
        .then(function (response) {
          console.log("đã lấy đc data")
          //gọi thành công lưu trữ vào customers
          me.employees = response.data;
        })
        .catch(function (response) {
          //xử lí khi gọi không thành công
          console.log(
            "🚀lấy dữ liệu lỗi",
            response
          );
        });
    },
    //đóng mở popup detail
    showDialog: function (isShow) {
      this.isShowDialog = isShow;
    },
    //reset lại giá trị mã khi thêm mới
    resetNewCode: function () {
      this.NewEmployeeCode = null;
    },
    //reset lại giá trị mã khi đã sửa 
    resetOldId: function () {
      this.employeeIdSelected = null;
    },
    //xử lí click thêm mới nhân viên
    btnAddOnclick: function () {
      //lấy mã nhân viên mới
      var me = this;
      axios
        .get(`http://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode`)
        .then(function (res) {
          //lấy thành công lưu mã lại 
          me.NewEmployeeCode = res.data;
          console.log("ta có mã ",)
        })
        .catch(function (err) {
          //xử lí khi không thành công
          console.log("🚀 ~ file: CustomerDetail.vue ~ line 301 ~ err", err);
        });
        //đóng lại popup detail
      this.showDialog(true);
    },
    //dblclick sửa nhân viên
    rowDblClick: function (emId) {
      this.employeeIdSelected = emId;
      console.log(emId)
      //bật popup detail
      this.showDialog(true);
    },
  },
  filters: {
    //validate ngày sinh
    // fomatDataDDMMYYYY(date) {
    //   if (date) {
    //     const newDate = new Date(date);
    //     let day = newDate.getDate();
    //     let month = newDate.getMonth() + 1;
    //     let year = newDate.getFullYear();
    //     day = day < 10 ? `0${day}` : `${day}`;
    //     month = month < 10 ? `0${month}` : `${month}`;
    //     return `${day}/${month}/${year}`;
    //   } else return "";
    // },
  },
  data() {
    return {
      employeeIdSelected: null,
      employees: null,
      isShowDialog: false,
      NewEmployeeCode: null,
    };
  },
};
</script>