var dataList = [
  {
    name: "图形",
    total: 20,
    children: [
      {
        name: "矩形",
        key: "rect",
        children: [
          {
            name: "矩形",
            width: 100,
            height: 50,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 4,
          },
          {
            name: "矩形",
            width: 100,
            height: 50,
            fill: 'red',
            shadowBlur: 10,
            cornerRadius: 10,
          },
          {
            width: 100,
            height: 100,
            fill: 'blue',
            cornerRadius: [0, 10, 20, 30],
          },
        ]
      },
      {
        name: "圆形",
        key: "circle",
        children: [
          {
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
          },
        ],
      },
      {
        name: "椭圆",
        key: "ellipse",
        children: [
          {
            radiusX: 100,
            radiusY: 50,
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: 4,
          },
        ],
      },
      {
        name: "扇形",
        key: "wedge",
        children: [
          {
            radius: 70,
            angle: 60,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            rotation: -120,
          },
        ],
      },
      {
        name: "简单线条",
        key: "line",
        children: [
          {
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'red',
            strokeWidth: 15,
            lineCap: 'round',
            lineJoin: 'round',
          },
          {
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'green',
            strokeWidth: 2,
            lineJoin: 'round',
            dash: [33, 10],
          },
          {
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'blue',
            strokeWidth: 10,
            lineCap: 'round',
            lineJoin: 'round',
            dash: [29, 20, 0.001, 20]
          },
        ],
      },
      {
        name: "多边形",
        key: "line",
        children: [
          {
            points: [23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 5,
            closed: true,
          }
        ],
      },
      {
        name: "样条曲线",
        key: "line",
        children: [
          {
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'red',
            strokeWidth: 15,
            lineCap: 'round',
            lineJoin: 'round',
            tension: 1
          },
          {
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'green',
            strokeWidth: 2,
            lineJoin: 'round',
            dash: [33, 10],
            lineCap: 'round',
            tension: 0.5
          },
          {
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'blue',
            strokeWidth: 10,
            lineCap: 'round',
            lineJoin: 'round',
            dash: [29, 20, 0.001, 20],
            tension: 0.7
          },
        ],
      },
      {
        name: "Blob图形",
        key: "line",
        children: [
          {
            points: [23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 5,
            closed: true,
            tension: 0.3,
          },
        ],
      },
      {
        name: "精灵图",
        key: "sprite",
        children: [
          {
            image: '',
            animation: 'idle',
            animations: {
              idle: [
                // x, y, width, height (4 frames)
                2, 2, 70, 119,
                71, 2, 74, 119,
                146, 2, 81, 119,
                226, 2, 76, 119
              ],
              punch: [
                // x, y, width, height (4 frames)
                2, 138, 74, 122,
                76, 138, 84, 122,
                346, 138, 120, 122
              ]
            },
            frameRate: 7,
            frameIndex: 0
          },
        ],

      },
      {
        name: "图片",
        key: "image",
        children: [
          {
            image: '',
            width: 100,
            height: 100,
            src: "yoda.jpg",
          },
          {
            replace: true,
            x: 200,
            y: 50,
            scaleX: 0.5,
            scaleY: 0.5,
            src: "darth-vader.jpg",
          }
        ],
      },
      {
        name: "文字",
        key: "text",
        children: [
          {
            text: 'Simple Text',
            fontSize: 30,
            fontFamily: 'Calibri',
            fill: 'green',
          },
          {
            text:
              "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
            fontSize: 18,
            fontFamily: 'Calibri',
            fill: '#555',
            width: 300,
            padding: 20,
            align: 'center',
          }
        ],
      },
      {
        name: "路径文字",
        key: "textPath",
        children: [
          {
            x: 0,
            y: 50,
            fill: '#333',
            fontSize: 16,
            fontFamily: 'Arial',
            text:
              "All the world's a stage, and all the men and women merely players.",
            data: 'M10,10 C0,0 10,150 100,100 S300,150 4.0.180',
          }
        ],
      },
      {
        name: "星形",
        key: "star",
        children: [
          {
            numPoints: 6,
            innerRadius: 40,
            outerRadius: 70,
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: 4,
          }
        ],
      },
      {
        name: "环形",
        key: "ring",
        children: [
          {
            innerRadius: 40,
            outerRadius: 70,
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: 4,
          }
        ],
      },
      {
        name: "弧形",
        key: "arc",
        children: [
          {
            innerRadius: 40,
            outerRadius: 70,
            angle: 60,
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: 4,
          }
        ],
      },
      {
        name: "标签",
        key: "label",
        children: [
          {
            x: 170,
            y: 75,
            opacity: 0.75,
            children: [
              {
                key: 'tag',
                fill: 'black',
                pointerDirection: 'down',
                pointerWidth: 10,
                pointerHeight: 10,
                lineJoin: 'round',
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffsetX: 10,
                shadowOffsetY: 10,
                shadowOpacity: 0.5,
              },
              {
                key: 'text',
                text: 'Tooltip pointing down',
                fontFamily: 'Calibri',
                fontSize: 18,
                padding: 5,
                fill: 'white',
              }
            ]
          },
          {
            x: 20,
            y: 130,
            opacity: 0.75,
            children: [
              {
                key: 'tag',
                fill: 'green',
                pointerDirection: 'left',
                pointerWidth: 20,
                pointerHeight: 28,
                lineJoin: 'round',
              },
              {
                key: 'text',
                text: 'Label pointing left',
                fontFamily: 'Calibri',
                fontSize: 18,
                padding: 5,
                fill: 'white',
              }
            ]
          },
          {
            x: 180,
            y: 150,
            opacity: 0.75,
            children: [
              {
                key: 'tag',
                fill: 'yellow',
              },
              {
                key: 'text',
                text: 'Simple label',
                fontFamily: 'Calibri',
                fontSize: 18,
                padding: 5,
                fill: 'black',
              },
            ],
          },
        ],
      },
      {
        name: "路径",
        key: "path",
        children: [
          {
            x: 50,
            y: 40,
            data:
              'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',
            fill: 'green',
            scale: {
              x: 2,
              y: 2
            }
          }
        ],
      },
      {
        name: "等边多边形",
        key: "regularPolygon",
        children: [
          {
            x: 100,
            y: 150,
            sides: 6,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
          }
        ],
      },
      {
        name: "箭头",
        key: "arrow",
        children: [
          {
            points: [0, 0, 100, 50],
            pointerLength: 20,
            pointerWidth: 20,
            fill: 'black',
            stroke: 'black',
            strokeWidth: 4,
          }
        ],
      },
      {
        name: "自定义图形",
        key: "custom",
        children: [
          {
          },
        ],
      }
    ],
  },
  {
    name: '指南',
    total: 2,
    children: [
      {
        name: '定位',
      },
      {
        name: '偏移'
      }
    ],
  },
  {
    name: '样式',
    total: 8,
  },
  {
    name: '事件',
    total: 15,
  },
  {
    name: '拖拽/释放',
    total: 9,
  },
  {
    name: '选择和变换图形',
    total: 11,
  },
  {
    name: '裁剪',
    total: 2,
  },
  {
    name: '组、图层和层级',
    total: 4,
  },
  {
    name: '滤镜',
    total: 16,
  },
  {
    name: '补间动画',
    total: 7,
  },
  {
    name: '动画',
    total: 5,
  },
  {
    name: '选择器',
    total: 3,
  },
  {
    name: '数据&序列化&导出',
    total: 6,
  },
  {
    name: '性能优化',
    total: 10,
  },
]