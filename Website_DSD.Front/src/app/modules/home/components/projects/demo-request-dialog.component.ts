import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ContactService } from 'src/app/core/services/Contact/contact.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';
import { SweetAlertService } from 'src/app/core/services/SweetAlert/sweet-alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-request-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    TranslateModule,
    MatSnackBarModule,
    CommonModule
  ],

  template: `
 <div class="demo-dialog">

  <!-- HEADER -->
  <div class="card-header p-3 d-flex justify-content-between align-items-center">
    <h5 class="mb-0">
      {{ 'DEMO_REQUEST.TITLE' | translate }}
    </h5>

    <button type="button" class="btn-close btn-close-white" (click)="onCancel()"></button>
  </div>

  <!-- BODY -->
  <div class="p-4">

    <form [formGroup]="demoForm" dir="rtl">
<div class="form-control bg-light text-muted mb-3">
  {{ systemName }}
</div>
      <div class="mb-3">
      <label class="form-label">
  {{ 'DEMO_REQUEST.NAME' | translate }}
</label>

<input type="text"
       class="form-control"
       formControlName="name"
       [class.is-invalid]="formSubmitted && demoForm.get('name')?.invalid">

      </div>

      <div class="mb-3">
        <label class="form-label">{{ 'DEMO_REQUEST.EMAIL' | translate }}
       
        </label>
        <input type="email" class="form-control" formControlName="email"
        [class.is-invalid]="formSubmitted && demoForm.get('email')?.invalid"
        >
      </div>

      <div class="mb-3">
        <label class="form-label">{{ 'DEMO_REQUEST.COMPANY' | translate }}
      
        </label>
        <input type="text" class="form-control" formControlName="company"
        [class.is-invalid]="formSubmitted && demoForm.get('company')?.invalid"
        >
      </div>

      <div class="mb-3">
        <label class="form-label">{{ 'DEMO_REQUEST.PHONE' | translate }}
         <span *ngIf="formSubmitted && demoForm.get('phone')?.invalid" class="invalid-feedback">
                    <span class="text-danger mb-2" *ngIf="demoForm.get('phone')?.errors?.['required']">{{ "required" | translate }}</span>
                  </span>
        </label>
        <input type="text" class="form-control" formControlName="phone"
           [class.is-invalid]="formSubmitted && demoForm.get('phone')?.invalid"
        >
      </div>

      <div class="mb-3">
        <label class="form-label">{{ 'DEMO_REQUEST.MESSAGE' | translate }}</label>
        <textarea rows="3" class="form-control" formControlName="message"></textarea>
      </div>

      <!-- FOOTER -->
      <div class="d-flex justify-content-evenly gap-2 mt-4">

        <button type="button"
                class="btn btn-outline-purbale"
                
                (click)="onSubmit()">

            <i class="hgi hgi-stroke hgi-rounded hgi-sent"></i>
            {{ 'DEMO_REQUEST.SUBMIT' | translate }}

        

        </button>

        <button type="button"
                class="btn btn-outline-dangers"
                (click)="onCancel()">
          <i class="hgi hgi-stroke hgi-rounded hgi-cancel-circle"></i>
          {{ 'DEMO_REQUEST.CANCEL' | translate }}
        </button>

      </div>

    </form>

  </div>

</div>
  `
})
export class DemoRequestDialogComponent {

  demoForm: FormGroup;
  isLoading = false;
  formSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DemoRequestDialogComponent>,
    private _contactService: ContactService,
    private _sweetAlertService: SweetAlertService,
    private translate: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data: {
      project: any
    },
  ) {

    this.demoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      phone: ['', Validators.required],
      message: [''],
      project: [{ value: '', disabled: true }]
    });


  }



  get systemName(): string {
    return this.translate.currentLang === 'en'
      ? this.data.project?.titleEn
      : this.data.project?.titleAr;
  }
  async onSubmit() {
    this.formSubmitted = true;

    if (this.demoForm.invalid)
      return;

    this.isLoading = true;

    const body = {
      name: this.demoForm.get('name')?.value ?? '',
      email: this.demoForm.get('email')?.value ?? '',
      company: this.demoForm.get('company')?.value ?? '',
      phone: this.demoForm.get('phone')?.value ?? '',
      message: this.demoForm.get('message')?.value ?? '',
      project: this.systemName
    };

    try {
      const result: any = await this._contactService.AddContact(body);

      if (result?.success) {
        this.demoForm.reset();
        this.formSubmitted = false;

        this._sweetAlertService.AlertSuccess(
          this.translate.instant("Sent successfully")
        );

        this.dialogRef.close(result);
      } else {
        this._sweetAlertService.AlertError(
          this.translate.instant("Failed to send request")
        );
      }

    } catch (error) {
      console.error(error);
      this._sweetAlertService.AlertError(
        this.translate.instant("Failed to send request")
      );
    } finally {
      this.isLoading = false;
    }
  }

  onCancel(): void {
    if (!this.isLoading) {
      this.dialogRef.close();
    }
  }
}