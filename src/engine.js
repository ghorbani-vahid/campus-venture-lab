export const defaults={budget:40,price:120,weights:[30,30,40]};
export const stages=[{name:'Concept',event:'The university wants evidence of demand before approving a prototype.',factor:0},{name:'Prototype',event:'A limited trial opens. Reliability and clear communication influence uptake.',factor:.4},{name:'Campus pilot',event:'The pilot expands. Your team must balance adoption, reliability and financial viability.',factor:1}];
export const initial=()=>({quality:20,adoption:10,cash:0,revenue:0,spent:0});
export function calculate(state,decision,round,rules=defaults){
 if(round<0||round>2||!Number.isInteger(round))throw Error('Invalid round');
 if(decision.length!==4||decision.some(x=>!Number.isFinite(x)||x<0)||decision.reduce((a,b)=>a+b,0)>rules.budget)throw Error('Allocation exceeds the round budget');
 const [discovery,development,testing,promotion]=decision,spent=decision.reduce((a,b)=>a+b,0);
 const quality=Math.min(100,state.quality+development*1.2+testing*1.6);
 const adoption=Math.min(100,state.adoption+discovery*1.5+promotion*1.1);
 const users=Math.round(1000*adoption/100*quality/100*stages[round].factor);
 const revenue=users*rules.price/1000;
 const totalSpent=state.spent+spent,totalRevenue=state.revenue+revenue;
 const returnScore=totalSpent?Math.min(100,Math.max(0,100*totalRevenue/totalSpent)):0;
 const sum=rules.weights.reduce((a,b)=>a+b,0);
 const score=(quality*rules.weights[0]+adoption*rules.weights[1]+returnScore*rules.weights[2])/sum;
 return {quality,adoption,users,revenue,spent:totalSpent,cash:state.cash+rules.budget-spent+revenue,totalRevenue,returnScore,score,round};
}
export const nextState=r=>({quality:r.quality,adoption:r.adoption,cash:r.cash,revenue:r.totalRevenue,spent:r.spent});
