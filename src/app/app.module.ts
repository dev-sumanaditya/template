import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CloseButtonComponent } from './components/close-button/close-button.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { Navbar1Component } from './components/navbar1/navbar1.component';
import { CoursesSectionComponent } from './components/courses-section/courses-section.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { CoursesComponent } from './pages/loggedin/courses/courses.component';
import { SettingsComponent } from './pages/loggedin/settings/settings.component';
import { BillingComponent } from './pages/loggedin/billing/billing.component';
import { CourseViewComponent } from './pages/loggedin/course-view/course-view.component';
import { CourseLibraryComponent } from './pages/loggedin/course-library/course-library.component';
import { LessonModalComponent } from './pages/loggedin/lesson-modal/lesson-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CloseButtonComponent,
    InputComponent,
    Navbar1Component,
    CoursesSectionComponent,
    Navbar2Component,
    CoursesComponent,
    SettingsComponent,
    BillingComponent,
    CourseViewComponent,
    CourseLibraryComponent,
    LessonModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
