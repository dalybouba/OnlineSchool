import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserFilterPipe } from "./pipes/user-filter.pipe";


@NgModule({
    imports: [ RouterModule, CommonModule],
    declarations: [UserFilterPipe],
    exports: [UserFilterPipe],
    
})

export class SharedModule {}