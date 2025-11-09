import { Routes } from '@angular/router';
import { autenticacaoGuard } from './core/guards/autenticacao.guard';
import { FormLoginComponent } from './components/autenticacao/form-login/form-login.component';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import { DocumentsComponent } from './components/documents/documents.component';



export const routes: Routes = [
    { path: 'chat', component: ChatComponent },
    { path: 'login', component: FormLoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [autenticacaoGuard] },
    { path: 'up', component: DocumentsComponent, canActivate: [autenticacaoGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
   
];
