import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home";
import { ProgramComponent } from "./programs/programs";
import { FaqComponent } from "./faq/faq";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "programs", component: ProgramComponent },
   { path: "faq", component: FaqComponent },
  { path: "**", redirectTo: "" }
];