import { Routes, RouterModule } from '@angular/router';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from '../services/guards/admin.guard';

const routesChild: Routes = [
    { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
    { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
    { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas - jsChart' } },
    { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
    { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RJXS' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
    { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del tema' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
    
    //mantenimientos
    { path: 'usuarios', canActivate: [AdminGuard],component: UsuariosComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
    { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
    { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Medicos' } },
    { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Datos Médico' } },

    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routesChild)],
    exports: [RouterModule]
})
export class ChildRoutesModule { }