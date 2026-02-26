// 战斗单位配置文件 - 丧尸文明：末日崛起

/**
 * 兵种克制关系说明:
 * - 步兵(infantry) 克制 骑兵(cavalry) - 长矛阵/刺刀阵克制骑兵冲锋
 * - 骑兵(cavalry) 克制 弓箭手(archer) - 快速机动追杀远程单位
 * - 弓箭手(archer) 克制 步兵(infantry) - 远程火力压制步兵
 * - 火器(gunpowder) 克制 步兵(infantry)和骑兵(cavalry) - 火力优势
 * - 骑兵(cavalry) 近战克制 火器(gunpowder) - 近身后火器无法发挥优势
 * - 攻城(siege) 被所有近战克制 - 机动性差，容易被突袭
 * 
 * 时代淘汰机制:
 * - 每个兵种有 obsoleteAfterEpochs 属性
 * - 当玩家时代超过兵种时代 + obsoleteAfterEpochs 时，该兵种不再显示
 */

// 兵种类型定义
export const UNIT_TYPES = {
    // ============ 末日降临 (Epoch 0) ============
    militia: {
        id: 'militia',
        name: '幸存者小队',
        desc: '拿着棍棒和菜刀的普通幸存者。',
        epoch: 0,
        icon: 'Users',
        category: 'infantry',

        attack: 6,
        defense: 4,
        speed: 3,
        range: 1,

        recruitCost: { food: 125, wood: 60 },
        maintenanceCost: { food: 1.75, silver: 0.6 },
        trainingTime: 2,

        populationCost: 1,

        abilities: ['紧急集合'],

        counters: { cavalry: 1.2, siege: 1.3 },
        weakAgainst: ['archer'],

        obsoleteAfterEpochs: 2
    },

    slinger: {
        id: 'slinger',
        name: '投掷手',
        desc: '投掷零件和燃烧瓶的战士。',
        epoch: 0,
        icon: 'Circle',
        category: 'archer',

        attack: 6,
        defense: 2,
        speed: 3,
        range: 3,

        recruitCost: { food: 150, wood: 75, stone: 25 },
        maintenanceCost: { food: 2, silver: 0.75, stone: 0.5 },
        trainingTime: 3,

        populationCost: 1,

        abilities: ['远程攻击'],

        counters: { infantry: 1.4 },
        weakAgainst: ['cavalry'],

        obsoleteAfterEpochs: 2
    },

    // ============ 废墟拾荒 (Epoch 1) ============
    spearman: {
        id: 'spearman',
        name: '长矛猎人',
        desc: '使用自制长矛的丧尸猎人。',
        epoch: 1,
        icon: 'Sword',
        category: 'infantry',

        attack: 12,
        defense: 9,
        speed: 3,
        range: 1,

        recruitCost: { food: 275, wood: 175, copper: 60 },
        maintenanceCost: { food: 2.75, silver: 1.75, copper: 0.25 },
        trainingTime: 4,

        populationCost: 1,

        abilities: ['反骑兵'],

        counters: { cavalry: 1.8, siege: 1.2 },
        weakAgainst: ['archer'],

        obsoleteAfterEpochs: 2
    },

    archer: {
        id: 'archer',
        name: '弩箭手',
        desc: '使用自制弩弓的远程射手。',
        epoch: 1,
        icon: 'Target',
        category: 'archer',

        attack: 14,
        defense: 6,
        speed: 4,
        range: 4,

        recruitCost: { food: 325, wood: 225, silver: 125 },
        maintenanceCost: { food: 3.25, silver: 2.25, wood: 1 },
        trainingTime: 5,

        populationCost: 1,

        abilities: ['远程攻击', '高机动'],

        counters: { infantry: 1.5, siege: 1.4 },
        weakAgainst: ['cavalry'],

        obsoleteAfterEpochs: 2
    },

    chariot: {
        id: 'chariot',
        name: '改装车',
        desc: '钉满铁刺的改装车辆。',
        epoch: 1,
        icon: 'Truck',
        category: 'cavalry',

        attack: 15,
        defense: 8,
        speed: 6,
        range: 1,

        recruitCost: { food: 500, wood: 300, copper: 150, silver: 200 },
        maintenanceCost: { food: 6, silver: 3.5, wood: 1.5 },
        trainingTime: 6,

        populationCost: 1,

        abilities: ['冲锋', '机动'],

        counters: { archer: 1.6 },
        weakAgainst: ['infantry'],

        obsoleteAfterEpochs: 2
    },

    // ============ 堡垒建设 (Epoch 2) ============
    hoplite: {
        id: 'hoplite',
        name: '重甲战士',
        desc: '穿着DIY装甲的精锐近战战士。',
        epoch: 2,
        icon: 'Shield',
        category: 'infantry',

        attack: 16,
        defense: 14,
        speed: 2,
        range: 1,

        recruitCost: { food: 500, copper: 200, iron: 100, silver: 250 },
        maintenanceCost: { food: 3.75, silver: 2.75, iron: 0.4 },
        trainingTime: 6,

        populationCost: 1,

        abilities: ['方阵', '坚守'],

        counters: { cavalry: 1.7, siege: 1.3 },
        weakAgainst: ['archer'],

        obsoleteAfterEpochs: 2
    },

    composite_archer: {
        id: 'composite_archer',
        name: '精确射手',
        desc: '使用改良弩的精确远程射手。',
        epoch: 2,
        icon: 'Target',
        category: 'archer',

        attack: 18,
        defense: 7,
        speed: 4,
        range: 5,

        recruitCost: { food: 425, wood: 250, copper: 125, silver: 225 },
        maintenanceCost: { food: 3.5, silver: 2.5, wood: 1.25, copper: 0.25 },
        trainingTime: 6,

        populationCost: 1,

        abilities: ['远程攻击', '穿甲'],

        counters: { infantry: 1.6, siege: 1.3 },
        weakAgainst: ['cavalry'],

        obsoleteAfterEpochs: 2
    },

    light_cavalry: {
        id: 'light_cavalry',
        name: '摩托先锋',
        desc: '骑摩托车的快速突击队。',
        epoch: 2,
        icon: 'Navigation',
        category: 'cavalry',

        attack: 18,
        defense: 8,
        speed: 8,
        range: 1,

        recruitCost: { food: 600, silver: 300, iron: 125 },
        maintenanceCost: { food: 6, silver: 4, iron: 0.3 },
        trainingTime: 7,

        populationCost: 1,

        abilities: ['快速移动', '冲锋'],

        counters: { archer: 1.8 },
        weakAgainst: ['infantry'],

        obsoleteAfterEpochs: 2
    },

    battering_ram: {
        id: 'battering_ram',
        name: '破门锤',
        desc: '用来攻破丧尸巢穴大门的重型器械。',
        epoch: 2,
        icon: 'Hammer',
        category: 'siege',

        attack: 30,
        defense: 15,
        speed: 1,
        range: 1,

        recruitCost: { food: 750, wood: 1000, iron: 250, silver: 400 },
        maintenanceCost: { food: 6, silver: 4, wood: 2.5, iron: 0.5 },
        trainingTime: 10,

        populationCost: 2,

        abilities: ['攻城'],

        counters: {},
        weakAgainst: ['cavalry', 'archer', 'infantry'],

        obsoleteAfterEpochs: 2
    },

    // ============ 军阀割据 (Epoch 3) ============
    heavy_infantry: {
        id: 'heavy_infantry',
        name: '装甲突击队',
        desc: '全副武装的突击队员。',
        epoch: 3,
        icon: 'ShieldAlert',
        category: 'infantry',

        attack: 20,
        defense: 18,
        speed: 2,
        range: 1,

        recruitCost: { food: 700, iron: 300, silver: 400 },
        maintenanceCost: { food: 4.5, silver: 3.5, iron: 0.6, cloth: 0.2 },
        trainingTime: 8,

        populationCost: 1,

        abilities: ['重甲', '坚守'],

        counters: { cavalry: 1.6, siege: 1.4 },
        weakAgainst: ['archer'],

        obsoleteAfterEpochs: 2
    },

    crossbowman: {
        id: 'crossbowman',
        name: '狙击手',
        desc: '使用猎枪的远程狙击手。',
        epoch: 3,
        icon: 'Crosshair',
        category: 'archer',

        attack: 22,
        defense: 9,
        speed: 3,
        range: 5,

        recruitCost: { food: 550, wood: 350, iron: 225, silver: 275 },
        maintenanceCost: { food: 4, silver: 3, wood: 0.75, iron: 0.5 },
        trainingTime: 7,

        populationCost: 1,

        abilities: ['远程攻击', '穿甲'],

        counters: { infantry: 1.7, siege: 1.4 },
        weakAgainst: ['cavalry'],

        obsoleteAfterEpochs: 2
    },

    knight: {
        id: 'knight',
        name: '钢铁骑士',
        desc: '驾驶装甲摩托的精锐骑士。',
        epoch: 3,
        icon: 'Crown',
        category: 'cavalry',

        attack: 28,
        defense: 22,
        speed: 6,
        range: 1,

        recruitCost: { food: 1250, iron: 500, copper: 150, silver: 800 },
        maintenanceCost: { food: 9, silver: 6.5, iron: 0.8, copper: 0.3 },
        trainingTime: 10,

        populationCost: 1,

        abilities: ['重甲', '冲锋', '区长'],

        counters: { archer: 1.9 },
        weakAgainst: ['infantry'],

        obsoleteAfterEpochs: 2
    },

    trebuchet: {
        id: 'trebuchet',
        name: '投掷器',
        desc: '投掷汽油弹的重型器械。',
        epoch: 3,
        icon: 'Mountain',
        category: 'siege',

        attack: 45,
        defense: 8,
        speed: 1,
        range: 6,

        recruitCost: { food: 1000, wood: 1000, plank: 400, iron: 400, silver: 750 },
        maintenanceCost: { food: 7.5, silver: 6, plank: 1.5, iron: 0.6, stone: 1.2 },
        trainingTime: 12,

        populationCost: 3,

        abilities: ['攻城', '范围伤害'],

        counters: { infantry: 1.3 },
        weakAgainst: ['cavalry', 'archer'],

        obsoleteAfterEpochs: 2
    },

    // ============ 病毒研究 (Epoch 4) ============
    pikeman: {
        id: 'pikeman',
        name: '防线守卫',
        desc: '手持长矛守卫防线的精锐战士。',
        epoch: 4,
        icon: 'Swords',
        category: 'infantry',

        attack: 22,
        defense: 20,
        speed: 2,
        range: 2,

        recruitCost: { food: 800, wood: 300, iron: 350, silver: 450 },
        maintenanceCost: { food: 5, silver: 4, iron: 0.5 },
        trainingTime: 8,

        populationCost: 1,

        abilities: ['反骑兵', '方阵'],

        counters: { cavalry: 2.0, siege: 1.3 },
        weakAgainst: ['archer', 'gunpowder'],

        obsoleteAfterEpochs: 2
    },

    arquebus: {
        id: 'arquebus',
        name: '散弹枪手',
        desc: '使用散弹枪的火力战士。',
        epoch: 4,
        icon: 'Flame',
        category: 'gunpowder',  // 改为火器类别

        attack: 28,
        defense: 8,
        speed: 2,
        range: 4,

        recruitCost: { food: 700, iron: 300, tools: 200, copper: 80, silver: 500 },
        maintenanceCost: { food: 4.5, silver: 4, iron: 0.35, tools: 0.9, copper: 0.15 },
        trainingTime: 9,

        populationCost: 1,

        abilities: ['火器', '穿甲', '装填缓慢'],

        counters: { infantry: 1.5, cavalry: 1.4 },  // 火器克制步兵和骑兵
        weakAgainst: ['cavalry'],  // 但被近身的骑兵克制

        obsoleteAfterEpochs: 2
    },

    cuirassier: {
        id: 'cuirassier',
        name: '装甲车队',
        desc: '驾驶改装装甲车的重装车队。',
        epoch: 4,
        icon: 'Shield',
        category: 'cavalry',

        attack: 32,
        defense: 24,
        speed: 6,
        range: 1,

        recruitCost: { food: 1500, iron: 600, silver: 1000 },
        maintenanceCost: { food: 10, silver: 7.5, iron: 1.25 },
        trainingTime: 11,

        populationCost: 1,

        abilities: ['重甲', '冲锋', '抗火器'],

        counters: { archer: 1.9, gunpowder: 1.5 },  // 骑兵近身克制火器
        weakAgainst: ['infantry'],

        obsoleteAfterEpochs: 2
    },

    bombard: {
        id: 'bombard',
        name: '火箭筒手',
        desc: '使用自制火箭筒的重火力战士。',
        epoch: 4,
        icon: 'Bomb',
        category: 'siege',

        attack: 55,
        defense: 10,
        speed: 1,
        range: 6,

        recruitCost: { food: 1250, iron: 600, copper: 250, tools: 350, silver: 1000 },
        maintenanceCost: { food: 9, silver: 7.5, iron: 1.2, copper: 0.4, tools: 1.5 },
        trainingTime: 14,

        populationCost: 3,

        abilities: ['攻城', '范围伤害', '火器'],

        counters: { infantry: 1.5 },
        weakAgainst: ['cavalry'],

        obsoleteAfterEpochs: 2
    },

    // ============ 疫苗突破 (Epoch 5) ============
    musketeer: {
        id: 'musketeer',
        name: '步枪手',
        desc: '装备步枪的正规战士。',
        epoch: 5,
        icon: 'Zap',
        category: 'infantry',  // 火枪兵是步兵（有刺刀可近战）

        attack: 30,
        defense: 14,
        speed: 3,
        range: 3,

        recruitCost: { food: 900, iron: 350, tools: 250, silver: 550 },
        maintenanceCost: { food: 5.5, silver: 5, iron: 0.45, tools: 1.0, cloth: 0.15 },
        trainingTime: 9,

        populationCost: 1,

        abilities: ['火器', '刺刀冲锋', '齐射'],

        counters: { cavalry: 1.6, siege: 1.4 },  // 火枪兵有刺刀，克制骑兵
        weakAgainst: ['gunpowder'],  // 被专业火器部队克制

        obsoleteAfterEpochs: 2
    },

    rifleman: {
        id: 'rifleman',
        name: '精锐枪手',
        desc: '装备精确步枪的精锐射手。',
        epoch: 5,
        icon: 'Target',
        category: 'gunpowder',  // 改为火器类别

        attack: 35,
        defense: 10,
        speed: 3,
        range: 5,

        recruitCost: { food: 1000, iron: 400, tools: 300, silver: 650 },
        maintenanceCost: { food: 6, silver: 5.5, iron: 0.5, tools: 1.3 },
        trainingTime: 10,

        populationCost: 1,

        abilities: ['火器', '精确射击', '穿甲'],

        counters: { infantry: 1.7, cavalry: 1.5, siege: 1.5 },  // 火器全面克制
        weakAgainst: ['cavalry'],  // 被近身骑兵克制

        obsoleteAfterEpochs: 2
    },

    dragoon: {
        id: 'dragoon',
        name: '机动战队',
        desc: '驾驶越野车的机动打击队。',
        epoch: 5,
        icon: 'Navigation',
        category: 'cavalry',  // 龙骑兵本质是骑兵

        attack: 35,
        defense: 18,
        speed: 7,
        range: 2,

        recruitCost: { food: 1400, iron: 450, tools: 225, silver: 900 },
        maintenanceCost: { food: 10, silver: 7.5, iron: 0.75, tools: 1 },
        trainingTime: 12,

        populationCost: 1,

        abilities: ['火器', '快速移动', '下马作战'],

        counters: { archer: 1.8, gunpowder: 1.6 },  // 骑兵近身克制火器
        weakAgainst: ['infantry'],

        obsoleteAfterEpochs: 2
    },

    cannon: {
        id: 'cannon',
        name: '迫击炮',
        desc: '用来清除丧尸聚集区的迫击炮。',
        epoch: 5,
        icon: 'Bomb',
        category: 'siege',

        attack: 60,
        defense: 12,
        speed: 2,
        range: 7,

        recruitCost: { food: 1500, iron: 700, copper: 300, tools: 450, silver: 1250 },
        maintenanceCost: { food: 10, silver: 9, iron: 1.4, copper: 0.5, tools: 2.0 },
        trainingTime: 15,

        populationCost: 3,

        abilities: ['攻城', '范围伤害', '火器'],

        counters: { infantry: 1.7, gunpowder: 1.5 },
        weakAgainst: ['cavalry'],

        obsoleteAfterEpochs: 2
    },

    // ============ 重建文明 (Epoch 6) ============
    line_infantry: {
        id: 'line_infantry',
        name: '正规军',
        desc: '经过系统训练的正规武装力量。',
        epoch: 6,
        icon: 'Users',
        category: 'infantry',

        attack: 40,
        defense: 20,
        speed: 3,
        range: 4,

        recruitCost: { food: 1250, steel: 150, tools: 200, silver: 800 },
        maintenanceCost: { food: 7, silver: 6.5, steel: 0.3, coal: 0.15 },
        trainingTime: 10,

        populationCost: 1,

        abilities: ['火器', '齐射', '刺刀冲锋'],

        counters: { cavalry: 1.7, siege: 1.5 },
        weakAgainst: ['gunpowder'],

        obsoleteAfterEpochs: 3
    },

    gatling: {
        id: 'gatling',
        name: '重机枪组',
        desc: '布置在防线上的重机枪火力点。',
        epoch: 6,
        icon: 'Zap',
        category: 'gunpowder',  // 改为火器类别

        attack: 50,
        defense: 12,
        speed: 2,
        range: 5,

        recruitCost: { food: 1500, steel: 300, tools: 350, coal: 200, silver: 1250 },
        maintenanceCost: { food: 8, silver: 9, steel: 0.6, coal: 0.8 },
        trainingTime: 12,

        populationCost: 2,

        abilities: ['火器', '压制火力', '范围伤害'],

        counters: { infantry: 2.0, cavalry: 1.8 },  // 机枪对步兵骑兵都有强克制
        weakAgainst: ['siege'],  // 被火炮克制

        obsoleteAfterEpochs: 3
    },

    lancer: {
        id: 'lancer',
        name: '突击骑兵',
        desc: '驾驶重型摩托的突击骑兵。',
        epoch: 6,
        icon: 'Compass',
        category: 'cavalry',

        attack: 38,
        defense: 20,
        speed: 8,
        range: 1,

        recruitCost: { food: 1600, steel: 120, tools: 180, silver: 1000 },
        maintenanceCost: { food: 11, silver: 8, steel: 0.25, iron: 0.4 },
        trainingTime: 11,

        populationCost: 1,

        abilities: ['冲锋', '快速移动', '侦察'],

        counters: { archer: 1.9, gunpowder: 1.7 },  // 骑兵近身克制火器
        weakAgainst: ['infantry'],

        obsoleteAfterEpochs: 3
    },

    artillery: {
        id: 'artillery',
        name: '自行火炮',
        desc: '装载在卡车上的重型火炮。',
        epoch: 6,
        icon: 'Bomb',
        category: 'siege',

        attack: 80,
        defense: 15,
        speed: 1,
        range: 8,

        recruitCost: { food: 2000, steel: 500, coal: 400, tools: 300, silver: 1750 },
        maintenanceCost: { food: 10, silver: 11, steel: 1.2, coal: 1.5 },
        trainingTime: 18,

        populationCost: 4,

        abilities: ['攻城', '范围伤害', '精确打击'],

        counters: { infantry: 2.0, gunpowder: 1.8, siege: 1.5 },
        weakAgainst: ['cavalry'],

        obsoleteAfterEpochs: 3
    }
};

