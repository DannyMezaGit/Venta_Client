import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
              public snackBar: MatSnackBar          
              ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  addCliente() {
    
    const cliente: Cliente = {nombre: this.nombre};
    this.apiCliente.addCliente(cliente).subscribe(res => {
      
      if(res.exito === 1){
        this.dialogRef.close();
        this.snackBar.open('Cliente insertado con éxito', '', {duration: 2000});
      }
    })
  }

}
