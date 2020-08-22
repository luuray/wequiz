# API 文档

**注意：**
POST请求时，需携带csrfToken，token存储于cookie中的csrfToken字段中。
```javascript
//vue with vue-cookie and axios
axios.interceptors.request.use(
    config => {
        config.headers = {
            'x-csrf-token': getCookie('csrfToken')//获取csrfToken
        }
        return config;
    }
)
```

### Passport/用户信息

| 地址 | 协议 | 参数 | 响应 |备注|
|-----|------|-----|-----|-----|
|/passport/signin|POST|[string]account <br/>[string]password| [success] <ul><li>HTTPCode: 200</li><li>Message: [JSON]<br/>`{"message":"success", "user_id": [int]USER_ID}`</li></ul>[error]<ul><li>HttpCode: 401</li><li>Message: [JSON]<br/>`{"message":"invalid username or password"}`</li></ul>||
|/passport/signout|GET| *null* | [success]<ul><li>HTTPCode: 200</li><li>Message: [JSON]<br/>`{"message":"success", "user_id":USER_ID,"last_sign":LAST_SIGN_DATE}`</li></ul>[error]<ul><li>HTTPCode: 401</li><li>Message: [JSON]<br/>`{"message":"user not singed"}`</li></ul>||
|/passport/signup|POST|


### Quiz/测试

