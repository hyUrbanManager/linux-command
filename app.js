//app.js
App({
  onLaunch: function () {
  },

  // 当前指令
  currentCommand: {
  },

  // 存放指令集。
  command: [
    // 文件命令
    [
      {
        'name': 'cd',
        'desc': '切换到指定目录',
        'sample': '每个目录都有隐藏的两个文件夹，分别为"."和".."。\n\
        "."文件夹代表当前目录，".."文件夹代表上一级目录。"/"代表根目录。\n\n\
        cd etc \n\
        切换到当前目录下的etc目录。\n\
        cd .. \n\
        切换到上一级目录。\n\
        cd /etc \n\
        切换到根目录下的etc目录。',
      },
      {
        'name': 'ls',
        'desc': '显示文件列表',
        'sample': 'ls -l 或 ll \n\
        列出文件详细信息。\n\
        ls -a \n\
        列出所有文件及目录，包括隐藏的文件。\n\
        ls / \n\
        列出根目录所有文件及目录。',
      }, 
      {
        'name': 'stat',
        'desc': '文件详情',
        'sample': '显示文件详细信息，包括大小，占用硬盘块，文件类型，文件权限，隶属用户和用户组，\
        最近访问，最近更改文件内容，最近更改文件属性。\n\
        stat /bin/ping \n\
        查看根目录下bin文件夹的ping文件属性。',
      },
      {
        'name': 'mkdir',
        'desc': '创建目录',
        'sample': 'mkdir mydir \n\
        在当前目录下创建mydir文件夹。',
      },
      {
        'name': 'pwd',
        'desc': '显示当前路径',
        'sample': 'pwd \n\
        显示当前目录路径。',
      },
      {
        'name': 'cp',
        'desc': '拷贝',
        'sample': 'cp file1.txt file2.txt \n\
        把当前目录下file1.txt复制一份为file2.txt。',
      },
      {
        'name': 'mv',
        'desc': '移动或重命名',
        'sample': 'mv /work1/a.txt /etc/ \n\
        把根目录下的work1文件夹的a.txt文件移到根目录下etc文件夹下。\n\
        mv /work1/a.txt / etc / b.txt \n\
        把根目录下的work1文件夹的a.txt文件移到根目录下etc文件夹，并重命名为b.txt。',
      },
      {
        'name': 'rm',
        'desc': '删除文件',
        'sample': 'rm -r / mywork \n\
        递归删除，删除子目录及文件，常用于删除目录。\n\
        rm -f / mywork / a.txt \n\
        强制删除',
      },
      {
        'name': 'find',
        'desc': '搜索文件',
        'sample': '基本格式：find [path] [expression] \n\n\
        find / -name httpd.conf \n\
        在根目录下查找文件httpd.conf，表示在整个硬盘查找。\n\
        find /etc -name \'* httpd *\'　\n\
        使用通配符*(0或者任意多个)。表示在/etc目录下查找文件名中含有字符串"httpd"的文件。查找文件靠此一条命令。\n\
        find / -amin -10 \n\
        查找在系统中最后10分钟访问的文件(access time) \n\
        find / -atime -2　　\n\
        查找在系统中最后48小时访问的文件 \n\
        find / -mmin -5 　\n\
        查找在系统中最后5分钟里修改过的文件(modify time) \n\
        find / -mtime -1 　\n\
        查找在系统中最后24小时里修改过的文件 \n\
        find / -user fred 　\n\
        查找在系统中属于fred这个用户的文件 \n\
        find / -size +10000c　\n\
        查找出大于10000000字节的文件(c:字节，w:双字，k:KB，M:MB，G:GB) \n\
        find / -size -1000k 　\n\
        查找出小于1000KB的文件',
      },
      {
        'name': 'tree',
        'desc': '树形结构显示目录',
        'sample': '需要安装tree包，yum install tree。',
      },
      {
        'name': 'grep',
        'desc': '匹配字符串',
        'sample': '输出的字符中匹配字符串，匹配成功的才输出。\n\
        tree | grep a.txt \n\
        树形显示目录，输出行中带有a.txt字符才输出',
      },
      {
        'name': 'wc',
        'desc': '统计字符',
        'sample': '统计文本中行数、字数、字符数 \n\
        wc a.txt \n\
        统计a.txt文本文件字符信息。',
      },
      {
        'name': 'ln',
        'desc': '创建链接文件。',
        'sample': '创建文件的快捷方式。\n\
        ln /mywork/a.txt / link \n\
        在根目录下创建链接文件ll，链接到根目录下的work1文件夹的a.txt。cat /ll 等同于 cat /mywork/ a.txt。',
      },
      {
        'name': 'vim',
        'desc': '编辑文件',
        'sample': '使用vim编辑器编辑文件。\n\
        vim a.txt \n\
        使用vim打开a.txt或是创建a.txt文件。\n\n\
        vim操作请参考vim指南。',
      },
    ],

    // 系统命令
    [
      {
        'name': 'who',
        'desc': '在线登陆用户',
        'sample': 'who \n\
        显示在线登陆用户 \n\
        whoami \n\
        显示当前操作用户',
      },
      {
        'name': 'hostname',
        'desc': '主机名',
        'sample': 'hostname \n\
        显示主机名 \n\
        uname \n\
        显示系统信息',
      },
      {
        'name': 'top',
        'desc': '系统资源管理器',
        'sample': '动态显示当前耗费资源最多进程信息，常用于查找某一进程的pid。\n\
        crtl + c 键退出。\n\
        htop \n\
        图形化显示任务管理器。需要下载 yum install htop。',
      },
      {
        'name': 'ps',
        'desc': '进程管理器',
        'sample': 'ps \n\
        显示当前用户进程，查看进程pid。 \n\
        ps -aux \n\
        主机运行的所有进程。',
      },
      {
        'name': 'kill',
        'desc': '杀进程',
        'sample': '杀死进程，常用ps或top命令查看进程的id，然后再用kill命令杀死进程。\n\
        kill -s 9 5099 \n\
        立即杀死pid为5099的进程。pid即为process id，唯一进程id标示。',
      },
      {
        'name': 'du',
        'desc': '统计文件夹大小',
        'sample': 'du -h /home \n\
        输出home文件夹下所有子文件夹大小，以人能看懂的显示方式显示。\n\
        du --max-depth=1 -h /ffmpeg \n\
        输出根目录下ffmpeg文件夹下的文件及文件夹大小，以人能看懂的显示方式显示。',
      },
      {
        'name': 'df',
        'desc': '查看硬盘大小。',
        'sample': 'df -h \n\
        输出所有磁盘信息，以人能看懂的显示方式显示。',
      },
      {
        'name': 'clear',
        'desc': '清屏',
        'sample': 'clear \n\
        清除控制台上以前显示的信息。',
      },
      {
        'name': 'shutdown',
        'desc': '关机/重启机器',
        'sample': 'shutdown -r \n\
        关机重启 \n\
        shutdown -h \n\
        关机不重启 \n\
        shutdown now \n\
        立刻关机',
      },
    ]
  ]
})