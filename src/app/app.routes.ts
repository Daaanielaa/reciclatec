import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { InformacionComponent } from './informacion/informacion.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: '**', redirectTo: 'inicio' }
];
