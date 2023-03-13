import { Routes } from "@angular/router";
import { TestTwoComponent } from "./test-two/test-two.component";
import { TestComponent } from "./test/test.component";

export const TEST_ROUTES: Routes = [
    { path: 'test1', component: TestComponent},
    { path: 'test2', component: TestTwoComponent},
] 