// 兵种类别定义
export const UNIT_CATEGORIES = {
    infantry: { name: '近战', icon: 'Swords', color: 'text-red-400', description: '克制机动，被射手/火力克制' },
    archer: { name: '弩箭手', icon: 'Target', color: 'text-green-400', description: '克制近战，被机动克制' },
    cavalry: { name: '机动', icon: 'Navigation', color: 'text-blue-400', description: '克制射手/火力，被近战克制' },
    gunpowder: { name: '火力', icon: 'Flame', color: 'text-yellow-400', description: '克制近战/机动，近战被机动克制' },
    siege: { name: '重火力', icon: 'Bomb', color: 'text-orange-400', description: '重火力支援，但机动性差' }
};

// 克制关系常量 (用于UI显示)
export const COUNTER_RELATIONS = {
    infantry: { counters: 'cavalry', weakAgainst: 'archer/gunpowder' },
    archer: { counters: 'infantry', weakAgainst: 'cavalry' },
    cavalry: { counters: 'archer/gunpowder', weakAgainst: 'infantry' },
    gunpowder: { counters: 'infantry/cavalry', weakAgainst: 'cavalry(近战)' },
    siege: { counters: null, weakAgainst: 'all' }
};

export const calculateArmyFoodNeed = (army = {}) => {
    let total = 0;
    Object.entries(army).forEach(([unitId, count]) => {
        if (count <= 0) return;
        const unit = UNIT_TYPES[unitId];
        if (!unit) return;
        const foodNeed = unit.maintenanceCost?.food || 0;
        total += foodNeed * count;
    });
    return total;
};

