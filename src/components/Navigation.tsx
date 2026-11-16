import { LayoutDashboard, CheckSquare, Wallet, Settings2 } from 'lucide-react';
import type { Role } from '../types';
export type Page = 'overview' | 'tasks' | 'finance' | 'settings';
const items = [{id:'overview',label:'Overview',Icon:LayoutDashboard},{id:'tasks',label:'Tasks & habits',Icon:CheckSquare},{id:'finance',label:'Finance',Icon:Wallet},{id:'settings',label:'Settings',Icon:Settings2}] as const;
export default function Navigation({page,onChange,role}:{page:Page;onChange:(p:Page)=>void;role:Role}) {
 const visible=items.filter(item=>role==='admin'||item.id!=='settings');
 return <><aside className="sidebar"><div className="brand"><span className="brand-mark">✳</span><span>Aura<span className="gradient-text">Sync</span></span></div><div className="nav-label">WORKSPACE</div>{visible.map(({id,label,Icon})=><button key={id} onClick={()=>onChange(id)} className={`nav-item ${page===id?'active':''}`}><Icon size={18}/>{label}</button>)}<div className="sidebar-bottom"><div className="avatar">AS</div><div><strong>Your space</strong><small>{role==='admin'?'Administrator':'Member workspace'}</small></div></div></aside><nav className="mobile-nav">{visible.map(({id,label,Icon})=><button key={id} onClick={()=>onChange(id)} className={page===id?'active':''}><Icon size={19}/><span>{label.split(' ')[0]}</span></button>)}</nav></>;
}