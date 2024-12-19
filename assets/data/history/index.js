export const historyWork = ['全部', '生活', '绿豆', '娱乐', '技术', '旅行']
export const historyLife = [
  {
    time: "2025-01-07",
    title: "生日",
    description: "",
    label: ['生活'],
  },
  {
    time: "2024-12-10",
    title: "迪士尼半日游",
    description: "下午和老婆迪士尼半日游",
    label: ['娱乐'],
  },
  {
    time: "2024-12-10",
    title: "一妇幼孕初检",
    description: "陪老婆到上海一妇幼孕初检，看小绿豆",
    label: ['生活', '绿豆'],
  },
  {
    time: "2024-12-08",
    title: "逛文峰广场半日",
    description: "文峰广场逛商场半日，植物医生，超市，吃胡子大厨",
    label: ['生活'],
  },
  {
    time: "2024-12-07",
    title: "夜逛金桥",
    description: "金桥左庭右院",
    label: ['生活'],
  },
  {
    time: "2024-12-01",
    title: "上海海洋水族馆",
    description: "去上海海洋水族馆看企鹅，水母",
    label: ['娱乐'],
  },
  {
    time: "2024-11-30",
    title: "上博号主题航班船日航",
    description: "上博号主题航班船日航,轮船上看三件套，看东方明珠，看外滩",
    label: ['娱乐'],
  },
  {
    time: "2024-11-26",
    title: "建小卡",
    description: "建小卡",
    label: ['生活', '绿豆'],
  },
  {
    time: "2024-11-17",
    title: "上海海昌海洋公园半日游",
    description: "",
    label: ['生活'],
  },
  {
    time: "2024-11-16",
    title: "豫园，外滩",
    description: "沧海云南",
    label: ['生活'],
  },
  {
    time: "2024-11-09",
    title: "金桥",
    description: "西贝",
    label: ['生活'],
  },
  {
    time: "2024-10-20",
    title: "人民广场，外滩，北外滩",
    description: "人民广场,外滩,北外滩,雨天，吃了四川江湖菜",
    label: ['生活'],
  },
  {
    time: "2024-10-20",
    title: "两条杠",
    description: "验孕棒两条杠",
    label: ['生活', '绿豆'],
  },
  {
    time: "2024-10-19",
    title: "彪生日",
    description: "收拾家里，彪生日",
    label: ['生活'],
  },
  {
    time: "2024-10-05",
    title: "南京二天一夜",
    description: "南京中华门夜游、外秦淮河游船、大报恩寺、江宁眼摩天轮，南京博物院",
    label: ['旅行','生活'],
  },
  {
    time: "2024-07-13",
    title: "农历结婚纪念日，六月初八，妈妈生日",
    description: "小蛋糕",
    label: ['生活'],
  },
  {
    time: "2024-06-08",
    title: "无锡两天一夜",
    description: "无锡朋友小聚",
    label: ['生活'],
  },
  {
    time: "2024-05-02",
    title: "常熟两天一夜",
    description: "虞山风景区、尚湖",
    label: ['旅行','生活'],
  },
  {
    time: "2024-04-05",
    title: "绍兴两天一夜",
    description: "柯岩风景区，鲁镇",
    label: ['旅行','生活'],
  },
  {
    time: "2024-03-10",
    title: "欢乐谷一日游",
    description: "过山车，海盗船",
    label: ['娱乐','生活'],
  },
]
// 技术
export const historyTech = [
  {
    time: "2024-12-18",
    title: "单页简历（CV）",
    description: "",
    label: ['技术'],
  },
  {
    time: "2024-12-16",
    title: "plan组件添加状态",
    description: "",
    label: ['技术'],
  },
  {
    time: "2024-12-13",
    title: "账号注册",
    description: "网易163邮箱注册成功（jinzhu_an@163.com）,gitHub账号注册成功（greenSmallBean[绿小豆]）[@jinzhu37]",
    label: ['技术'],
  },
  {
    time: "2024-12-13",
    title: "前端技术路线翻译完成",
    description: "前端技术路线翻译完成",
    label: ['技术'],
  },
  {
    time: "2024-12-13",
    title: "计划组件plan",
    description: "计划组件plan开发，待完善",
    label: ['技术'],
  },
  {
    time: "2024-12-06",
    title: "前端技术路线",
    description: "前端技术路线获取，待整理",
    label: ['技术'],
  },
  {
    time: "2024-12-04",
    title: "时间轴组件",
    description: "时间轴组件开发, 历史页面填充",
    label: ['技术'],
  },
]
// 格式化
function formatDate(data) {
  let list = []
  for (let i = 0; i < data.length; i++) {
    if (list.length && data[i].time === list[list.length - 1].time) {
      list[list.length - 1].children.push(data[i])
    } else {
      list.push({
        time: data[i].time,
        children: [data[i]],
      })
    }
  }
  return list
}

export function historyData(label) {
  let list = []
  const allData = [...historyLife, ...historyTech]
  if (label && label !== '全部') {
    list = allData.filter(item => item.label.includes(label))
  } else {
    list = allData
  }
  list = list.sort((a, b) => {
    const aTime = new Date(a.time === '-' ? '2024-01-01' : a.time)
    const bTime = new Date(b.time === '-' ? '2024-01-01' : b.time)
    return bTime - aTime
  })
  return formatDate(list)
}