// 战斗计算函数
// soldierWage: 士兵阶层的平均工资，影响战斗力（默认50，上限加成+50%）
export const calculateBattlePower = (army, epoch, militaryBuffs = 0, soldierWage = 50) => {
    let totalPower = 0;

    Object.entries(army).forEach(([unitId, count]) => {
        if (count <= 0) return;

        const unit = UNIT_TYPES[unitId];
        if (!unit) return;

        // 基础战斗力 = (攻击力 + 防御力) * 数量
        let unitPower = (unit.attack + unit.defense) * count;

        // 时代差距计算
        const epochDiff = epoch - unit.epoch;

        // 时代加成：高时代部队有科技优势
        if (epochDiff > 0 && epochDiff <= (unit.obsoleteAfterEpochs || 2)) {
            unitPower *= (1 + epochDiff * 0.05); // 每高一个时代+5%
        }

        // 时代淘汰惩罚：超过淘汰时代后战斗力下降
        const obsoleteThreshold = unit.obsoleteAfterEpochs || 2;
        if (epochDiff > obsoleteThreshold) {
            const obsoleteEpochs = epochDiff - obsoleteThreshold;
            // 每超过1个时代，战斗力降低25%，最多降低75%
            const penalty = Math.min(0.75, obsoleteEpochs * 0.25);
            unitPower *= (1 - penalty);
        }

        totalPower += unitPower;
    });

    // 应用战斗buff
    totalPower *= (1 + militaryBuffs);

    // 军饷加成：工资越高，士气越高，战斗力越强
    // 基准工资50，每高出50点工资增加25%战斗力，上限+50%
    const baseWage = 50;
    const wageRatio = Math.max(0, (soldierWage - baseWage) / baseWage);
    const wageMultiplier = Math.min(1.5, 1 + wageRatio * 0.5);
    totalPower *= wageMultiplier;

    return totalPower;
};

