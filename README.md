**Sơ đồ quan hệ thực thể ERD:**
 
![image](https://github.com/3thang10/midterm-java/assets/30361534/213349f6-53bd-46fc-bada-cc6fa52eade3)

**Các Patterns, Principles được áp dụng:**

\+ Client SIde Rendering (CSR): Client sẽ nhận dữ liệu từ server và tạo ra HTML, CSS để hiện thị trang web
\+ Authentication: client gửi thông tin username và password, server thực hiện xác thực và trả về JSON Web Tokens (JWT)

\+ Authorization: phân quyền api, client thực hiện truy cập api được cung cấp từ server đống thời đính kèm theo header chứa access\_token, server thực hiện validate token kiểm tra quyền để có thể truy cập vào api

**Cấu trúc của source code:**

![image](https://github.com/3thang10/midterm-java/assets/30361534/9d999d61-ae27-4d19-b749-cbb525554b08)


\+ Server (Spring boot): gồm 2 thành phần chính là Repository và Security. Repository sử dụng thư viện Spring Data Rest cung cấp đầy đủ các endpoint sẵn. Security thực hiện xác thực và phân quyền.
\+ Client (React JS) phân chia theo các component và giao tiếp với server thông qua các util gọi API, sử dụng các state để hiện thị và cập nhật giao diện mới.

**Các bước mô tả cách chạy source code:** 

\* YÊU CẦU: MySQL, JDK (17 hoặc mới hơn), IDEA có hỗ trợ build project Gradle (Intellij), NodeJS (npm), Git.

`	`+ Bước 1: git clone https://github.com/3thang10/midterm-java.git

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

![image](https://github.com/3thang10/midterm-java/assets/30361534/e02eaa65-42d1-4d16-8b83-ccd62fa63183)


\- lấy tất cả sản phẩm: http://localhost:8080/products

![image](https://github.com/3thang10/midterm-java/assets/30361534/91607aa4-71dd-4a49-8d8d-6c2345d390bd)

\- lấy tất cả sản phẩm có categoryid = 2: http://localhost:8080/products?categoryId=2

![image](https://github.com/3thang10/midterm-java/assets/30361534/b34263e0-4501-4000-bc29-8db2b96ddc33)

\- lấy products có categoryid = 2 và có giá từ 0 đến 15$:

![image](https://github.com/3thang10/midterm-java/assets/30361534/e6fe7bd1-4c88-44ef-88a3-aaec1fac49ac)

\- lấy products có giá từ cao xuống thấp:

![image](https://github.com/3thang10/midterm-java/assets/30361534/2c9afa43-7745-4be2-be29-870e301e7e38)

\- lấy products có giá từ thấp lên cao:

![image](https://github.com/3thang10/midterm-java/assets/30361534/e2c8513c-be10-4d0c-809c-4e6e7327017c)

\- lấy tất cả sản phẩm trong giỏ hàng: GET: http://localhost:8080/carts

![image](https://github.com/3thang10/midterm-java/assets/30361534/3cc8210c-ace9-4ce0-bd63-e84a336917ed)

\- xóa sản phẩm trong giỏ hàng có id = 8: POST: http://localhost:8080/carts/delete/8

![image](https://github.com/3thang10/midterm-java/assets/30361534/04fd67d7-7010-425f-8208-1cb3623605d9)

\- tạo một đơn hàng mới: POST: http://localhost:8080/order

![image](https://github.com/3thang10/midterm-java/assets/30361534/0cbfeeeb-6159-4fb8-81c3-d066c632e502)

\- thêm 1 sản phẩm vào giỏ hàng: POST: http://localhost:8080/carts

![image](https://github.com/3thang10/midterm-java/assets/30361534/1108e4b3-06ab-4ac9-96cf-050bfc617db2)



