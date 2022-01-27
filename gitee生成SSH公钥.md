# gitee生成SSH公钥



### 1、生成公钥

```
ssh-keygen -t ed25519 -C "xxxxx@xxxxx.com"  
```

​	这里的xxxxx@xxxxx.com不是邮箱，只是生成的 sshkey 的名称，随便起。

​	然后按照提示三次回车后，即可生成ssh key

### 2、查看生成的公钥

官方教程的终端命令查看自己的公钥 ，可能会出现问题

```
cat ~/.ssh/id_ed25519.pub  
```

**问题1**：cat不是内部命令

​	解决：cat 是linux系统查看文件的命令。将cat替换成type ，type是windows系统查看文件的命令

**问题2**：查看路径不正确

​	解决：在cat或者type后输入绝对路径。

​				查看绝对路径，在windows系统中，ssh秘钥的路径为  [C盘] =>[用户]=>[用户名]=>[.ssh]=>[id_ed25519.pub]

​				进入到.ssh 文件后复制此路径，在路径后加上文件的名字就可以了。

### 3、添加公钥

​		复制终端公钥添加到gitee中

### 4、添加主机到本机SSH可信列表

```
ssh -T git@gitee.com
```

返回若返回 `Hi XXX! You've successfully authenticated, but Gitee.com does not provide shell access` 则为添加成功。添加成功后，就可以使用SSH协议对仓库进行操作了。