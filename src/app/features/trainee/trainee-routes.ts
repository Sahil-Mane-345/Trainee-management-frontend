import { Routes } from "@angular/router";

export const traineeRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./trainee-list/trainee-list").then(t => t.TraineeList)
    },
    {
        path: "create",
        loadComponent: () => import("./trainee-create/trainee-create").then(t => t.TraineeCreate)
    }
]