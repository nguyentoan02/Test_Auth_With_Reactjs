# Boilerplate Authentication for MERN 
Đây là một ứng dụng xác thực mẫu được xây dựng bằng Reactjs cho frontend và Node.js/Express cho backend, minh họa cách tích hợp xác thực người dùng.

## Mục lục
- [Giới thiệu](#giới-thiệu)
- [Các tính năng](#các-tính-năng)
- [Bắt đầu](#bắt-đầu)
 - [Yêu cầu](#yêu-cầu)
  - [Cài đặt](#cài-đặt)
  - [Chạy ứng dụng](#chạy-ứng-dụng)
- [Sử dụng](#sử-dụng)
- [Đóng góp](#đóng-góp)
- [License](#license)
- [Liên hệ](#liên-hệ)

## Các tính năng

-   Đăng ký và đăng nhập người dùng.
-   Xác thực bằng JWT (JSON Web Tokens).
-   Bảo vệ các route API.
-   Giao diện người dùng đơn giản với React.
-   API RESTful cho thao tác người dùng.

  ### Yêu cầu

Đảm bảo bạn đã cài đặt các phần mềm sau trên máy tính của mình:

* [Node.js](https://nodejs.org/) (phiên bản 14 trở lên)
* [npm](https://www.npmjs.com/) (thường đi kèm với Node.js) hoặc [Yarn](https://yarnpkg.com/)
* [MongoDB](https://www.mongodb.com/try/download/community) (hoặc truy cập MongoDB Atlas)
* [Git](https://git-scm.com/)

  ### Cài đặt

1.  **Clone repository:**

    ```bash
    git clone [https://github.com/nguyentoan02/Test_Auth_With_Reactjs.git](https://github.com/nguyentoan02/Test_Auth_With_Reactjs.git)
    cd Test_Auth_With_Reactjs
    ```

2.  **Cài đặt các dependencies cho Backend:**

    ```bash
    cd backend
    npm install # hoặc yarn
    ```

3.  **Cài đặt các dependencies cho Frontend:**

    ```bash
    cd ../frontend
    npm install # hoặc yarn
    ```

4.  **Tạo file `.env` cho Backend:**
    Trong thư mục `backend`, tạo một file `.env` và thêm các biến môi trường sau:

    ```env
    MONGO_URI=mongodb://localhost:27017/auth_db
    JWT_SECRET=your_jwt_secret_key
    PORT=5000
    ```
    * **`MONGO_URI`**: Chuỗi kết nối đến cơ sở dữ liệu MongoDB của bạn.
    * **`JWT_SECRET`**: Một chuỗi bí mật mạnh mẽ được sử dụng để ký các JWT.
    * **`PORT`**: Cổng mà server backend sẽ chạy.
