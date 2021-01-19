import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiclienteService } from 'src/app/services/apicliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-dialog-cliente',
  templateUrl: './dialog-cliente.component.html',
  styleUrls: ['./dialog-cliente.component.css']
})
export class DialogClienteComponent implements OnInit {

  public nombre: string;

  constructor(public dialogRef: MatDialogRef<DialogClienteComponent>,
              public apiCliente: ApiclienteService,
              public snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public cliente: Cliente        
              ) { 
                if(this.cliente !== null) {
                  this.nombre = cliente.nombre;
                }
              }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

 

  editCliente() {
    
    const cliente: Cliente = {nombre: this.nombre, id: this.cliente.id};
    this.apiCliente.editCliente(cliente).subscribe(res => {
      
      if(res.exito === 1){
        this.dialogRef.close();
        this.snackBar.open('Cliente editado con éxito', '', {duration: 2000});
      }
    })
  }
  addCliente() {
    
    const cliente: Cliente = {nombre: this.nombre, id: 0};
    this.apiCliente.addCliente(cliente).subscribe(res => {
      
      if(res.exito === 1){
        this.dialogRef.close();
        this.snackBar.open('Cliente insertado con éxito', '', {duration: 2000});
      }
    })
  }

}