/**
 * 根据时代获取可用的兵种列表
 * @param {number} epoch - 当前时代
 * @returns {Array} 可用兵种ID数组
 */
const getAvailableUnitsForEpoch = (epoch) => {
    const available = [];
    Object.entries(UNIT_TYPES).forEach(([unitId, unit]) => {
        // 兵种时代 <= 当前时代，且未过时
        const epochDiff = epoch - unit.epoch;
        const obsoleteThreshold = unit.obsoleteAfterEpochs || 2;
        if (unit.epoch <= epoch && epochDiff <= obsoleteThreshold) {
            available.push(unitId);
        }
    });
    return available;
};

/**
 * 为AI国家生成虚拟军队组成
 * 每次战斗临时生成，数量基于幸存者、militaryStrength和时代
 * @param {Object} nation - 国家对象
 * @param {number} epoch - 当前时代
 * @param {number} deploymentRatio - 派遣比例 (0-1)，默认1.0表示全部派遣
 * @param {number} difficultyMultiplier - 难度军力倍数，默认1.0
 * @returns {Object} 军队对象 { unitId: count, ... }
 */
export const generateNationArmy = (nation, epoch, deploymentRatio = 1.0, difficultyMultiplier = 1.0) => {
    const population = nation?.population || 100;
    const militaryStrength = nation?.militaryStrength ?? 1.0;
    const aggression = nation?.aggression || 0.3;

    // [FIX] 添加财富约束：军队需要经济支撑
    const wealth = nation?.wealth || 500;
    const wealthPerCapita = wealth / Math.max(1, population);
    
    // 财富约束系数：基于人均财富
    // 人均财富 < 0.5: 极度贫困，军队规模削减到5%以下
    // 人均财富 0.5-5: 贫困，军队规模10%-50%
    // 人均财富 5-20: 正常，军队规模50%-100%
    // 人均财富 > 20: 富裕，军队规模100%
    let wealthConstraint = 1.0;
    if (wealthPerCapita < 0.5) {
        // 极度贫困：几乎无法维持军队
        wealthConstraint = Math.max(0.05, wealthPerCapita * 0.1);
    } else if (wealthPerCapita < 5) {
        // 贫困：军队规模受限
        wealthConstraint = 0.05 + (wealthPerCapita - 0.5) / 4.5 * 0.45;  // 5%-50%
    } else if (wealthPerCapita < 20) {
        // 正常：逐渐恢复到正常规模
        wealthConstraint = 0.5 + (wealthPerCapita - 5) / 15 * 0.5;  // 50%-100%
    }
    // else: wealthPerCapita >= 20, wealthConstraint = 1.0 (无约束)

    // 基础军队规模 = 幸存者 × 战斗强度 × 基础比例(0.6%) × 时代系数 × 难度倍数 × 财富约束
    // Note: population is in units of 10,000 (万), so 0.6% gives reasonable army size
    // E.g. 3679万 × 1.0 × 0.006 × 1.15 × 1.0 × 1.0 ≈ 25,000 troops
    const epochFactor = 1 + epoch * 0.15;
    const baseArmySize = Math.floor(population * militaryStrength * 0.006 * epochFactor * difficultyMultiplier * wealthConstraint);

    // 应用派遣比例
    const deployedSize = Math.max(1, Math.floor(baseArmySize * deploymentRatio));

    // 获取当前时代可用兵种
    const availableUnits = getAvailableUnitsForEpoch(epoch);
    if (availableUnits.length === 0) {
        return { militia: deployedSize };
    }

    // 按类别分配军队（根据国家侵略性调整比例）
    const army = {};
    let remaining = deployedSize;

    // 侵略性高的国家更多进攻型单位
    const infantryRatio = 0.35 + (1 - aggression) * 0.15;  // 35-50%
    const rangedRatio = 0.25 + aggression * 0.1;           // 25-35%
    const cavalryRatio = 0.20 + aggression * 0.1;          // 20-30%
    const siegeRatio = 0.05;                                // 5%

    // 过滤可用兵种按类别
    const infantryUnits = availableUnits.filter(id => UNIT_TYPES[id]?.category === 'infantry');
    const rangedUnits = availableUnits.filter(id =>
        UNIT_TYPES[id]?.category === 'archer' || UNIT_TYPES[id]?.category === 'gunpowder'
    );
    const cavalryUnits = availableUnits.filter(id => UNIT_TYPES[id]?.category === 'cavalry');
    const siegeUnits = availableUnits.filter(id => UNIT_TYPES[id]?.category === 'siege');

    // 分配步兵
    if (infantryUnits.length > 0) {
        const count = Math.floor(remaining * infantryRatio);
        const unitId = infantryUnits[Math.floor(Math.random() * infantryUnits.length)];
        army[unitId] = (army[unitId] || 0) + Math.max(1, count);
        remaining -= count;
    }

    // 分配远程
    if (rangedUnits.length > 0 && remaining > 0) {
        const count = Math.floor(deployedSize * rangedRatio);
        const unitId = rangedUnits[Math.floor(Math.random() * rangedUnits.length)];
        army[unitId] = (army[unitId] || 0) + Math.max(1, count);
        remaining -= count;
    }

    // 分配骑兵
    if (cavalryUnits.length > 0 && remaining > 0) {
        const count = Math.floor(deployedSize * cavalryRatio);
        const unitId = cavalryUnits[Math.floor(Math.random() * cavalryUnits.length)];
        army[unitId] = (army[unitId] || 0) + Math.max(1, count);
        remaining -= count;
    }

    // 分配攻城
    if (siegeUnits.length > 0 && remaining > 2) {
        const count = Math.floor(deployedSize * siegeRatio);
        if (count > 0) {
            const unitId = siegeUnits[Math.floor(Math.random() * siegeUnits.length)];
            army[unitId] = (army[unitId] || 0) + count;
            remaining -= count;
        }
    }

    // 剩余分配给步兵
    if (remaining > 0 && infantryUnits.length > 0) {
        const unitId = infantryUnits[0];
        army[unitId] = (army[unitId] || 0) + remaining;
    }

    return army;
};

