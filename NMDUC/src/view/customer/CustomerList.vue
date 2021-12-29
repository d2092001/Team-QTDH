<template>
  <div>
    <div class="m-content">
      <div class="m-title">
        <div class="m-content-text">khách hàng</div>
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
                <th class="text-align-left" fieldvalue="EmployeeCode">
                  MÃ NHÂN VIÊN
                </th>
                <th class="text-align-left" fieldvalue="EmployeeName">
                  TÊN NHÂN VIÊN
                </th>
                <th class="text-align-left" fieldvalue="GenderName">
                  GIỚI TÍNH
                </th>
                <th
                  class="text-align-center"
                  fieldvalue="DateOfBirth"
                  formattype="date"
                >
                  NGÀY SINH
                </th>
                <th class="text-align-center" fieldvalue="IdentityNumber">
                  SỐ CMND
                </th>
                <th class="text-align-left" fieldvalue="EmployeePosition">
                  CHỨC DANH
                </th>
                <th class="text-align-left" fieldvalue="DepartmentName">
                  TÊN ĐƠN VỊ
                </th>
                <th class="text-align-left" fieldvalue="BankAccountNumber">
                  SỐ TÀI KHOẢN
                </th>
                <th class="text-align-left" fieldvalue="BankName">
                  TÊN NGÂN HÀNG
                </th>
                <th class="text-align-left" fieldvalue="BankBranchName">
                  CHI NHÁNH NGÂN HÀNG
                </th>
                <th class="text-align-center" formattype="test">CHỨC NĂNG</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="customer in customers"
                :key="customer.CustomerId"
                @dblclick="rowDblClick(customer.CustomerId)"
              >
                <td>
                  <div class="m-checkbox">
                    <div class="m-icon-check"></div>
                  </div>
                </td>
                <td class="text-align-left">{{ customer.CustomerCode }}</td>
                <td class="text-align-left">{{ customer.FullName }}</td>
                <td class="text-align-left">Nam</td>
                <td class="text-align-center">
                  {{
                    customer.DateOfBirth
                      | fomatDataDDMMYYYY(customer.DateOfBirth)
                  }}
                </td>
                <td class="text-align-left">123123123123</td>
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
    <customer-detail
      :isShow="isShowDialog"
      :customerId="customerIdSelected"
      :CustomerCode="NewCustomerCode"
      @showDialog="showDialog"
      @resetOldId="resetOldId"
      @loadData="loadData"
    />
  </div>
</template> 
<script>
import axios from "axios";
import CustomerDetail from "../../view/customer/CustomerDetail.vue";
export default {
  components: { CustomerDetail },
  created() {
    this.loadData()
  },
  methods: {
    loadData: function(){
      var me = this;
    //todo gọi api cho dữ liệu
    axios
      .get("http://cukcuk.manhnv.net/api/v1/Customerss")
      .then(function (response) {
        console.log(
          "🚀 ~ file: TheContent.vue ~ line 405 ~ response",
          response
        );
        me.customers = response.data;
      })
      .catch(function (response) {
        console.log(
          "🚀 ~ file: TheContent.vue ~ line 409 ~ created ~ response",
          response
        );
      });
    },
    //!để thằng con gọi được phải qua 1 hàm của thằng cha
    showDialog: function (isShow) {
      this.isShowDialog = isShow;
    },
    /**
     * reset mã khách hàng
     * CreateBy: NMĐỨC(29/12/2021)
     */
    resetOldId: function () {
      this.NewCustomerCode = null;
       this.customerIdSelected = null;
    },
    btnAddOnclick: function () {
      //*lấy mã khách hàng mới
      var me = this;
      axios
        .get(`http://cukcuk.manhnv.net/api/v1/Customerss/NewCustomerCode`)
        .then(function (res) {
          me.NewCustomerCode = res.data;
        })
        .catch(function (err) {
          console.log("🚀 ~ file: CustomerDetail.vue ~ line 301 ~ err", err);
        });
      this.showDialog(true); //todo xét giá trị hàm
    },
    rowDblClick: function (customerId) {
      this.customerIdSelected = customerId;
      this.showDialog(true);
    },
  },
  filters: {
    fomatDataDDMMYYYY(date) {
      if (date) {
        const newDate = new Date(date);
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        day = day < 10 ? `0${day}` : `${day}`;
        month = month < 10 ? `0${month}` : `${month}`;
        return `${day}/${month}/${year}`;
      } else return "";
    },
  },
  data() {
    return {
      customerIdSelected: null,
      customers: null,
      isShowDialog: false,
      NewCustomerCode: null,
    };
  },
};
</script>