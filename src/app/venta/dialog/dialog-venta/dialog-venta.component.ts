import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Concepto } from 'src/app/models/concepto';
import { Venta } from 'src/app/models/venta';
import { ApiVentaService } from 'src/app/services/api-venta.service';

@Component({
  selector: 'app-dialog-venta',
  templateUrl: './dialog-venta.component.html',
  styles: [
  ]
})
export class DialogVentaComponent implements OnInit {
  public venta: Venta;
  public conceptos: Concepto[];

  public conceptoForm = this.formBuilder.group({
    cantidad: [0, Validators.required],
    importe: [0, Validators.required],
    idProducto: [1, Validators.required]
  });


  constructor(public dialogRef: MatDialogRef<DialogVentaComponent>,
              public snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private _apiVentaService: ApiVentaService,

              
              ) { 
                this.conceptos = [];
                this.venta = {idCliente: 3, conceptos: []};

              }


  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  addConcepto() {
    this.conceptos.push(this.conceptoForm.value);
  }
  addVenta() {
    this.venta.conceptos = this.conceptos;
    this._apiVentaService.add(this.venta).subscribe( res => {
      
      if(res.exito === 1){
        this.dialogRef.close();
        this.snackBar.open('Venta realizada con éxito', '', { duration: 2000 });
      }
    });
  }
}
