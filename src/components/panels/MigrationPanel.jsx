/**
 * 移民面板
 * 
 * 功能：
 * 1. 显示边境政策设置
 * 2. 显示移民流入/流出统计
 * 3. 显示移民对幸存者和经济的影响
 */

import React, { useState, useMemo } from 'react';

/**
 * 边境政策选项
 */
const BORDER_POLICIES = {
    open: {
        id: 'open',
        name: '开放边境',
        icon: '🚪',
        description: '欢迎所有移民，移民流入+50%，但可能带来不稳定因素',
        effects: {
            immigrationBonus: 0.5,
            emigrationPenalty: 0,
            stabilityPenalty: -2,
        },
        color: 'green',
    },
    controlled: {
        id: 'controlled',
        name: '管控边境',
        icon: '🛂',
        description: '选择性接纳移民，平衡发展',
        effects: {
            immigrationBonus: 0,
            emigrationPenalty: 0,
            stabilityPenalty: 0,
        },
        color: 'blue',
    },
    restricted: {
        id: 'restricted',
        name: '限制边境',
        icon: '🚫',
        description: '严格限制移民流入，移民流入-50%，但更稳定',
        effects: {
            immigrationBonus: -0.5,
            emigrationPenalty: 0.2,
            stabilityPenalty: 0,
        },
        color: 'yellow',
    },
    closed: {
        id: 'closed',
        name: '封锁边境',
        icon: '🔒',
        description: '完全关闭边境，无移民流动，可能影响贸易',
        effects: {
            immigrationBonus: -1,
            emigrationPenalty: -1,
            stabilityPenalty: 0,
            tradePenalty: -0.1,
        },
        color: 'red',
    },
};

/**
 * 边境政策卡片
 */
const BorderPolicyCard = ({ policy, isSelected, onSelect }) => {
    const colorClasses = {
        green: isSelected ? 'border-green-500 bg-green-900/30' : 'border-gray-600 hover:border-green-500/50',
        blue: isSelected ? 'border-blue-500 bg-blue-900/30' : 'border-gray-600 hover:border-blue-500/50',
        yellow: isSelected ? 'border-yellow-500 bg-yellow-900/30' : 'border-gray-600 hover:border-yellow-500/50',
        red: isSelected ? 'border-red-500 bg-red-900/30' : 'border-gray-600 hover:border-red-500/50',
    };
    
    return (
        <button
            onClick={onSelect}
            className={`w-full p-3 rounded-lg border-2 transition-all text-left ${colorClasses[policy.color]}`}
        >
            <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{policy.icon}</span>
                <span className={`font-medium ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                    {policy.name}
                </span>
                {isSelected && <span className="ml-auto text-green-400">✓</span>}
            </div>
            <p className="text-xs text-gray-400">{policy.description}</p>
        </button>
    );
};

/**
 * 移民统计卡片
 */
const MigrationStatCard = ({ title, value, change, icon, color = 'blue' }) => {
    const colorClasses = {
        blue: 'text-blue-400',
        green: 'text-green-400',
        red: 'text-red-400',
        yellow: 'text-yellow-400',
    };
    
    return (
        <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
                <span>{icon}</span>
                <span className="text-xs text-gray-400">{title}</span>
            </div>
            <div className={`text-lg font-medium ${colorClasses[color]}`}>
                {typeof value === 'number' ? value.toLocaleString() : value}
            </div>
            {change !== undefined && (
                <div className={`text-xs ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {change >= 0 ? '↑' : '↓'} {Math.abs(change).toLocaleString()} 本月
                </div>
            )}
        </div>
    );
};

/**
 * 移民来源/去向列表
 */
const MigrationFlowList = ({ flows, type }) => {
    if (!flows || flows.length === 0) {
        return (
            <div className="text-center text-gray-500 py-4 text-sm">
                本月无{type === 'in' ? '移民流入' : '移民流出'}
            </div>
        );
    }
    
    return (
        <div className="space-y-2">
            {flows.slice(0, 5).map((flow, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-gray-800/30 rounded">
                    <div className="flex items-center gap-2">
                        <span>{flow.flag || '🏴'}</span>
                        <span className="text-sm text-gray-300">{flow.nationName}</span>
                    </div>
                    <div className={`text-sm ${type === 'in' ? 'text-green-400' : 'text-red-400'}`}>
                        {type === 'in' ? '+' : '-'}{flow.amount.toLocaleString()}
                    </div>
                </div>
            ))}
        </div>
    );
};

