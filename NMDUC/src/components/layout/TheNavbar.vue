 <template>
  <div class="m-navbar">
    <div class="m-logo-box">
      <div class="m-toggle"></div>
      <div class="m-logo-page"></div>
    </div>
    <div class="m-navbar-box">
      <router-link to="/employee" class="m-menu-item">
        <div class="m-menu-item-icon m-icon-muahang m-icon"></div>
        <div class="m-menu-item-text">Nhân viên</div>
      </router-link>
      <router-link to="/customer" class="m-menu-item">
        <div class="m-menu-item-icon m-icon m-icon-quanlihoadon"></div>
        <div class="m-menu-item-text">Khách hàng</div>
      </router-link>

         <div class="m-menu-item">
          <div class="m-menu-item-icon m-icon m-icon-tongquan"></div>
          <div class="m-menu-item-text">Tổng quan</div>
        </div>
        <div class="m-menu-item">
          <div class="m-menu-item-icon m-icon m-icon-tienmat"></div>
          <div class="m-menu-item-text">Tiền mặt</div>
        </div>
        <div class="m-menu-item">
          <div class="m-menu-item-icon m-icon m-icon-tiengui"></div>
          <div class="m-menu-item-text">Tiền gửi</div>
        </div>
        <a href="employee.html" class="m-menu-item">
          <div class="m-menu-item-icon m-icon-muahang m-icon"></div>
          <div class="m-menu-item-text">Mua hàng</div>
        </a>
        <a href="customer.html" class="m-menu-item">
          <div class="m-menu-item-icon m-icon m-icon-quanlihoadon"></div>
          <div class="m-menu-item-text">Quản lí hóa đơn</div>
        </a>
        <div class="m-menu-item">
          <div class="m-menu-item-icon m-icon-kho m-icon"></div>
          <div class="m-menu-item-text">Kho</div>
        </div>
        <div class="m-menu-item">
          <div class="m-menu-item-icon m-icon-congcudungcu m-icon"></div>
          <div class="m-menu-item-text">Công cụ dụng cụ</div>
        </div>
        <div class="m-menu-item">
          <div class="m-menu-item-icon m-icon-taisancodinh m-icon"></div>
          <div class="m-menu-item-text">Tài sản cố định</div>
        </div>
        <div class="m-menu-item">
          <div class="m-menu-item-icon m-icon-thue m-icon"></div>
          <div class="m-menu-item-text">Thuế</div>
        </div>
        <div class="m-menu-item">
          <div class="m-menu-item-icon m-icon-giathanh m-icon"></div>
          <div class="m-menu-item-text">Giá thành</div>
        </div>
        <div class="m-menu-item">
          <div class="m-menu-item-icon m-icon-tonghop m-icon"></div>
          <div class="m-menu-item-text">Tổng hợp</div>
        </div>
        <div class="m-menu-item">
          <div class="m-menu-item-icon m-icon-ngansach m-icon"></div>
          <div class="m-menu-item-text">Ngân sách</div>
        </div>
        <div class="m-menu-item">
          <div class="m-menu-item-icon m-icon-baocao m-icon"></div>
          <div class="m-menu-item-text">Báo cáo</div>
        </div>
        <div class="m-menu-item">
          <div class="m-menu-item-icon m-icon-phantichtaichinh m-icon"></div>
          <div class="m-menu-item-text">Phân tích tài chính</div>
        </div>
    </div>
  </div>
</template>