/**
 * 计算AI国家的总战斗力
 * @param {Object} nation - 国家对象
 * @param {number} epoch - 当前时代
 * @param {number} deploymentRatio - 派遣比例 (0-1)，默认1.0表示全部军队
 * @param {number} difficultyMultiplier - 难度军力倍数，默认1.0
 * @returns {number} 战斗力值
 */
export const calculateNationBattlePower = (nation, epoch, deploymentRatio = 1.0, difficultyMultiplier = 1.0) => {
    const army = generateNationArmy(nation, epoch, deploymentRatio, difficultyMultiplier);
    const aggression = nation?.aggression || 0.3;

    // 侵略性作为战斗buff（0.3侵略性 = 0战斗buff，0.6侵略性 = +15%）
    const militaryBuffs = Math.max(0, (aggression - 0.3) * 0.5);

    return calculateBattlePower(army, epoch, militaryBuffs);
};

// 计算兵种克制效果
export const calculateCounterBonus = (attackerArmy, defenderArmy) => {
    let bonusMultiplier = 1.0;
    let counterCount = 0;

    Object.entries(attackerArmy).forEach(([attackerId, attackerCount]) => {
        if (attackerCount <= 0) return;

        const attackerUnit = UNIT_TYPES[attackerId];
        if (!attackerUnit) return;

        Object.entries(defenderArmy).forEach(([defenderId, defenderCount]) => {
            if (defenderCount <= 0) return;

            const defenderUnit = UNIT_TYPES[defenderId];
            if (!defenderUnit) return;

            // 检查类别克制
            if (attackerUnit.counters[defenderUnit.category]) {
                const counterBonus = attackerUnit.counters[defenderUnit.category];
                const weight = (attackerCount * defenderCount) / 100; // 权重
                bonusMultiplier += (counterBonus - 1) * weight;
                counterCount++;
            }
        });
    });

    return { multiplier: bonusMultiplier, counterCount };
};

const ATTACK_ABILITY_BONUS = {
    '范围伤害': 0.12,
    '压制火力': 0.1,
    '火器': 0.06,
    '齐射': 0.05,
    '远程攻击': 0.05,
    '穿甲': 0.06,
    '冲锋': 0.06,
    '机动': 0.04,
    '快速移动': 0.04,
    '侦察': 0.03,
    '攻城': 0.08,
    '精确打击': 0.08,
};

const DEFENSE_ABILITY_BONUS = {
    '坚守': 0.08,
    '方阵': 0.08,
    '盾墙': 0.08,
};

const sumAbilityBonus = (abilities, bonusMap) => {
    if (!Array.isArray(abilities)) return 0;
    return abilities.reduce((sum, ability) => sum + (bonusMap[ability] || 0), 0);
};

const getEnemyCategoryRatios = (enemyCategoryCounts = {}) => {
    const total = Object.values(enemyCategoryCounts).reduce((sum, count) => sum + (count || 0), 0);
    if (total <= 0) {
        return { infantry: 0, cavalry: 0, archer: 0, gunpowder: 0, siege: 0 };
    }
    return {
        infantry: (enemyCategoryCounts.infantry || 0) / total,
        cavalry: (enemyCategoryCounts.cavalry || 0) / total,
        archer: (enemyCategoryCounts.archer || 0) / total,
        gunpowder: (enemyCategoryCounts.gunpowder || 0) / total,
        siege: (enemyCategoryCounts.siege || 0) / total,
    };
};

const getCategoryCounts = (army = {}) => {
    const counts = {};
    Object.entries(army).forEach(([unitId, count]) => {
        if (count <= 0) return;
        const unit = UNIT_TYPES[unitId];
        if (!unit) return;
        counts[unit.category] = (counts[unit.category] || 0) + count;
    });
    return counts;
};

const getCounterMultiplier = (unit, enemyCategoryCounts, enemyTotalUnits) => {
    if (!unit || enemyTotalUnits <= 0) return 1;
    let multiplier = 1;
    Object.entries(unit.counters || {}).forEach(([category, bonus]) => {
        const weight = (enemyCategoryCounts[category] || 0) / enemyTotalUnits;
        if (weight > 0) {
            multiplier += (bonus - 1) * weight;
        }
    });
    return multiplier;
};

const getCounterPressureByCategory = (enemyArmy = {}) => {
    const pressure = {
        infantry: 1,
        cavalry: 1,
        archer: 1,
        gunpowder: 1,
        siege: 1,
    };
    const totalEnemyUnits = Object.values(enemyArmy).reduce((sum, count) => sum + (count || 0), 0);
    if (totalEnemyUnits <= 0) return pressure;

    Object.entries(enemyArmy).forEach(([unitId, count]) => {
        if (count <= 0) return;
        const unit = UNIT_TYPES[unitId];
        if (!unit || !unit.counters) return;
        const weight = count / totalEnemyUnits;
        Object.entries(unit.counters).forEach(([category, bonus]) => {
            pressure[category] += (bonus - 1) * weight;
        });
    });

    return pressure;
};

