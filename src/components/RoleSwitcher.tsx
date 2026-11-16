import { ShieldCheck, UserRound } from 'lucide-react';
import type { Role } from '../types';
export default function RoleSwitcher({role,onChange}:{role:Role;onChange:(r:Role)=>void}) {
  return <div className="role-switch"><button className={role==='admin'?'selected':''} onClick={()=>onChange('admin')}><ShieldCheck size={16}/> Admin</button><button className={role==='member'?'selected':''} onClick={()=>onChange('member')}><UserRound size={16}/> Member</button></div>;
}