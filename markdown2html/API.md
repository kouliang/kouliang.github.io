# 共享播放服务 API说明文档

######  曾召帅 QQ：398157162
---
## **通讯协议**
1.使用HTTP协议通讯，并且已支持HTTPS，建议使用HTTPS访问,域名tv.wps.cn
2.默认使用JSON格式进行数据传递
3.API主要使用JSON来表示状态
4.接口无验证
5.心跳用户确保客户端与服务端连接，服务器每隔15秒检测用户是否收到心跳，如果30秒内没有收到认为客户端掉线，服务端主动断开与客户端连接，建议心跳包10秒发送一次（目前客户端基本都是5秒一次）


``` C++
HTTP/1.0 200 OK
Content-Type: application/json; charset=UTF-8
{
    "result": ...,
    "errorCode": 0
}
```
---

## **错误码对照表**

| 错误码（ errorCode） |                   代表信息                   |
| :-------------: | :--------------------------------------: |
|        0        |                   操作成功                   |
|        1        |             用户已经在消息组（ROOM）里              |
|        2        |               消息组（ROOM）不存在               |
|        3        |              消息组（ROOM）没有该用户              |
|        4        | 消息组创建者，不能使用/cloudmessage/quit行为关闭组，正常应该使用/cloudmessage/close |
|        5        |    非消息组创建者，不能使用/cloudmessage/close关闭组    |
|        6        |               消息组人数已经操出限制                |
|        7        |                服务端消息服务异常                 |
|        8        |                  unused                  |
|        9        |                  unused                  |
|       10        |                  unused                  |
|       11        |        客户端版本过低（相对于创建消息组用户的程序版本而言）        |
|       12        |        客户端版本太高（相对于创建消息组用户的程序版本而言）        |
|       13        |                  消息推送异常                  |
|   0x80000000    |              不支持的操作。unused               |
|   0x7fffffff    |               未知错误。unused                |

---

