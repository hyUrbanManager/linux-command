//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    common: app.command[0],
    sys: app.command[1],
  },
  onLoad: function() {
    this.setData({
      
    });
  },

  // 显示命令的详细信息
  showInformation: function(e) {
    var name = e.currentTarget.id;
    wx.navigateTo({
      url: '../information/information'
    })
    
    app.currentCommand = {}
    for(var index=0; index<app.command.length;index++) {
      var list = app.command[index];
      for(var i=0; i<list.length;i++) {
        if(list[i].name == name) {
          app.currentCommand = list[i];
          break;
        }
      }
    }
    // console.log(name + "  " + app.currentCommand.name + " " + app.currentCommand.desc);
  },

  // 显示关于界面
  showAbout: function() {
    wx.navigateTo({
      url: '../about/about',
    })
  }

})
