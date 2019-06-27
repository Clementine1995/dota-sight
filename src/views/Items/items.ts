
const items = [
  {
    id: 1,
    name: "净化药水",
    nameEn: "Clarity",
    isBasic: true,
    icon: "",
    sellSite: ['base'],
    desc: '能增强冥想能力的清水。',
    price: 50
  },
  {
    id: 2,
    name: "树之祭祀",
    nameEn: "Tango",
    isBasic: true,
    icon: "",
    sellSite: ['base'],
    desc: '战场上的救命稻草。',
    price: 90
  },
  {
    id: 3,
    name: "侦查守卫",
    nameEn: "Earth shaker",
    isBasic: true,
    icon: "",
    sellSite: [],
    desc: '一种植物形态，只有一半的感知力，一般由巫师学徒培养。',
    price: 50
  },
  {
    id: 4,
    name: "动物信使",
    nameEn: "Earth shaker",
    isBasic: true,
    icon: "",
    sellSite: [],
    desc: '弄丢信使可是死罪。',
    price: 50
  },
  {
    id: 5,
    name: "铁枝树干",
    nameEn: "Earth shaker",
    isBasic: true,
    icon: "",
    sellSite: [],
    desc: '',
    price: 50
  },
  {
    id: 6,
    name: "魔棒",
    nameEn: "Earth shaker",
    isBasic: true,
    icon: "",
    sellSite: [],
    desc: '',
    price: 50
  },
  {
    id: 7,
    name: "阔剑",
    nameEn: "Earth shaker",
    isBasic: true,
    icon: "",
    sellSite: [],
    desc: '',
    price: 50
  },
  {
    id: 8,
    name: "攻击之爪",
    nameEn: "Earth shaker",
    isBasic: true,
    icon: "",
    sellSite: [],
    desc: '',
    price: 50
  },
  {
    id: 9,
    name: "恶魔刀锋",
    nameEn: "Earth shaker",
    isBasic: true,
    icon: "",
    sellSite: [],
    desc: '',
    price: 50
  },
  {
    id: 10,
    name: "魔杖",
    nameEn: "",
    isBasic: false,
    icon: "",
    recipes: [],
    sellSite: [],
    desc: '',
    price: 50
  },
  {
    id: 11,
    name: "怨灵系带",
    nameEn: "",
    isBasic: false,
    icon: "",
    recipes: [],
    sellSite: [],
    desc: '',
    price: 50
  },
  {
    id: 12,
    name: "水晶剑",
    nameEn: "",
    isBasic: false,
    icon: "",
    recipes: [
      {
        name: '阔剑',
        icon: ''
      },
      {
        name: '攻击之爪',
        icon: ''
      },
      {
        name: '卷轴',
        icon: ''
      }
    ],
    compose: [
      {
        name: '代达罗斯之殇',
        icon: ''
      },
      {
        name: '血棘',
        icon: ''
      }
    ],
    sellSite: [],
    desc: '',
    price: 50
  },
  {
    id: 13,
    name: "代达罗斯之殇",
    nameEn: "",
    isBasic: false,
    icon: "",
    recipes: [
      {
        name: '水晶剑',
        icon: ''
      },
      {
        name: '恶魔刀锋',
        icon: ''
      },
      {
        name: '卷轴',
        icon: ''
      }
    ],
    compose: [],
    sellSite: [],
    desc: '',
    price: 50
  },
  {
    id: 14,
    name: "血棘",
    nameEn: "",
    isBasic: false,
    icon: "",
    recipes: [],
    compose: [],
    sellSite: [],
    desc: '',
    price: 50
  }
]

export default items