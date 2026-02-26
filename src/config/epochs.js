// 时代配置文件 - 丧尸文明：末日崛起
// 定义游戏中的各个生存阶段及其升级要求和加成效果

/*
 * 生存阶段配置数组
 * Each era contains:
 * - id: Era ID
 * - name: Era Name
 * - color: Display Color (Tailwind class)
 * - bg: Background Color
 * - tileColor: Map Tile Color
 * - req: Upgrade Requirements
 * - cost: Upgrade Costs
 * - bonuses: Era Bonuses
 */
export const EPOCHS = [
    {
        id: 0,
        name: "末日降临",
        color: "text-red-500",
        bg: "bg-red-950",
        tileColor: "bg-red-900",
        req: { science: 0 },
        cost: {},
        bonuses: {
            desc: "病毒爆发，社会崩溃。在废墟中寻找生存之道。",
            gatherBonus: 0.20
        }
    },
    {
        id: 1,
        name: "废墟拾荒",
        color: "text-amber-400",
        bg: "bg-amber-950",
        tileColor: "bg-amber-900",
        req: { science: 600, population: 25 },
        cost: { food: 6000, wood: 3500, stone: 1200, silver: 600, science: 600 },
        bonuses: {
            desc: "搜索城市废墟，收集物资，建立临时避难所。",
            gatherBonus: 0.40,
            militaryBonus: 0.20,
            industryBonus: 0.20
        }
    },
    {
        id: 2,
        name: "堡垒建设",
        color: "text-emerald-400",
        bg: "bg-emerald-950",
        tileColor: "bg-emerald-800",
        req: { science: 1800, population: 90, culture: 250 },
        cost: { food: 20000, wood: 10000, brick: 3600, silver: 5000, tools: 1200, science: 1800 },
        bonuses: {
            desc: "加固防线，建造围墙，有组织地抵御丧尸潮。",
            gatherBonus: 0.60,
            militaryBonus: 0.30,
            cultureBonus: 0.20,
            scienceBonus: 0.20,
            industryBonus: 0.30,
            maxPop: 0.10
        }
    },
    {
        id: 3,
        name: "军阀割据",
        color: "text-blue-400",
        bg: "bg-blue-950",
        tileColor: "bg-blue-800",
        req: { science: 4500, population: 170, culture: 600 },
        cost: { food: 100000, wood: 50000, brick: 25000, iron: 12500, papyrus: 5000, silver: 15000, science: 4500 },
        bonuses: {
            desc: "各幸存者阵营争夺资源和领地，弱肉强食。",
            gatherBonus: 0.80,
            militaryBonus: 0.40,
            cultureBonus: 0.30,
            scienceBonus: 0.30,
            industryBonus: 0.40,
            taxIncome: 0.20
        }
    },
    {
        id: 4,
        name: "病毒研究",
        color: "text-cyan-300",
        bg: "bg-cyan-900",
        tileColor: "bg-cyan-700",
        req: { science: 8000, population: 320, culture: 1400 },
        cost: { food: 260000, plank: 70000, brick: 60000, iron: 35000, silver: 40000, science: 8000 },
        bonuses: {
            desc: "在废墟中建起实验室，开始研究丧尸病毒的弱点。",
            gatherBonus: 1.20,
            militaryBonus: 0.45,
            cultureBonus: 0.40,
            scienceBonus: 0.50,
            industryBonus: 0.60,
            incomePercent: 0.50
        }
    },
    {
        id: 5,
        name: "疫苗突破",
        color: "text-purple-400",
        bg: "bg-purple-950",
        tileColor: "bg-purple-800",
        req: { science: 12000, population: 450, culture: 2500 },
        cost: { food: 350000, plank: 80000, papyrus: 30000, spice: 20000, silver: 50000, science: 12000 },
        bonuses: {
            desc: "疫苗研发取得重大进展，人类看到了希望的曙光。",
            gatherBonus: 1.50,
            militaryBonus: 0.50,
            cultureBonus: 0.60,
            scienceBonus: 0.80,
            industryBonus: 1.00,
            stability: 10
        }
    },
    {
        id: 6,
        name: "重建文明",
        color: "text-gray-200",
        bg: "bg-gray-800",
        tileColor: "bg-gray-600",
        req: { science: 20000, population: 650, culture: 4000 },
        cost: { food: 750000, brick: 180000, iron: 120000, tools: 75000, spice: 30000, silver: 120000, science: 20000 },
        bonuses: {
            desc: "大规模清除丧尸，重建电力和工业基础设施。",
            gatherBonus: 2.00,
            militaryBonus: 0.60,
            cultureBonus: 0.80,
            scienceBonus: 1.20,
            industryBonus: 2.00,
            maxPop: 0.20
        }
    },
    {
        id: 7,
        name: "新世界",
        color: "text-green-400",
        bg: "bg-green-950",
        tileColor: "bg-green-800",
        req: { science: 35000, population: 1000, culture: 8000 },
        cost: { food: 2000000, tools: 300000, silver: 250000, spice: 80000, papyrus: 100000, science: 35000 },
        bonuses: {
            desc: "丧尸威胁基本消除，人类文明在废墟上重新崛起。",
            gatherBonus: 3.00,
            militaryBonus: 0.80,
            cultureBonus: 1.50,
            scienceBonus: 3.00,
            industryBonus: 3.00,
            incomePercent: 0.40
        }
    }
];
