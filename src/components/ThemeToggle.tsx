import { Moon, Sun, Zap } from 'lucide-react';
import type { Theme } from '../types';
const themes: {id:Theme;label:string;Icon:typeof Moon}[] = [{id:'midnight',label:'Midnight Aurora',Icon:Moon},{id:'primal',label:'Primal Glass',Icon:Sun},{id:'cyberpunk',label:'Cyberpunk Neon',Icon:Zap}];
export default function ThemeToggle({theme,onChange}:{theme:Theme;onChange:(t:Theme)=>void}) {
  return <div className="theme-options">{themes.map(({id,label,Icon})=><button key={id} onClick={()=>onChange(id)} className={`theme-option ${theme===id?'selected':''}`}><Icon size={17}/><span>{label}</span>{theme===id&&<span className="theme-check">✓</span>}</button>)}</div>;
}