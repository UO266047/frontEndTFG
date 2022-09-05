import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ruta} from "../model/ruta/ruta";
import {Empleado} from "../model/empleado/empleado";

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private backendURL: string="http://localhost:8095/";

  constructor(private httpClient:HttpClient) { }

  findAllEmpleados() {
    return this.httpClient.get<Empleado[]>(`${this.backendURL}`+"empleados");
  }

  findEmpleadoById(id:any){
    return this.httpClient.get<Empleado>(`${this.backendURL}`+"empleado/"+id);
  }

  addEmployee(empleado: Empleado) {
    return this.httpClient.post(`${this.backendURL}` + "empleados/addEmpleado/", empleado)

  }

  eliminarEmpleado(empleado: Empleado) {
     return this.httpClient.delete(`${this.backendURL}` + "empleados/eliminarEmpleado/"+empleado.id)
  }
}
