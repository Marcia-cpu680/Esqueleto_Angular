import { Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    {
        path:"contactate",
        component: ContactoComponent
    },
    {
        path:"inicio",
        component:InicioComponent
    },
    {
        path:"registrate",
        component:RegistroComponent
    }

        
];
