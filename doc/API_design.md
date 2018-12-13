# API 设计文档

本文档描述了后端需要实现的，除了基础 API 之外的 API。

## /sign_up

- 请求类型：**POST**
- 功能简介：

  接收用户填入的用户名和密码，并尝试将其加入数据库中。如果已经存在相同的用户名，则返回一个错误提示。否则返回确认信息。

- 数据字段：

  |字段名|字段含义|
  |-|-|
  |username|申请注册的用户名|
  |password|申请注册的用户密码|
  |email|申请注册的邮箱地址|

- 响应示例：

  - 注册成功的响应信息：

    ```json
    {
      "status": "OK"
    }
    ```
  
  - 注册失败的响应信息：

    ```json
    {
      "status": "Failed",
      "message": "This username has been occupied."
    }
    ```

## /sign_in

- 请求类型：**POST**
- 功能简介：

  接收用户填入的用户名和密码，尝试与数据库内的账户信息进行匹配。如果成功，则返回确认信息，否则返回错误信息。

- 数据字段：

  |字段名|字段含义|
  |-|-|
  |username|尝试登陆的用户名|
  |password|尝试登陆的用户密码|

- 响应示例：

  - 登陆成功的响应信息：

    ```json
    {
      "status": "OK"
    }
    ```

  - 登录失败的响应信息：

    ```json
    {
      "status": "Failed",
      "message": "Username does not exist or invalid password"
    }
    ```

## /sign_out

- 请求类型：**GET**
- 功能简介：
  
  尝试登出当前账户，并返回确认信息，若未登录则返回错误信息。

- 数据字段：

  **无**

- 响应示例：

  - 登出成功的响应信息：

  ```json
  {
    "status": "OK"
  }
  ```

  - 登出失败的响应信息：

  ```json
  {
    "status": "Failed",
    "message": "You've not signed in yet"
  }
  ```