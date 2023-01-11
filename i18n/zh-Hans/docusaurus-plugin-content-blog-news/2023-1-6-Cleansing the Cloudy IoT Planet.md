# 拨开物联网星球的重重云雾

:::info
Shifu是一个Kubernetes原生的物联网开发框架，开发者通过Shifu可以轻松实现连接、监控和控制任何物联网设备。Shifu将Kubernetes带入到物联网边缘计算场景中，助力实现物联网应用程序的可扩展性和高可用性。
:::

### “这个平台真的稳定吗？”
云服务厂商的IoT解决方案“廉价、高效、安全”，但当谷歌发出公告将要关闭IoT Core时，任何在享受其服务的人都需要问问这个问题。
 
当然，我不仅仅是在说谷歌。公共云的供应商是很苛刻的，他们以低价提供额余功能来吸引客户，使其股价大涨；但当经济不景气的时候，他们又会扔掉这种对于他们来说“纯烧钱”的服务。此时客户就会突然意识到：他们的物联网设备需要一个“新家”。他们的处境宛如“被房东赶出出租公寓的租客”。
 
有没有一种既能享受这些优质服务，又不担心“搬家”窘状的办法呢？没错，我们有这个办法。

# Shifu
是的，Shifu是一个新的IoT平台。

Shifu拥有Google IoT Core的一切功能，而且平台之间的转换快速便捷，只需“按一下开关”就能轻松实现。

1. 设备管理和控制：Shifu提供了一个HTTP接口，用户可以通过REST API与设备进行交互。Shifu与现有协议都是兼容的，因此你不用记住所有协议。
2. 安全：Shifu可以完全在本地使用高度安全的用户认证系统。如果你不太信任互联网，那么你可以在不联网的情况下使用Shifu！
3. 遥测收集：这是Shifu的旗舰功能之一。通过该功能你可以指定任何你想收集的东西。只要告诉Shifu遥测的名字和数据输出的目的地，然后就可以坐等了。

好了，这些理由已经能够证明为什么Shifu能成为Google IoT Core的一个很好替代品。我知道这还不够，这些功能只能让它成为又一个新的物联网平台。但以下特点就能使得Shifu成为超越谷歌的新一代IoT平台了：

4. 数字孪生：每个设备实际上都是运行在Shifu中的容器化服务。因此，Shifu是世界上最分离的物联网平台——从来没有单点故障，每个设备都是独立的，就像现实生活中一样。
5. 灵活性和可扩展性：Shifu利用Kubernetes来确保所有系统资源都得到有效管理，并随时可扩展。
6. 最容易安装：Shifu是世界上最容易使用的物联网平台。你不需要注册帐户（但如果你愿意，也可以注册）就可以使用Shifu。一切都已经被容器化了。你只需要一个简单的动作就可以让一切运行起来；如果你不喜欢写一行命令，有一个功能齐全的Web UI等着你去玩。
7. 多重云：除了可以享受企业内部的Shifu框架，Multiple Clouds还拥有Cloud功能（如果你也喜欢）。Shifu Cloud与公共云无关——没有任何一个云提供商会是Shifu的单点故障。
 
Shifu在使你“重返自由”的同时，仍然拥有着“无痛、易用、on-prem和安全”等特性。在Shifu消除了所有迷雾过后，你对物联网星球的看法将会像你在那些浪漫电影中,特别是像那些在新西兰拍摄的电影里看到的湖泊一样清晰。