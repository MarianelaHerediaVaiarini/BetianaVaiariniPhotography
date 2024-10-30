import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { environment } from '../../../environment/environment';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  protected inputs = [
    {
      label: 'Nombre',
      value: '',
    },
    {
      label: 'Apellidos',
      value: '',
    },
    {
      label: 'Email',
      value: '',
    },
  ];
  protected message: string = '';
  protected alert?: any;

  sendEmail(form: any) {
    const formData = {
      from_name: form.value.Nombre,
      last_name: form.value.Apellidos,
      from_email: form.value.Email,
      message: this.message,
    };

    emailjs
      .send(
        environment.serviceId,
        environment.templateId,
        formData,
        environment.publicKey
      )
      .then(
        (response: any) => {
          this.alert = {
            type: 'success',
            mesage: '¡Mensaje enviado exitosamente!',
          };
          form.resetForm();
          this.message = '';
        },
        (err: any) => {
          console.log('FAILED...', err);
          this.alert = {
            type: 'error',
            message:
              'No se pudo enviar el mensaje, intentalo nuevamente más tarde.',
          };
        }
      );
  }

  setAlert() {
    setTimeout(() => {
      this.alert = undefined;
    }, 1500);
  }
}
