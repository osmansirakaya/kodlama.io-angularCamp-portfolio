import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"resume", component:ResumeComponent},
  {path:"portfolio", component:PortfolioComponent},
  {path:"contact", component:ContactComponent},
  {path:"skills", component:SkillsComponent},




 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
