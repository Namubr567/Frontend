import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PlansComponent } from './plans/plans.component';
import { SignupComponent } from './signup/signup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import { PaymentComponent } from './payment/payment.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { DongleplansComponent } from './dongleplans/dongleplans.component';
import { LogoutComponent } from './logout/logout.component';
import { RechargedoneComponent } from './rechargedone/rechargedone.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { BilldetailsComponent } from './billdetails/billdetails.component';
import { ViewrechargehistoryComponent } from './viewrechargehistory/viewrechargehistory.component';
import { ComplainsinadminComponent } from './complainsinadmin/complainsinadmin.component';
import { ComplainsComponent } from './complains/complains.component';

const routes: Routes = [
  {path:'custform',component:CustomerformComponent},
  {path:'',component:CarouselComponent},
  {path:'aboutus',component:AboutusComponent},
 {path:'backtohome',component:CarouselComponent},
  {path:'plans',component:PlansComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userlogin',component:UserloginComponent},
 {path:'signup',component:SignupComponent},
 {path:'useraccount',component:UseraccountComponent},
  {path:'userlogin/:pid/view',component:ViewComponent},
  {path:'userlogin/:pid/update',component:UpdateComponent},
  {path:'login',component:IndexComponent},
  {path:'login/signuppage',component:SignupComponent},
  {path:'plans/prepaidplans',component:PrepaidplansComponent},
  {path:'plans/prepaidplans/chosen',component:PaymentComponent},
  {path:'plans/prepaidplans/chosen/:pid/view',component:PaymentComponent},
  {path:'plans/postpaidplans',component:PostpaidplansComponent},
  {path:'plans/postpaidplans/chosen/:pid/view',component:PaymentComponent},
  {path:'plans/dongleplans',component:DongleplansComponent},
  {path:'plans/dongleplans/chosen',component:PaymentComponent},
  {path:'plans/dongleplans/chosen/:pid/view',component:PaymentComponent},
  {path:'home/usefullink/aboutus', component:AboutusComponent},
  {path:'home/usefullink/services', component:PlansComponent},
  {path:'home/usefullink/contactus', component: CustomerformComponent},
  {path:'login/signup',component:SignupComponent},
  {path:'logout',component:LogoutComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'recharge',component:PlansComponent},
  {path:'userlanding',component:UserlandingComponent},
  {path:'userlogin/customerlogin/complain',component:ComplainsComponent},
  {path:'paymentcompleted',component:RechargedoneComponent},
  {path:'billdetails/:pid',component:BilldetailsComponent},
  {path:'login',component:AdminloginComponent},
  {path:'userrecharge/:pemail/view',component:ViewrechargehistoryComponent},
  {path:'complainsinadmin',component:ComplainsinadminComponent},
  {path:'adminaccount',component:AdminloginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
