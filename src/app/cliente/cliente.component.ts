import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import { Response as response } from '../models/Response';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public lst: any[];
  public columnas: string[] = ['id', 'nombre'];
  constructor(private apiCliente: ApiclienteService) {  }

  ngOnInit(): void {
      this.getClientes();
  }

    getClientes() {
        this.apiCliente.getClientes().subscribe( response => {
        this.lst = response.data;
      });

    }

}
