---
sidebar_position: 2
---

# 极速试玩

## 启动Nginx
我们启动一个nginx实例来模拟应用程序与shifu的交互：

```bash
sudo kubectl run --image=nginx:1.21 nginx
sudo kubectl get pods
```
可以看到nginx已经在运行：

![nginx pod running](images/nginxPodStatus.png)

## 与AGV的数字孪生交互
<details>
  <summary> 点此查看AGV细节 </summary>
  Q：什么是AGV? <br/>
  A：AGV是一种自动导引运输车，具体介绍请点击<a href="https://baike.baidu.com/item/自动导引运输车/15535355">这里</a>。<br/>
  Q：这个试玩中如何模拟AGV? <br/>
  A：向模拟AGV发送命令 get_position会返回以x, y轴为坐标的设备当前位置。
</details>
接下来我们进入nginx：

```bash
sudo kubectl exec -it nginx -- bash
```

接下来我们可以和[AGV](https://baike.baidu.com/item/自动导引运输车/15535355)的数字孪生通过与`http://deviceshifu-agv.deviceshifu.svc.cluster.local`交互，得到AGV的当前x, y坐标：
```bash
curl http://deviceshifu-agv.deviceshifu.svc.cluster.local/get_position;echo
```

![deviceshifu-agv output](images/deviceshifu-agv_output.png)

## 与温度计的数字孪生交互
<details>
  <summary> 点此查看温度计细节 </summary>
  Q：这个试玩中如何模拟温度计?<br/>
  A：向模拟温度计发送命令read_value会返回当前温度计的读数。
</details>

首先，我们创建一个温度计的数字孪生：
```bash
sudo kubectl apply -f run_dir/shifu/demo_device/edgedevice-thermometer
```

我们可以看出温度计已经正常启动：
```bash
sudo kubectl get pods -A | grep thermometer
```

![deviceshifu-thermometer pod_start.png](images/deviceshifu-thermometer_pod_start.png)

接下来我们可以进入nginx来测试温度计：

```bash
sudo kubectl exec -it nginx -- bash
```

接下来我们可以和温度计的数字孪生通过与`http://deviceshifu-thermometer.deviceshifu.svc.cluster.local`交互，得到温度计的测量温度（以下结果随机）：
```bash
curl http://deviceshifu-thermometer.deviceshifu.svc.cluster.local/read_value;echo
```

![deviceshifu-thermometer output](images/deviceshifu-thermometer-output.png)

我们可以通过`get_status`得到温度计当前运行状态（以下结果随机）：

```bash
curl http://deviceshifu-thermometer.deviceshifu.svc.cluster.local/get_status;echo
```

![Running](images/Running.png)

```bash
curl http://deviceshifu-thermometer.deviceshifu.svc.cluster.local/get_status;echo
```

![Error](images/Error.png)

## 与酶标仪的数字孪生交互

<details>
  <summary> 点此查看酶标仪细节 </summary>
  Q：什么是酶标仪? <br/>
  A：酶标仪是一种实验室设备，具体介绍请点击<a href="https://baike.baidu.com/item/%E9%85%B6%E6%A0%87%E4%BB%AA">这里</a>。<br/>
  
  Q：这个试玩中如何模拟酶标仪? <br/>
  A：命令get_measurement会返回8*12的矩阵，其中的每一个数字代表一个样本中光谱分析扫描的结果数值。
</details>


接下来，我们启动酶标仪的数字孪生：

```
sudo kubectl apply -f run_dir/shifu/demo_device/edgedevice-plate-reader
```

我们可以看到酶标仪的数字孪生已经启动：

```bash
sudo kubectl get pods -A | grep plate
devices              plate-reader-5688c946b7-92dpg                          1/1     Running   0          6m3s
deviceshifu          deviceshifu-plate-reader-deployment-7cb998f6f4-2l4d6   1/1     Running   0          6m3s
```

接下来我们进入nginx：

```
sudo kubectl exec -it nginx -- bash
```

接下来我们可以和酶标仪的数字孪生通过与`http://deviceshifu-plate-reader.deviceshifu.svc.cluster.local`交互，得到酶标仪的测量结果：

![deviceshifu-plate-reader_output](images/deviceshifu-plate-reader_output.png)

## 与PLC的数字孪生交互

<details>
  <summary> 点此查看PLC细节 </summary>
  Q：什么是PLC? <br/>
  A：PLC是一种非常普遍的工业控制器，具体介绍请点击<a href="https://baike.baidu.com/item/%E5%8F%AF%E7%BC%96%E7%A8%8B%E9%80%BB%E8%BE%91%E6%8E%A7%E5%88%B6%E5%99%A8/84414?fromtitle=PLC&fromid=275974">这里</a>。<br/>
  
  Q：这个试玩中如何模拟PLC? <br/>
  A：命令sendsinglebit可以修改内存区域中一个bit，命令getcontent可以得到内存区域中一个byte的值。
</details>

接下来，我们启动PLC的数字孪生：

```bash
sudo kubectl apply -f run_dir/shifu/demo_device/edgedevice-plc
```

通过如下指令，可以看到PLC设备的数字孪生已经启动：

```bash
sudo kubectl get pods -A | grep plc
```

![deviceshifu-plc_pods_start](images/deviceshifu-plc_pods_start.png)

接下来我们需要进入nginx：

```bash
sudo kubectl exec -it nginx -- bash
```

现在，开发者可以和PLC的数字孪生通过`http://deviceshifu-plc.deviceshifu.svc.cluster.local`进行交互，将PLC Q内存区域的第0位设置成1：
```bash
curl "deviceshifu-plc.deviceshifu.svc.cluster.local/sendsinglebit?rootaddress=Q&address=0&start=0&digit=0&value=1";echo
```

![deviceshifu-plc_output1.png](images/deviceshifu-plc_output1.png)

“digit”表示plc的程序位点，“value”表示运行状态，通过修改“digit”与“value”的数值可以更改对应程序的运行状况，例如设定“digit=3”与“value=1”改变PLC初始状态：

```bash
curl "deviceshifu-plc.deviceshifu.svc.cluster.local/sendsinglebit?rootaddress=Q&address=0&start=0&digit=3&value=1";echo
```

![deviceshifu-plc_output2.png](images/deviceshifu-plc_output2.png)

## 与机械臂的数字孪生交互
<details>
  <summary> 点此查看机械臂细节 </summary>
  Q：什么是机械臂? <br/>
  A：机械臂是一种非常普遍的工业控制器，具体介绍请点击<a href="https://baike.baidu.com/item/%E6%9C%BA%E6%A2%B0%E8%87%82/2178090">这里</a>。<br/>
  
  Q：这个试玩中如何模拟机械臂? <br/>
  A：命令get_coordinate会返回机械臂当前的x, y, z轴坐标。
</details>

首先，我们创建一个机械臂的数字孪生：

```bash
sudo kubectl apply -f run_dir/shifu/demo_device/edgedevice-robot-arm
```

通过如下指令，可以看到机械臂的数字孪生已经启动：

```bash
sudo kubectl get pods -A | grep robotarm
```

![deviceshifu-reboot-arm_start_pods](images/deviceshifu-reboot-arm_start_pods.png)

接下来我们需要进入nginx：

```bash
sudo kubectl exec -it nginx -- bash
```

现在，开发者可以和机械臂的数字孪生通过`http://deviceshifu-robotarm.deviceshifu.svc.cluster.local`进行交互，得到机械臂的坐标：
```bash
curl http://deviceshifu-robotarm.deviceshifu.svc.cluster.local/get_coordinate;echo
```

![deviceshifu-reboot-arm_result1](images/deviceshifu-reboot-arm_result1.png)

此外，开发者可以和机械臂的数字孪生通过`http://deviceshifu-robotarm.deviceshifu.svc.cluster.local`进行交互，得到机械臂的运行状态（以下三种运行状态随机出现）:
```bash
curl http://deviceshifu-robotarm.deviceshifu.svc.cluster.local/get_status;echo
```

![Idle.png](images/Idle.png)

```bash
curl http://deviceshifu-robotarm.deviceshifu.svc.cluster.local/get_status;echo
```

![Error.png](images/Error.png)

```bash
curl http://deviceshifu-robotarm.deviceshifu.svc.cluster.local/get_status;echo
```

![Running.png](images/Running.png)

恭喜！！！:rocket: :rocket: :rocket: 你完成了Shifu的安装和Demo，接下来可以自由探索啦！
如果有兴趣，可以点击[这里](github.md)来访问我们的GitHub！