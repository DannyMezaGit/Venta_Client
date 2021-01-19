import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import { Response as response } from '../models/Response';
import { DialogClienteComponent } from "./dialog-cliente/dialog-cliente.component";
import { MatDialog } from "@angular/material/dialog";
import { Cliente } from './models/cliente';
import { DialogDeleteComponent } from '../common/delete/dialog-delete/dialog-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public lst: any[];
  public columnas: string[] = ['id', 'nombre', 'actions'];
  constructor(private apiCliente: ApiclienteService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar
              ) {  }

  ngOnInit(): void {
      this.getClientes();
  }

    getClientes() {
        this.apiCliente.getClientes().subscribe( response => {
        this.lst = response.data;
      });
    }

    openAdd(){
      const dialogRef = this.dialog.open(DialogClienteComponent, {
        width: '300'
      });

      dialogRef.afterClosed().subscribe(res => {
        this.getClientes();
      })
    }
    openEdit(cliente: Cliente){
      const dialogRef = this.dialog.open(DialogClienteComponent, {
        width: '300',
        data: cliente
      });

      dialogRef.afterClosed().subscribe(res => {
        this.getClientes();
      })
    }

    delete(cliente: Cliente){
      const dialogRef = this.dialog.open(DialogDeleteComponent, {
        width: '300'
      });

      dialogRef.afterClosed().subscribe(res => {
        if(res){
          this.apiCliente.deleteCliente(cliente.id).subscribe(res => {
            if(res.exito === 1){
              this.snackBar.open("Cliente eliminado con éxito", '', {
                duration: 2000
              });
              this.getClientes();
            }
          })
        }
      })
    }


}
