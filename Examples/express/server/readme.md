# Express

## Server

启动：

```bash
npm start
```

访问：
http://127.0.0.1:3000/

## MongoDB

### 安装：

[安装教程](https://www.imooc.com/article/18438)

### 启动：

在安装目录下启动点击`mongo.exe` 即可

#### 1.1 Database

```bash

# 查看所有数据库
> show dbs

# 指定到数据库local，如果数据库不存在，则创建一个
> use local
switched to db local

# 当前数据库
> db
local

# drop database
> db.dropDatabase()

```

#### 1.2 Collection

```bash
# 创建集合 collection（table）
> db.createCollection("users")
{ "ok" : 1 }

# 显示集合
> show collections
users

# 删除集合 users 
> db.users.drop()
true

```

#### 1.3 Document

```bash
# 插入文档 (row)
# db.collection.insertOne():向指定集合(collection)中插入一条文档数据
# db.collection.insertMany():向指定集合(collection)中插入多条文档数据

#  插入单条数据
> var document = db.collection.insertOne({"a": 3})
> document
{
  "acknowledged" : true,
  "insertedId" : ObjectId("571a218011a82a1d94c02333")
}

#  插入多条数据
> var res = db.collection.insertMany([{"b": 3}, {'c': 4}])
> res
{
  "acknowledged" : true,
  "insertedIds" : [
    ObjectId("571a22a911a82a1d94c02337"),
    ObjectId("571a22a911a82a1d94c02338")
  ]
}



# 查看文档 collection 里面的 document
> db.collection.find()

# 查看document，并优化查看格式
> db.collection.find().pretty()



# 更新文档
>db.collection.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })


# 删除文档，删除 title:MongoDB 教程 的数据
>db.collection.remove({'title':'MongoDB 教程'})
WriteResult({ "nRemoved" : 1 })


```