const buildCombatProfile = ({
    army,
    enemyCategoryCounts,
    enemyCounterPressure,
    militaryBuffs = 0,
    defenseMultiplier = 1,
}) => {
    let totalAttack = 0;
    let totalDefense = 0;
    let totalUnits = 0;
    const unitProfiles = {};
    const enemyTotalUnits = Object.values(enemyCategoryCounts || {}).reduce((sum, count) => sum + (count || 0), 0);
    const enemyRatios = getEnemyCategoryRatios(enemyCategoryCounts);

    Object.entries(army || {}).forEach(([unitId, count]) => {
        if (count <= 0) return;
        const unit = UNIT_TYPES[unitId];
        if (!unit) return;

        const counterMultiplier = getCounterMultiplier(unit, enemyCategoryCounts || {}, enemyTotalUnits);
        const attackAbilityBonus = sumAbilityBonus(unit.abilities, ATTACK_ABILITY_BONUS);
        const defenseAbilityBonus = sumAbilityBonus(unit.abilities, DEFENSE_ABILITY_BONUS);
        const rangeBonus = Math.min(0.3, (unit.range || 1) * 0.03);
        const speedBonus = Math.min(0.2, (unit.speed || 1) * 0.02);

        // 能力-规则细化：根据敌方构成对攻击/防御做情境修正
        let abilityAttackMod = 0;
        let abilityDefenseMod = 0;
        let counterPressureMod = 0;
        const abilities = Array.isArray(unit.abilities) ? unit.abilities : [];

        if (abilities.includes('范围伤害')) {
            abilityAttackMod += 0.18 * (enemyRatios.infantry + enemyRatios.archer);
        }
        if (abilities.includes('压制火力')) {
            abilityAttackMod += 0.12 * (enemyRatios.infantry + enemyRatios.archer);
        }
        if (abilities.includes('火器')) {
            abilityAttackMod += 0.1 * (enemyRatios.infantry + enemyRatios.cavalry);
            abilityDefenseMod -= 0.08 * enemyRatios.cavalry;
        }
        if (abilities.includes('穿甲')) {
            abilityAttackMod += 0.08 * (enemyRatios.infantry + enemyRatios.gunpowder + enemyRatios.siege);
        }
        if (abilities.includes('冲锋') && (unit.speed || 0) >= 6) {
            abilityAttackMod += 0.1 * (enemyRatios.gunpowder + enemyRatios.archer);
        }
        if (abilities.includes('刺刀冲锋')) {
            abilityAttackMod += 0.06 * enemyRatios.cavalry;
        }
        if (abilities.includes('装填缓慢')) {
            abilityAttackMod -= 0.12 * enemyRatios.cavalry;
        }
        if (abilities.includes('重甲')) {
            abilityDefenseMod += 0.12;
            abilityAttackMod -= 0.05;
        }
        if (abilities.includes('抗火器')) {
            counterPressureMod -= 0.15 * enemyRatios.gunpowder;
            abilityDefenseMod += 0.05 * enemyRatios.gunpowder;
        }
        if (abilities.includes('精确射击') || abilities.includes('精确打击')) {
            abilityAttackMod += 0.08 * (enemyRatios.siege + enemyRatios.infantry);
        }
        if (abilities.includes('下马作战')) {
            abilityDefenseMod += 0.08 * enemyRatios.cavalry;
        }

        const attackPerUnit = unit.attack
            * (1 + rangeBonus + speedBonus + attackAbilityBonus + abilityAttackMod)
            * (1 + militaryBuffs)
            * counterMultiplier;

        const defensePerUnit = unit.defense
            * (1 + speedBonus * 0.5 + defenseAbilityBonus + abilityDefenseMod)
            * defenseMultiplier
            * (1 + militaryBuffs);

        const counterPressure = Math.max(0.6, (enemyCounterPressure?.[unit.category] || 1) * (1 + counterPressureMod));
        const adjustedDefensePerUnit = defensePerUnit / counterPressure;

        totalAttack += attackPerUnit * count;
        totalDefense += defensePerUnit * count;
        totalUnits += count;

        unitProfiles[unitId] = {
            count,
            attackPerUnit,
            defensePerUnit,
            adjustedDefensePerUnit,
            category: unit.category,
        };
    });

    return {
        totalAttack,
        totalDefense,
        totalUnits,
        unitProfiles,
    };
};

const getDominantCategory = (unitProfiles = {}) => {
    const categoryCounts = {};
    Object.values(unitProfiles).forEach((profile) => {
        if (!profile) return;
        categoryCounts[profile.category] = (categoryCounts[profile.category] || 0) + profile.count;
    });
    let dominantCategory = null;
    let maxCount = 0;
    Object.entries(categoryCounts).forEach(([category, count]) => {
        if (count > maxCount) {
            maxCount = count;
            dominantCategory = category;
        }
    });
    return dominantCategory;
};

const probabilisticRound = (value) => {
    const integerPart = Math.floor(value);
    const fractionalPart = value - integerPart;
    return integerPart + (Math.random() < fractionalPart ? 1 : 0);
};

const applyLossCap = (losses, maxTotal) => {
    if (maxTotal <= 0) return {};
    const capped = { ...losses };
    let totalLoss = Object.values(capped).reduce((sum, count) => sum + (count || 0), 0);
    if (totalLoss <= maxTotal) return capped;

    const scale = maxTotal / totalLoss;
    Object.keys(capped).forEach((unitId) => {
        capped[unitId] = probabilisticRound(capped[unitId] * scale);
    });

    totalLoss = Object.values(capped).reduce((sum, count) => sum + (count || 0), 0);
    if (totalLoss <= maxTotal) return capped;

    const unitIdsByLoss = Object.keys(capped).sort((a, b) => (capped[b] || 0) - (capped[a] || 0));
    let index = 0;
    while (totalLoss > maxTotal && unitIdsByLoss.length > 0) {
        const unitId = unitIdsByLoss[index % unitIdsByLoss.length];
        if ((capped[unitId] || 0) > 0) {
            capped[unitId] -= 1;
            totalLoss -= 1;
        }
        index += 1;
    }

    return capped;
};

const computeLosses = ({
    sideProfile,
    enemyProfile,
    enemyCounterPressure,
    isWinner,
    powerRatio,
    decisive,
    dominanceRatio,
    ownPowerScore,
    enemyPowerScore,
}) => {
    if (!sideProfile || sideProfile.totalUnits <= 0 || enemyProfile.totalAttack <= 0) {
        return {};
    }

    const relativePower = enemyPowerScore / (enemyPowerScore + ownPowerScore);
    let damageScale = 0.12 * Math.pow(relativePower, 0.9);
    if (isWinner) damageScale *= 0.75;
    if (decisive) damageScale *= isWinner ? 0.6 : 1.1;
    damageScale *= 0.9 + Math.random() * 0.2;

    // 劣势方允许更高的伤害预算，支持“全灭”
    if (!isWinner) {
        const dominance = Math.max(1, dominanceRatio || 1);
        damageScale *= 1 + Math.min(0.8, (dominance - 1) * 0.18);
    }

    const damagePoints = enemyProfile.totalAttack * damageScale;
    if (damagePoints <= 0) return {};

    let exposureTotal = 0;
    Object.values(sideProfile.unitProfiles).forEach((profile) => {
        exposureTotal += profile.count / profile.adjustedDefensePerUnit;
    });

    if (exposureTotal <= 0) return {};

    const losses = {};
    Object.entries(sideProfile.unitProfiles).forEach(([unitId, profile]) => {
        const exposure = profile.count / profile.adjustedDefensePerUnit;
        const assignedDamage = damagePoints * (exposure / exposureTotal);
        const expectedLoss = assignedDamage / profile.adjustedDefensePerUnit;
        losses[unitId] = Math.min(profile.count, probabilisticRound(expectedLoss));
    });

    if (!isWinner) {
        const dominance = Math.max(1, dominanceRatio || 1);
        if (dominance >= 3 && (decisive || dominance >= 6)) {
            const wipeChance = Math.min(0.75, 0.2 + (dominance - 3) * 0.12 + (decisive ? 0.15 : 0));
            if (Math.random() < wipeChance) {
                const wiped = {};
                Object.entries(sideProfile.unitProfiles).forEach(([unitId, profile]) => {
                    wiped[unitId] = profile.count;
                });
                return wiped;
            }
        }
    }

    if (isWinner && powerRatio >= 3 && enemyProfile.totalUnits > 0) {
        let maxLossTotal;
        if (powerRatio >= 10) {
            maxLossTotal = Math.floor(Math.sqrt(enemyProfile.totalUnits) * 0.2);
        } else if (powerRatio >= 6) {
            maxLossTotal = Math.floor(Math.sqrt(enemyProfile.totalUnits) * 0.3);
        } else {
            maxLossTotal = Math.floor(Math.sqrt(enemyProfile.totalUnits) * 0.4);
        }

        const dominantCategory = getDominantCategory(sideProfile.unitProfiles);
        const counterPressure = enemyCounterPressure?.[dominantCategory] || 1;
        if (counterPressure >= 1.4 && maxLossTotal === 0 && enemyProfile.totalUnits >= 5) {
            maxLossTotal = 1;
        }

        return applyLossCap(losses, maxLossTotal);
    }

    return losses;
};

