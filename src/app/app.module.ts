import { IncattachmentService } from './providers/incattachment.service';
import { ClosedComponent } from './components/closed/closed.component';
import { CanceledComponent } from './components/canceled/canceled.component';
import { OnHoldComponent } from './components/on-hold/on-hold.component';
import { UserincidentlistService } from './providers/userincidentlist.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientJsonpModule } from '@angular/common/http';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import 'hammerjs/hammer';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { SparklineModule } from '@progress/kendo-angular-charts';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';
import { NewRegistrationComponent } from './components/new-registration/new-registration.component';
import { UserIncidentFormComponent } from './components/user-incident-form/user-incident-form.component';
import { UserIncidentlistComponent } from './components/user-incidentlist/user-incidentlist.component';
import { LoginComponent } from './components/login/login.component';
import { UserGroupComponent } from './components/user-group/user-group.component';
import { AdminOverviewComponent } from './components/admin-overview/admin-overview.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardMainBodyComponent } from './components/dashboard-main-body/dashboard-main-body.component';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { MainComponent } from './components/main/main.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
// import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { UploadModule } from '@progress/kendo-angular-upload';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ResolvedComponent } from './components/resolved/resolved.component';
import { AdminActiveComponent } from './components/admin-active/admin-active.component';
import { AdminAssignedComponent } from './components/admin-assigned/admin-assigned.component';
import { AdminUnassignedComponent } from './components/admin-unassigned/admin-unassigned.component';
// import { AdminResolvedComponent } from './components/admin-resolved/admin-resolved.component';
import { UserIncidentformReopenComponent } from './components/user-incidentform-reopen/user-incidentform-reopen.component';
import { OpenActiveComponent } from './components/open-active/open-active.component';
import { LocationserviceService } from './providers/locationservice.service';
import { UserIncidentFormService } from './providers/user-incident-form.service';
import { HttpXrsService } from './providers/http-xrs.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PopupModule } from '@progress/kendo-angular-popup';
import { AdminResolverComponent } from './components/admin-resolver/admin-resolver.component';
import { ProfilepicService } from './providers/profilepic.service';
import { EditServiceService } from './providers/edit-service.service';
import { AdminSubcategoriesComponent } from './components/admin-subcategories/admin-subcategories.component';
import { CategorysubcategoryService } from './providers/categorysubcategory.service';
import { AdminCountryComponent } from './components/admin-country/admin-country.component';
import { AdminStateComponent } from './components/admin-state/admin-state.component';
import { AdminCityComponent } from './components/admin-city/admin-city.component';
@NgModule({
  declarations: [
    UserProfileComponent,
    UserLoginComponent,
    NewRegistrationComponent,
    AppComponent,
    UserIncidentFormComponent,
    UserIncidentlistComponent,
    UserIncidentformReopenComponent,
    LoginComponent,
    UserGroupComponent,
    AdminOverviewComponent,
    DashboardHeaderComponent,
    DashboardMainBodyComponent,
    DashboardFooterComponent,
    MainComponent,
    UserRegistrationComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    // AdminMainComponent,
    
    AdminCategoriesComponent,
    AdminHomeComponent,
    ResolvedComponent,
    AdminActiveComponent,
    AdminAssignedComponent,
    AdminUnassignedComponent,
    OpenActiveComponent,
    UserLoginComponent,
    UserProfileComponent,
    AdminResolverComponent,
    AdminSubcategoriesComponent,
    OnHoldComponent,
    CanceledComponent,
    ClosedComponent,
   
    AdminCountryComponent,
    AdminStateComponent,
    AdminCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    ChartsModule,
    SparklineModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    GridModule,
    DropDownsModule,
    PopupModule,
    HttpClientJsonpModule,
    UploadModule
    
  ],
  providers: [UserIncidentFormService,
    HttpXrsService,
    UserIncidentFormService,
    ProfilepicService,
    ProfilepicService,
    EditServiceService,
    LocationserviceService,
    IncattachmentService,
    CategorysubcategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }


