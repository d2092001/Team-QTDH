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
                  v-model="employee.EmployeeCode"
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
                  v-model="employee.FullName"
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
                  v-bind:value="
                    employee.DateOfBirth
                     
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
                />
                <!-- <combobox
                  id="cbxPosition"
                  api="http://amis.manhnv.net/api/v1/Positions"
                  propertyDisplay="PositionName"
                  propertyValue="PositionId"
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
                  v-model="employee.PhoneNumber"
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
  name: "EmployeeDetail",
  methods: {
    //xử lí cancel
    btnCancelOnclick: function () {
      this.$emit("resetOldId");
      this.$emit("resetNewCode");
      this.employee = {};
      this.$emit("showDialog", false);
      this.$emit("loadData");
    },
    //xử lí khi 'cất và thêm'
    btnSaveOnclick: function () {
      var me = this;
      if (this.employeeId == null) {
        //thêm mới
        //gọi api
        axios({
          method: "post",
          url: "http://cukcuk.manhnv.net/api/v1/Employees",
          data: this.employee,
        })
          .then(function () {
            //loat lại bảng
            me.$parent.loadData(); 
            //đóng popup khi thêm mới thành công
            me.btnCancelOnclick();
          })
          .catch(function (error) {
            //xử lí khi thêm mới không thành công
            console.log(error);
          });
      } else {
        //sửa
        //gọi api
        axios
          .put(
            `http://cukcuk.manhnv.net/api/v1/Employees/${this.EmployeeId}`,
            this.employee
          )
          .then(function () {
            //sửa thành công
            //đóng popup
            me.$emit("showDialog", false);
          })
          .catch(() => {
            //sửa không thành công
            alert("sửa không thành công");
            
          });
      }
    },
  },

  filters: {
    //xử lí khi nhập ngày sinh
    // fomatDataDDMMYYYY(date) {
    //   console.log(date);
    //   return "20-09-2001";
    // },
  },
  watch: {
    EmployeeCode: function (value) {
      this.employeeId = { EmployeeCode: value };
    },
    //xử lí khi có id mới đc truyền vào
    employeeId: function (value) {
      var me = this;
      if (value != null) {
        // show popup detail khi sửa
        // gọi api lấy dữ liệu
        axios
          .get(`http://cukcuk.manhnv.net/api/v1/Employees/${value}`)
          .then(function (res) {
            //lấy được data
            me.employee = res.data;
            console.log(me.employeee)
          })
          .catch(function (err) {
            //không lấy được data
            console.log("🚀 ~ file: employeeDetail.vue ~ line 301 ~ err", err);
          });
      }
    },
  },
  props: {
    employeeId: {
      default: null,
      type: String,
    },
    isShow: {
      default: null,
      type: Boolean,
    },
    EmployeeCode: {
      default: null,
      type: String,
    },
  },

  data() {
    return {
      employee: {},
    };
  },
};
</script>