// 完整战斗模拟
export const simulateBattle = (attackerData, defenderData) => {
    const { army: attackerArmy, militaryBuffs: attackerBuffs = 0 } = attackerData;
    const { army: defenderArmy, militaryBuffs: defenderBuffs = 0, wealth: defenderWealth = 1000 } = defenderData;

    const attackerCategoryCounts = getCategoryCounts(attackerArmy);
    const defenderCategoryCounts = getCategoryCounts(defenderArmy);
    const attackerCounterPressure = getCounterPressureByCategory(attackerArmy);
    const defenderCounterPressure = getCounterPressureByCategory(defenderArmy);

    const attackerProfile = buildCombatProfile({
        army: attackerArmy,
        enemyCategoryCounts: defenderCategoryCounts,
        enemyCounterPressure: defenderCounterPressure,
        militaryBuffs: attackerBuffs,
        defenseMultiplier: 1,
    });

    const defenderProfile = buildCombatProfile({
        army: defenderArmy,
        enemyCategoryCounts: attackerCategoryCounts,
        enemyCounterPressure: attackerCounterPressure,
        militaryBuffs: defenderBuffs,
        defenseMultiplier: 1.2,
    });

    let attackerPower = attackerProfile.totalAttack * 0.65 + attackerProfile.totalDefense * 0.35;
    let defenderPower = defenderProfile.totalAttack * 0.65 + defenderProfile.totalDefense * 0.35;

    attackerPower *= 0.9 + Math.random() * 0.2;
    defenderPower *= 0.9 + Math.random() * 0.2;

    const totalPower = attackerPower + defenderPower;
    const attackerAdvantage = totalPower > 0 ? attackerPower / totalPower : 0;
    const defenderAdvantage = totalPower > 0 ? defenderPower / totalPower : 0;

    const victory = attackerAdvantage > 0.5;
    const decisive = Math.abs(attackerAdvantage - 0.5) > 0.28;

    const powerRatio = defenderPower > 0 ? attackerPower / defenderPower : 100;

    const attackerLosses = computeLosses({
        sideProfile: attackerProfile,
        enemyProfile: defenderProfile,
        enemyCounterPressure: defenderCounterPressure,
        isWinner: victory,
        powerRatio,
        decisive,
        dominanceRatio: victory ? powerRatio : 1 / powerRatio,
        ownPowerScore: attackerPower,
        enemyPowerScore: defenderPower,
    });

    const defenderLosses = computeLosses({
        sideProfile: defenderProfile,
        enemyProfile: attackerProfile,
        enemyCounterPressure: attackerCounterPressure,
        isWinner: !victory,
        powerRatio: powerRatio > 0 ? 1 / powerRatio : 100,
        decisive,
        dominanceRatio: victory ? powerRatio : 1 / powerRatio,
        ownPowerScore: defenderPower,
        enemyPowerScore: attackerPower,
    });

    const attackerCounter = calculateCounterBonus(attackerArmy, defenderArmy);
    const defenderCounter = calculateCounterBonus(defenderArmy, attackerArmy);

    // 计算掠夺资源（按比例计算，考虑敌方财富）
    // [FIXED] 添加硬性上限防止后期资源爆炸
    let loot = {};
    if (victory) {
        // Base loot multiplier depends on victory type
        const baseLootMultiplier = decisive ? 0.08 : 0.04; // 8% or 4% of enemy wealth
        const wealthBasedLoot = defenderWealth * baseLootMultiplier;

        // 硬性上限 - 无论敌方多富有，单次战斗的战利品都不会超过这些值
        const LOOT_CAPS = {
            food: 500,
            wood: 300,
            stone: 200,
            silver: 1500,
            iron: 150,
            copper: 100,
            cloth: 100,
            tools: 80,
        };

        // Diversified loot based on enemy wealth with proportional scaling
        // Apply hard caps to prevent late-game overflow
        loot = {
            food: Math.min(LOOT_CAPS.food, Math.floor(wealthBasedLoot * 0.25)),
            wood: Math.min(LOOT_CAPS.wood, Math.floor(wealthBasedLoot * 0.12)),
            stone: Math.min(LOOT_CAPS.stone, Math.floor(wealthBasedLoot * 0.08)),
            silver: Math.min(LOOT_CAPS.silver, Math.floor(wealthBasedLoot * 0.30)),
            iron: Math.min(LOOT_CAPS.iron, Math.floor(wealthBasedLoot * 0.10)),
            copper: Math.min(LOOT_CAPS.copper, Math.floor(wealthBasedLoot * 0.05)),
            cloth: Math.min(LOOT_CAPS.cloth, Math.floor(wealthBasedLoot * 0.05)),
            tools: Math.min(LOOT_CAPS.tools, Math.floor(wealthBasedLoot * 0.05)),
        };

        // Remove zero or negative values
        Object.keys(loot).forEach(key => {
            if (loot[key] <= 0) delete loot[key];
        });
    }

    return {
        victory,
        decisive,
        attackerPower: Math.floor(attackerPower),
        defenderPower: Math.floor(defenderPower),
        attackerAdvantage: (attackerAdvantage * 100).toFixed(1),
        defenderAdvantage: (defenderAdvantage * 100).toFixed(1),
        attackerLosses,
        defenderLosses,
        attackerCounter: attackerCounter.counterCount,
        defenderCounter: defenderCounter.counterCount,
        loot,
        battleReport: generateBattleReport({
            victory,
            decisive,
            attackerPower,
            defenderPower,
            attackerCounter: attackerCounter.counterCount,
            defenderCounter: defenderCounter.counterCount,
            attackerLosses,
            defenderLosses,
            loot
        })
    };
};

// 生成战斗报告
const generateBattleReport = (data) => {
    const { victory, decisive, attackerPower, defenderPower, attackerCounter, defenderCounter, attackerLosses, defenderLosses, loot } = data;

    let report = [];

    if (victory) {
        if (decisive) {
            report.push('🎉 压倒性胜利！敌军溃不成军！');
        } else {
            report.push('✓ 艰难的胜利，我军成功击退敌人。');
        }
    } else {
        if (decisive) {
            report.push('💀 惨败！我军遭受重创！');
        } else {
            report.push('✗ 战败，我军被迫撤退。');
        }
    }

    report.push(`战斗力对比：我方 ${Math.floor(attackerPower)} vs 敌方 ${Math.floor(defenderPower)}`);

    if (attackerCounter > 0) {
        report.push(`✓ 我方兵种克制生效 ${attackerCounter} 次`);
    }
    if (defenderCounter > 0) {
        report.push(`✗ 敌方兵种克制生效 ${defenderCounter} 次`);
    }

    const totalAttackerLoss = Object.values(attackerLosses).reduce((sum, val) => sum + val, 0);
    const totalDefenderLoss = Object.values(defenderLosses).reduce((sum, val) => sum + val, 0);

    report.push(`我方损失：${totalAttackerLoss} 人`);
    report.push(`敌方损失：${totalDefenderLoss} 人`);

    if (victory && loot) {
        const lootItems = Object.entries(loot).filter(([, v]) => v > 0).map(([key, value]) => `${key} ${value}`).join(', ');
        if (lootItems) {
            report.push(`掠夺资源：${lootItems}`);
        }
    }

    return report;
};

