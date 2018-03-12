//information.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    this.setData({
      command: app.currentCommand,
      // command: app.command[0][0]
    })
    wx.setNavigationBarTitle({
      title: app.currentCommand.name,
    })
  },
})