<span id="itfclist"></span>
## **接口列表**
1. [发起（launch）](#itfc1)
2. [接入（join）](#itfc2)
3. [退出（quit）](#itfc3)
4. [心跳（heartBeat）](#itfc4)
5. [检查接入码（checkaccesscode）](#itfc5)
6. [更新文件密码（updatepass）](#itfc6)
7. [发送消息（sendMessage）](#itfc7)
8. [广播消息（broadcastMessage）](#itfc8)
9. [上传文件（upload POST）](#itfc9)
10. [检查文件服务器是否存在（upload GET）](#itfc10)
11. [下载文件（download）](#itfc11)

<span id="itfc1"></span>
## 发起（launch） [back](#itfclist)
- 描述

| DESCRIPTION              | 发起共享播放                                   |
| ------------------------ | ---------------------------------------- |
| URL                      | /office-service/rest/cloudmessage/launch |
| METHOD                   | POST                                     |
| REQUEST HEADER           | Content-Type:application/json            |
| LATEAST PROTOCOL VERSION | 1.0                                      |
- 参数

|       参数名       |  参数类型  | 可空性  |                描述                |
| :-------------: | :----: | :--: | :------------------------------: |
|    isPublic     |  bool  |  否   | 请求匹配结果的第几页数据（索引值从1开始，为0表示请求所有数据） |
| maxPlayerCount  |  int   |  否   |             每页返回的条数              |
| protocolVersion | string |  否   |          分类，如果为空则表示不分类           |
|   appVersion    | string |  否   |                                  |
|   packageName   | string |  否   |                                  |
|      regId      | string |  是   |              目前传别名吧              |
|     params      |  见下表   |  否   |             扩展数据，目前              |

- params

  | 参数名             | 类型     | 可空性  | 描述                          |
  | --------------- | ------ | ---- | --------------------------- |
  | File-Passwd     | string | 否    | 文档密码，非加密文档，缺省值为EMPTY        |
  | File-Name       | string | 否    | 文件名（包含后缀）                   |
  | File-Md5        | string | 否    | 文件MD5                       |
  | FileLength      | string | 否    | 文件长度                        |
  | shareplaytype   | string | 否    | 共享播放类型：1为共享播放；2为TV投影；3为远程遥控 |
  | device-id       | string | 否    | Android局域网文件传输加密的key，默认为""  |
  | host_width      | string | 是    | 发起者屏幕宽度                     |
  | host_height     | string | 是    | 发起者屏幕高度                     |
  | host_density    | string | 是    | 发起者屏幕密度                     |
  | host_ydpi       | string | 是    | 发起者屏幕垂直DPI                  |
  | Custom-File-URL | string | 是    | 发起者文件来源可以来至其他服务器上的文件URL     |

- 请求

  ```json
  {
      "isPublic": true,
      "protocolVersion": "SPP/2.0",
      "appVersion" : "iOS/7.2",
  	"packageName" : "com.kingsoft.wwww.office.wpsoffice",
  	"regId" : "asdfasdfasdfasdfasdfasdf", //一般为mqtt的clientid
      "maxPlayerCount": 100,
      "params": {
          "shareplaytype": "2",
          "device-id": "aaafe70ef7aed9799bcdbf999811715b",
          "File-Passwd": "",
          "File-Md5": "6bffaaaa205c53417372b1d118e994c6",
          "File-Length": "29472",
          "File-Name": "1449113786541|encrypt演示文稿.pptx.pptx"
      }
  }
  ```

- 响应
<span id="itfc2"></span>

## 接入（join） [back](#itfclist)

- 描述

| DESCRIPTION              | 接入共享播放                                 |
| ------------------------ | -------------------------------------- |
| URL                      | /office-service/rest/cloudmessage/join |
| METHOD                   | POST                                   |
| REQUEST HEADER           | Content-Type:application/json          |
| LATEAST PROTOCOL VERSION | 1.0                                    |

- 参数

|       参数名       |  参数类型  | 可空性  |      描述       |
| :-------------: | :----: | :--: | :-----------: |
|   accessCode    | string |  否   |      接入码      |
| protocolVersion | string |  否   | 分类，如果为空则表示不分类 |
|   appVersion    | string |  否   |               |
|   packageName   | string |  否   |               |
|      regId      | string |  是   |    目前传别名吧     |

- 请求

  ```json
  {
  	"accessCode": "2941003551",
  	"protocolVersion":"SPP/2.0",
  	"appVersion" : "iOS/7.2",
  	"packageName" : "com.kingsoft.wwww.office.wpsoffice",
  	"regId" : "asdfasdfasdfasdfasdfasdf"  //一般为mqtt的clientid
  }
  ```

- 响应

```json
{
  "result": {
    "userId": "02468103-5978-4d62-b35b-f14207da063f",  //用户Id
    "groupInitiatorId": "52f846b5-7de6-42e4-9f31-8469db110935", //创建该消息租的客户端对应的UserId
    "messageReceivedAddress": {  //忽略目前没用
      "scheme": null,
      "address": null,
      "port": 0
    },
    "params": {
      //文档下载地址
      "Custom-File-URL": "http://tv.wps.cn:8081/download?category=cloudmessage&fileId=2941003551", 
      "File-Id": "52f846b5-7de6-42e4-9f31-8469db110935_2941003551",
      "File-Length": "29472",
      "File-Md5": "6bffaaaa205c53417372b1d118e994c6",
      "File-Name": "1449113786541|encrypt演示文稿.pptx.pptx",
      "File-Passwd": "",
      "device-id": "aaafe70ef7aed9799bcdbf999811715b",
      "host_density": "",
      "host_height": "",
      "host_width": "",
      "host_ydpi": "",
      "initiator_app_version": "iOS/9.4"   //消息创建者对应的app版本号
    },
    "serverVersion": "SPP/2.0"
  },
  "errorCode": 0
}
```

<span id="itfc3"></span>

## 退出（quit） [back](#itfclist)

- 描述

| DESCRIPTION              | 退出共享播放                                 |
| ------------------------ | -------------------------------------- |
| URL                      | /office-service/rest/cloudmessage/quit |
| METHOD                   | GET                                    |
| REQUEST HEADER           | Content-Type:application/json          |
| LATEAST PROTOCOL VERSION | 1.0                                    |

- 参数

| 参数名  |  参数类型  | 可空性  |  描述  |
| :--: | :----: | :--: | :--: |
| user | string |  否   | 用户Id |

- 响应

```json
{
  "result": true,
  "errorCode": 0
}
```

<span id="itfc4"></span>

## 心跳（heartBeat） [back](#itfclist)

- 描述

| DESCRIPTION              | 心跳消息                                     |
| ------------------------ | ---------------------------------------- |
| URL                      | /office-service/rest/cloudmessage/heartBeat |
| METHOD                   | GET                                      |
| REQUEST HEADER           | Content-Type:application/json            |
| LATEAST PROTOCOL VERSION | 1.0                                      |

- 参数

| 参数名  |  参数类型  | 可空性  |  描述  |
| :--: | :----: | :--: | :--: |
| user | string |  否   | 用户Id |

- 响应

```json
{
  "result": true,
  "errorCode": 0
}
```

<span id="itfc5"></span>

## 检查接入码（checkaccesscode） [back](#itfclist)

- 描述

| DESCRIPTION              | 检查接入码是否有效                                |
| ------------------------ | ---------------------------------------- |
| URL                      | /office-service/rest/cloudmessage/checkaccesscode |
| METHOD                   | POST                                     |
| REQUEST HEADER           | Content-Type:application/json            |
| LATEAST PROTOCOL VERSION | 1.0                                      |

- 参数

|    参数名     |  参数类型  | 可空性  |  描述  |
| :--------: | :----: | :--: | :--: |
| accessCode | string |  否   | 接入码  |

- 请求

```json
{
	"accessCode": "2941003551"
}
```

- 响应

```json
见join 接入API的响应
```

<span id="itfc6"></span>

##  更新文件密码（updatepass） [back](#itfclist)

- 描述

| DESCRIPTION              | 更新文件密码                                   |
| ------------------------ | ---------------------------------------- |
| URL                      | /office-service/rest/cloudmessage/updatepass |
| METHOD                   | POST                                     |
| REQUEST HEADER           | Content-Type:application/json            |
| LATEAST PROTOCOL VERSION | 1.0                                      |

- URL参数

|    参数名     |  参数类型  | 可空性  |  描述  |
| :--------: | :----: | :--: | :--: |
| accessCode | string |  否   | 接入码  |

- POST参数(见请求Body)


- 请求Body

```json
{
    "params": {
        "File-Passwd": "234234313"
    }
}
```

- 响应

```json
{
  "result": null,
  "errorCode": 0
}
```

<span id="itfc7"></span>

##  发送消息（sendMessage） [back](#itfclist)

- 描述

| DESCRIPTION              | 发送消息                                     |
| ------------------------ | ---------------------------------------- |
| URL                      | /office-service/rest/cloudmessage/sendMessage |
| METHOD                   | POST                                     |
| REQUEST HEADER           | Content-Type:application/json            |
| LATEAST PROTOCOL VERSION | 1.0                                      |

- URL参数

|    参数名     |  参数类型  | 可空性  |  描述  |
| :--------: | :----: | :--: | :--: |
| accessCode | string |  否   | 接入码  |
|   alias    | string |  否   |  别名  |

- 请求Body

```json
消息的二进制数据
```

- 响应

```json
{
  "result": true,
  "errorCode": 0
}
```

<span id="itfc8"></span>

##  广播消息（broadcastMessage） [back](#itfclist)

- 描述

| DESCRIPTION              | 广播消息                                     |
| ------------------------ | ---------------------------------------- |
| URL                      | /office-service/rest/cloudmessage/broadcastMessage |
| METHOD                   | POST                                     |
| REQUEST HEADER           | Content-Type:application/json            |
| LATEAST PROTOCOL VERSION | 1.0                                      |

- URL参数

|    参数名     |  参数类型  | 可空性  |  描述  |
| :--------: | :----: | :--: | :--: |
| accessCode | string |  否   | 接入码  |

- 请求Body

```json
消息的二进制数据
```

- 响应

```json
{
  "result": true,
  "errorCode": 0
}
```

<span id="itfc9"></span>

##  上传文件（upload POST） [back](#itfclist)

- 描述

| DESCRIPTION              | 上传文件    |
| ------------------------ | ------- |
| URL                      | /upload |
| METHOD                   | POST    |
| LATEAST PROTOCOL VERSION | 1.0     |

- 请求Body

```json
文件二进制数据
```

- 响应

```json
{'response':'ok'}  //是否存在根据HTTP Status来判断，200表示文件上传成功，202表示文件上传失败
```

<span id="itfc10"></span>

##  检查文件服务器存在（upload GET） [back](#itfclist)

- 描述

| DESCRIPTION              | 检查文件服务器存在 |
| ------------------------ | --------- |
| URL                      | /upload   |
| METHOD                   | GET       |
| LATEAST PROTOCOL VERSION | 1.0       |

- URL参数

|   参数名   |  参数类型  | 可空性  |  描述   |
| :-----: | :----: | :--: | :---: |
| fileMD5 | string |  否   | 文件MD5 |

- 响应

|  参数名   |  参数类型  | 可空性  |  描述   |
| :----: | :----: | :--: | :---: |
| fileId | string |  否   | 文件MD5 |

```json
{'response':'ok'}  //是否存在根据HTTP Status来判断，200表示文件存在，202表示文件不存在
```

<span id="itfc11"></span>

##  下载文件（download） [back](#itfclist)

- 描述

| DESCRIPTION              | 下载文件      |
| ------------------------ | --------- |
| URL                      | /download |
| METHOD                   | GET       |
| LATEAST PROTOCOL VERSION | 1.0       |

- URL参数

|    参数名     |  参数类型  | 可空性  |  描述  |
| :--------: | :----: | :--: | :--: |
| accessCode | string |  否   | 接入码  |

- 响应

```json
{'response':'ok'}  //是否存在根据HTTP Status来判断，200表示文件下载成功，202表示文件下载失败
```

