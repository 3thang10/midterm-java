**Sơ đồ quan hệ thực thể ERD:**

**Các Patterns, Principles được áp dụng:**

\+ Client SIde Rendering (CSR): Client sẽ nhận dữ liệu từ server và tạo ra HTML, CSS để hiện thị trang web
\+ Authentication: client gửi thông tin username và password, server thực hiện xác thực và trả về JSON Web Tokens (JWT)

\+ Authorization: phân quyền api, client thực hiện truy cập api được cung cấp từ server đống thời đính kèm theo header chứa access\_token, server thực hiện validate token kiểm tra quyền để có thể truy cập vào api

**Cấu trúc của source code:**

\+ Server (Spring boot): gồm 2 thành phần chính là Repository và Security. Repository sử dụng thư viện Spring Data Rest cung cấp đầy đủ các endpoint sẵn. Security thực hiện xác thực và phân quyền.
\+ Client (React JS) phân chia theo các component và giao tiếp với server thông qua các util gọi API, sử dụng các state để hiện thị và cập nhật giao diện mới.

**Các bước mô tả cách chạy source code:** 

\* YÊU CẦU: MySQL, JDK (17 hoặc mới hơn), IDEA có hỗ trợ build project Gradle (Intellij), NodeJS (npm), Git.

`	`+ Bước 1: git clone

\+ Bước 2: Mở bằng intellij sau đó ấn tổ hợp phím Alt + F12 để mở terminal. Sau đó gõ:

cd source\_code\SpringEcommerceMini\src\main\resources\static

`	`+ Bước 3: Chạy đoạn script trong file database.sql bằng mysql.

`	`+ Bước 4: Gõ cd.. \application.properties

`	`+ Bước 5: Thay đổi config 2 properties theo user và password của máy:

`		`spring.datasource.username = 

`		`spring.datasource.password = 

Nếu như dùng port mysql khác hoặc tại địa chỉ khác thì thay đổi cả spring.datasource.url

\+ Bước 6: Chạy SpringEcormmerceApplication.

\+ Bước 7: Mở 1 terminal khác và gõ cd\EcormerceMiniClient

\+ Bước 8: gõ npm install

\+ Bước 9: gõ npm start

\+ Bước 10: sau khi khởi chạy server thành công thì truy cập vào url: <http://localhost:3000/login>

\+ Bước 11: sử dụng tài khoản sau để đăng nhập:

`	`Username: user

`	`Password: 123456

**ẢNH CHỤP XÁC THỰC API**

\- Authentication - đăng nhập bằng username, password: http://localhost:8080/authenticate

\- lấy tất cả sản phẩm: http://localhost:8080/products


\- lấy tất cả sản phẩm có categoryid = 2: http://localhost:8080/products?categoryId=2



\- lấy products có categoryid = 2 và có giá từ 0 đến 15$:

\- lấy products có giá từ cao xuống thấp:

\- lấy products có giá từ thấp lên cao:

\- lấy tất cả sản phẩm trong giỏ hàng: http://localhost:8080/carts

\- xóa sản phẩm trong giỏ hàng có id = 8: http://localhost:8080/carts/delete/8

\- tạo một đơn hàng mới:

\- thêm 1 sản phẩm vào giỏ hàng:




