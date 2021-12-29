<template>
  <div id="dlgPopup" class="m-dialog" :class="{ isShow: isShow }">
    <div class="m-popup-employee">
      <div class="m-popup-employee-header">
        <div class="m-left">
          Thông tin nhân viên
          <div class="m-header-checkbox">
            <div class="m-checkbox">
              <div class="m-icon-check"></div>
            </div>
            <div class="m-checkbox-text">Là khách hàng</div>
          </div>
          <div class="m-header-checkbox">
            <div class="m-checkbox">
              <div class="m-icon-check"></div>
            </div>
            <div class="m-checkbox-text">Là khách hàng</div>
          </div>
        </div>

        <div id="btnCloseDialog" class="m-right">
          <div class="m-icon-question"></div>
          <div class="m-icon-close"></div>
        </div>
      </div>
      <div class="m-popup-employee-content">
        <div class="m-right">
          <div class="m-row-fill">
            <div class="m-fill-in">
              <label for="" class="m-label"> Mã <span>*</span></label>
              <div class="m-row">
                <input
                  id="txtEmployeeCode"
                  class="m-input"
                  placeholder=""
                  type="text"
                  name=""
                  fieldName="EmployeeCode"
                  v-model="customer.CustomerCode"
                />
                <div class="m-wrap-popup-error">
                  <div class="m-popup-error">
                    Thông tin này không được bỏ trống !
                  </div>
                </div>
              </div>
            </div>
            <div class="m-fill-in">
              <label for="" class="m-label">Tên <span>*</span> </label>
              <div class="m-row">
                <input
                  class="m-input"
                  placeholder=""
                  type="text"
                  name=""
                  id="txtFullName"
                  fieldName="EmployeeName"
                  v-model="customer.FullName"
                />
              </div>
            </div>
            <div class="m-fill-in">
              <label for="" class="m-label"> Ngày sinh </label>
              <div class="m-row">
                <input
                  class="m-input"
                  placeholder=""
                  type="date"
                  name=""
                  id="dtDate"
                  fieldName="DateOfBirth"
                  v-bind:value="
                    customer.DateOfBirth
                      | fomatDataDDMMYYYY(customer.DateOfBirth)
                  "
                />
              </div>
            </div>
            <div class="m-fill-in">
              <label for="" class="m-label"> Giới tính </label>
              <div class="m-row-radio">
                <div class="m-check">
                  <div class="checkmark"><div class="dot dot-1"></div></div>
                  <div class="container">Nam</div>
                </div>

                <div class="m-check">
                  <div class="checkmark"><div class="dot dot-0"></div></div>
                  <label class="container">Nữ</label>
                </div>
                <div class="m-check">
                  <div class="checkmark"><div class="dot dot-2"></div></div>
                  <label class="container">Khác</label>
                </div>
              </div>
            </div>
            <div class="m-fill-in row-2">
              <label for="" class="m-label"> Đơn vị <span>*</span> </label>
              <div class="m-row">
                <!-- <combobox
                  id="cbxDepartment"
                  api="http://amis.manhnv.net/api/v1/Departments"
                  propertyDisplay="DepartmentName"
                  propertyValue="DepartmentId"
                  fieldName="DepartmentId"
                >
                </combobox> -->
              </div>
            </div>
            <div class="m-fill-in">
              <label for="" class="m-label"> Số CMND </label>
              <div class="m-row">
                <input
                  class="m-input"
                  placeholder=""
                  type="text"
                  name=""
                  id=""
                  fieldName="IdentityNumber"
                />
              </div>
            </div>
            <div class="m-fill-in">
              <label for="" class="m-label"> Ngày cấp </label>
              <div class="m-row">
                <div class="m-row">
                  <input
                    class="m-input"
                    placeholder=""
                    type="date"
                    name=""
                    id="dtDateIdentity"
                    fieldName="IdentityDate"
                  />
                </div>
              </div>
            </div>
            <div class="m-fill-in row-2">
              <label for="" class="m-label"> Chức danh </label>
              <div class="m-row">
                <input
                  class="m-input"
                  placeholder=""
                  type="text"
                  name=""
                  fieldName="EmployeePosition"
                />
                <!-- <combobox
                  id="cbxPosition"
                  api="http://amis.manhnv.net/api/v1/Positions"
                  propertyDisplay="PositionName"
                  propertyValue="PositionId"
                  fieldName="PositionId"
                >
                </combobox> -->
              </div>
            </div>
            <div class="m-fill-in row-2">
              <label for="" class="m-label"> Nơi cấp </label>
              <div class="m-row">
                <input
                  class="m-input"
                  placeholder=""
                  type="text"
                  name=""
                  id="txtAddress"
                  fieldName="IdentityPlace"
                />
              </div>
            </div>
          </div>
          <br />
          <div class="m-row-fill">
            <div class="m-fill-in row-full">
              <label for="" class="m-label"> Địa chỉ </label>
              <div class="m-row">
                <input
                  class="m-input"
                  placeholder=""
                  type="text"
                  name=""
                  id="txtEmail"
                  fieldName="Address"
                />
              </div>
            </div>
          </div>

          <div class="m-row-fill">
            <div class="m-fill-in">
              <label for="" class="m-label">ĐT di động </label>
              <div class="m-row">
                <input
                  class="m-input"
                  placeholder=""
                  type="text"
                  name=""
                  id="txtEmail"
                  fieldName="PhoneNumber"
                  v-model="customer.PhoneNumber"
                />
              </div>
            </div>
            <div class="m-fill-in">
              <label for="" class="m-label">ĐT cố định </label>
              <div class="m-row">
                <input
                  class="m-input"
                  placeholder=""
                  type="text"
                  name=""
                  id="txtEmail"
                  fieldName="TelephoneNumber"
                />
              </div>
            </div>
            <div class="m-fill-in">
              <label for="" class="m-label">Email</label>
              <div class="m-row">
                <input
                  class="m-input"
                  placeholder=""
                  type="text"
                  name=""
                  id="txtEmail"
                  fieldName="Email"
                />
              </div>
            </div>
          </div>
          <div class="m-row-fill">
            <div class="m-fill-in">
              <label for="" class="m-label">Tài khoản ngân hàng</label>
              <div class="m-row">
                <input
                  class="m-input"
                  placeholder=""
                  type="text"
                  name=""
                  id="txtEmail"
                  fieldName="BankAccountNumber"
                />
              </div>
            </div>
            <div class="m-fill-in">
              <label for="" class="m-label">Tên ngân hàng</label>
              <div class="m-row">
                <input
                  class="m-input"
                  placeholder=""
                  type="text"
                  name=""
                  id="txtEmail"
                  fieldName="BankName"
                />
              </div>
            </div>
            <div class="m-fill-in">
              <label for="" class="m-label">Chi nhánh</label>
              <div class="m-row">
                <input
                  class="m-input"
                  placeholder=""
                  type="text"
                  name=""
                  id="txtEmail"
                  fieldName="BankBranchName"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-row-rim">
        <div class="m-rim"></div>
      </div>
      <div class="m-popup-employee-footer">
        <div class="left-footer">
          <button
            id="btnCloseDialog"
            @click="btnCancelOnclick()"
            class="m-btn m-continue"
          >
            Hủy
          </button>
        </div>
        <div class="right-footer">
          <button id="btnSave" class="m-btn m-continue">Cất</button>
          <button
            id="btnSave-Add"
            class="m-btn m-close"
            @click="btnSaveOnclick()"
          >
            Cất và Thêm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CustomerDetail",
  methods: {
    btnCancelOnclick: function () {
      this.$emit("resetOldId");
      this.customer = {};
      this.$emit("showDialog", false);
      this.$emit("loadData");
    },

    btnSaveOnclick: function () {
      var me = this;
      if (this.customerId == null) {
        axios({
          method: "post",
          url: "http://cukcuk.manhnv.net/api/v1/Customerss",
          data: this.customer,
        })
          .then(function (response) {
            me.$parent.loadData(); //gọi cha load lại
            me.btnCancelOnclick();
            if (response && response.data) console.log("Success!");
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log("this.customer sửa" + this.customer);
        axios
          .put(
            `http://cukcuk.manhnv.net/api/v1/Customerss/${this.customerId}`,
            this.customer
          )
          .then(function (res) {
            console.log(res);
            //đóng popup
            me.$emit("showDialog", false);
          })
          .catch((res) => {
            console.log(res);
            alert("thêm không thành công");
          });
      }
    },
  },

  filters: {
    fomatDataDDMMYYYY(date) {
      console.log(date);
      return "20-09-2001";
    },
  },
  watch: {
    CustomerCode: function (value) {
      this.customer = { CustomerCode: value };
    },
    customerId: function (value) {
      var me = this;
      if (value != null) {
        // sửa
        //todo gọi api lấy dữ liệu
        axios
          .get(`http://cukcuk.manhnv.net/api/v1/Customerss/${value}`)
          .then(function (res) {
            me.customer = res.data;
          })
          .catch(function (err) {
            console.log("🚀 ~ file: CustomerDetail.vue ~ line 301 ~ err", err);
          });
      }
    },
  },
  props: {
    customerId: {
      default: null,
      type: String,
    },
    isShow: {
      default: null,
      type: Boolean,
    },
    CustomerCode: {
      default: null,
      type: String,
    },
  },

  data() {
    return {
      customer: {},
    };
  },
};
</script>