/**
 * 移民面板主组件
 */
const MigrationPanel = ({
    currentPolicy = 'controlled',
    onPolicyChange,
    migrationStats = {},
    recentFlows = { inflows: [], outflows: [] },
    population = {},
}) => {
    const [selectedPolicy, setSelectedPolicy] = useState(currentPolicy);
    
    // 计算移民影响
    const migrationImpact = useMemo(() => {
        const totalPop = population.total || 10000;
        const immigrants = migrationStats.totalImmigrants || 0;
        const emigrants = migrationStats.totalEmigrants || 0;
        const netMigration = immigrants - emigrants;
        
        return {
            netMigration,
            percentChange: ((netMigration / totalPop) * 100).toFixed(2),
            wealthBrought: migrationStats.wealthBrought || 0,
            wealthLost: migrationStats.wealthLost || 0,
        };
    }, [population, migrationStats]);
    
    const handlePolicySelect = (policyId) => {
        setSelectedPolicy(policyId);
        if (onPolicyChange) {
            onPolicyChange(policyId);
        }
    };
    
    return (
        <div className="h-full flex flex-col bg-gray-900/50 rounded-lg">
            {/* 标题 */}
            <div className="p-3 border-b border-gray-700/50">
                <h3 className="text-lg font-medium text-gray-200 flex items-center gap-2">
                    <span>🌍</span>
                    <span>幸存者流动</span>
                </h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3 space-y-4">
                {/* 边境政策选择 */}
                <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">边境政策</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {Object.values(BORDER_POLICIES).map(policy => (
                            <BorderPolicyCard
                                key={policy.id}
                                policy={policy}
                                isSelected={selectedPolicy === policy.id}
                                onSelect={() => handlePolicySelect(policy.id)}
                            />
                        ))}
                    </div>
                </div>
                
                {/* 移民统计 */}
                <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">本月统计</h4>
                    <div className="grid grid-cols-2 gap-2">
                        <MigrationStatCard
                            title="移民流入"
                            value={migrationStats.totalImmigrants || 0}
                            icon="📥"
                            color="green"
                        />
                        <MigrationStatCard
                            title="移民流出"
                            value={migrationStats.totalEmigrants || 0}
                            icon="📤"
                            color="red"
                        />
                        <MigrationStatCard
                            title="净移民"
                            value={migrationImpact.netMigration}
                            icon="📊"
                            color={migrationImpact.netMigration >= 0 ? 'blue' : 'yellow'}
                        />
                        <MigrationStatCard
                            title="幸存者变化率"
                            value={`${migrationImpact.percentChange}%`}
                            icon="📈"
                            color="blue"
                        />
                    </div>
                </div>
                
                {/* 财富影响 */}
                <div className="bg-gray-800/30 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">经济影响</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="text-gray-400">移民带来财富</span>
                            <div className="text-green-400">
                                +{migrationImpact.wealthBrought.toLocaleString()} 银
                            </div>
                        </div>
                        <div>
                            <span className="text-gray-400">流失财富</span>
                            <div className="text-red-400">
                                -{migrationImpact.wealthLost.toLocaleString()} 银
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* 移民来源 */}
                <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">
                        移民来源 <span className="text-gray-500 font-normal">(本月)</span>
                    </h4>
                    <MigrationFlowList flows={recentFlows.inflows} type="in" />
                </div>
                
                {/* 移民去向 */}
                <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">
                        移民去向 <span className="text-gray-500 font-normal">(本月)</span>
                    </h4>
                    <MigrationFlowList flows={recentFlows.outflows} type="out" />
                </div>
            </div>
            
            {/* 政策效果说明 */}
            {selectedPolicy && (
                <div className="p-3 border-t border-gray-700/50 bg-gray-800/30">
                    <div className="text-xs text-gray-400">
                        当前政策效果: {BORDER_POLICIES[selectedPolicy]?.description}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MigrationPanel;