// 计算军队维护成本
export const calculateArmyMaintenance = (army) => {
    const maintenance = {};

    Object.entries(army).forEach(([unitId, count]) => {
        if (count <= 0) return;

        const unit = UNIT_TYPES[unitId];
        if (!unit) return;

        Object.entries(unit.maintenanceCost).forEach(([resource, cost]) => {
            maintenance[resource] = (maintenance[resource] || 0) + (cost * count);
        });
    });

    return maintenance;
};

// 计算军队所需战斗容量（每个单位占用1点容量）
export const calculateArmyCapacityNeed = (army) => {
    let totalCapacity = 0;

    Object.entries(army).forEach(([unitId, count]) => {
        if (count <= 0) return;

        const unit = UNIT_TYPES[unitId];
        if (!unit) return;

        // 每个单位占用1点战斗容量
        totalCapacity += count;
    });

    return totalCapacity;
};


// 计算军队幸存者占用
export const calculateArmyPopulation = (army) => {
    let totalPopulation = 0;

    Object.entries(army).forEach(([unitId, count]) => {
        if (count <= 0) return;

        const unit = UNIT_TYPES[unitId];
        if (!unit) return;

        totalPopulation += unit.populationCost * count;
    });

    return totalPopulation;
};

/**
 * 计算军队规模惩罚系数
 * 军队占幸存者比例越高，维护成本越高
 * @param {number} armyPopulation - 军队幸存者占用
 * @param {number} totalPopulation - 总幸存者
 * @returns {number} 规模惩罚系数 (1.0 ~ 2.0+)
 */
export const calculateArmyScalePenalty = (armyPopulation, totalPopulation) => {
    if (totalPopulation <= 0 || armyPopulation <= 0) return 1.0;

    const armyRatio = armyPopulation / totalPopulation;

    // 规模惩罚表：
    // 0-10%: ×1.0
    // 10-20%: ×1.25
    // 20-30%: ×1.5
    // 30-40%: ×1.75
    // 40%+: ×2.0+

    if (armyRatio <= 0.10) {
        return 1.0;
    } else if (armyRatio <= 0.20) {
        return 1.0 + (armyRatio - 0.10) * 2.5; // 0.10->1.0, 0.20->1.25
    } else if (armyRatio <= 0.30) {
        return 1.25 + (armyRatio - 0.20) * 2.5; // 0.20->1.25, 0.30->1.5
    } else if (armyRatio <= 0.40) {
        return 1.5 + (armyRatio - 0.30) * 2.5; // 0.30->1.5, 0.40->1.75
    } else {
        // 40%以上继续线性增加
        return 1.75 + (armyRatio - 0.40) * 2.5;
    }
};

// 默认资源价格，当市场价格不可用时使用
const DEFAULT_RESOURCE_PRICES = {
    food: 1,
    silver: 1,
    wood: 0.8,
    stone: 0.6,
    copper: 2,
    iron: 3,
    tools: 5,
    coal: 2,
    steel: 8
};

/**
 * 计算单个单位的预估每日军费（包含资源成本和时代加成）
 * @param {Object} unit - 单位对象
 * @param {Object} priceMap - 资源价格映射 {resource: price}
 * @param {number} epoch - 当前时代
 * @param {number} wageMultiplier - 军饷倍率
 * @returns {number} 预估每日军费（信用点）
 */
export const calculateUnitExpense = (unit, priceMap = {}, epoch = 0, wageMultiplier = 1) => {
    if (!unit || !unit.maintenanceCost) return 0;

    let resourceCost = 0;

    Object.entries(unit.maintenanceCost).forEach(([resource, amount]) => {
        if (resource === 'silver') {
            // 信用点直接加
            resourceCost += amount;
        } else {
            // 其他资源按市场价折算
            const price = priceMap[resource] || DEFAULT_RESOURCE_PRICES[resource] || 1;
            resourceCost += amount * price;
        }
    });

    // 时代加成：每时代+10%维护成本
    const epochMultiplier = 1 + epoch * 0.1;

    // 应用军饷倍率（最低0.5）
    const effectiveWageMultiplier = Math.max(0.5, wageMultiplier);

    return resourceCost * epochMultiplier * effectiveWageMultiplier;
};

/**
 * 计算军队资源维护成本（按市场价折算为信用点）
 * @param {Object} army - 军队对象 {unitId: count}
 * @param {Object} priceMap - 资源价格映射 {resource: price}
 * @param {number} epoch - 当前时代
 * @returns {Object} { resourceCost, epochMultiplier, totalCost }
 */
export const calculateArmyMaintenanceCost = (army, priceMap = {}, epoch = 0) => {
    const maintenance = calculateArmyMaintenance(army);

    let resourceCost = 0;
    const costBreakdown = {};

    Object.entries(maintenance).forEach(([resource, amount]) => {
        if (resource === 'silver') {
            // 信用点直接加
            resourceCost += amount;
            costBreakdown[resource] = amount;
        } else {
            // 其他资源按市场价折算
            const price = priceMap[resource] || DEFAULT_RESOURCE_PRICES[resource] || 1;
            const cost = amount * price;
            resourceCost += cost;
            costBreakdown[resource] = cost;
        }
    });

    // 时代加成：每时代+10%维护成本
    const epochMultiplier = 1 + epoch * 0.1;
    const totalCost = resourceCost * epochMultiplier;

    return {
        resourceCost,      // 基础资源成本
        epochMultiplier,   // 时代系数
        totalCost,         // 包含时代加成的总成本
        breakdown: costBreakdown
    };
};

/**
 * 计算军队总维护支出（包含规模惩罚）
 * @param {Object} army - 军队对象
 * @param {Object} priceMap - 资源价格映射
 * @param {number} epoch - 当前时代
 * @param {number} totalPopulation - 总幸存者
 * @param {number} wageMultiplier - 军饷倍率
 * @returns {Object} 完整的军费计算结果
 */
export const calculateTotalArmyExpense = (army, priceMap = {}, epoch = 0, totalPopulation = 100, wageMultiplier = 1) => {
    const armyPopulation = calculateArmyPopulation(army);
    const armyCount = Object.values(army).reduce((sum, count) => sum + count, 0);

    // 1. 计算资源维护成本
    const maintenanceCost = calculateArmyMaintenanceCost(army, priceMap, epoch);

    // 2. 计算规模惩罚
    const scalePenalty = calculateArmyScalePenalty(armyPopulation, totalPopulation);

    // 3. 应用军饷倍率
    const effectiveWageMultiplier = Math.max(0.5, wageMultiplier);

    // 4. 总军费 = 资源成本(含时代加成) × 规模惩罚 × 军饷倍率
    const totalExpense = maintenanceCost.totalCost * scalePenalty * effectiveWageMultiplier;

    return {
        dailyExpense: totalExpense,
        resourceCost: maintenanceCost.resourceCost,
        epochMultiplier: maintenanceCost.epochMultiplier,
        scalePenalty,
        wageMultiplier: effectiveWageMultiplier,
        armyCount,
        armyPopulation,
        breakdown: maintenanceCost.breakdown
    };
};
