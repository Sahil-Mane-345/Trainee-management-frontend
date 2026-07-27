import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./core/layout/layout/layout").then(m => m.Layout), 
        loadChildren: () => import("./features/features-routes").then(f => f.featureRoutes)
    },
    {
        path:"auth",
        loadChildren: () => import("./features/auth/auth.routes").then(m => m.authRoutes)
    }
];
