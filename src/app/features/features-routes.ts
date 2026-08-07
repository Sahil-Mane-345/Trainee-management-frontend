import { Routes } from "@angular/router";

export const featureRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./dashboard/dashboard").then(d => d.Dashboard) 
    },
    {
        path: "trainee",
        loadChildren: () => import("./trainee/trainee-routes").then(t => t.traineeRoutes)
    }
]