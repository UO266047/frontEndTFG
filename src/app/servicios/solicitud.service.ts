import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Solicitud} from "../model/solicitud/solicitud";
import {SolicitudIntercambio} from "../model/solicitud/solicituIntercambio";
import {SolicitudSimple} from "../model/solicitud/solicitudSimple";
import {SolicitudVacaciones} from "../model/solicitud/solicitudVacaciones";
import {Empleado} from "../model/empleado/empleado";


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private backendURL: string = "http://localhost:8095/";

  constructor(private httpClient: HttpClient) {

  }

  getAllSolicitudesPendientes(): Observable<Solicitud[]> {
    return this.httpClient.get<Solicitud[]>(`${this.backendURL}` + "solicitudes/ver-solicitudes-vacaciones/");
  }

  // findNotOwnSolicitudes(empleado: Empleado):Observable<SolicitudIntercambio[]> {
  //   return this.httpClient.put<SolicitudIntercambio[]>(`${this.backendURL}` + "solicitudes/find-others-solicitudes/" ,empleado);
  // }
  //
  // findOwnSolicitudes(id: bigint) {
  //   return this.httpClient.get<Solicitud[]>(`${this.backendURL}` + "solicitudes/find-own-solicitudes/" + id);
  // }

  aceptarSolicitud(solicitud:Solicitud) {
    return this.httpClient.put(`${this.backendURL}` + "solicitudes/aceptar-solicitud", solicitud)
  }

  rechazarSolicitud(id: bigint) {
    return this.httpClient.put(`${this.backendURL}` + "solicitudes/rechazar-solicitud", id)
  }

  // enviarSolicitud(solicitud: SolicitudSimple){
  //   return this.httpClient.post(`${this.backendURL}` + "jornada/enviar-solicitud/", solicitud)
  // }
  //
  // addSolicitudIntercambio(solicitudIntercambio: Solicitud): Observable<any> {
  //   return this.httpClient.post(`${this.backendURL}` + "jornada/solicitar-intercambio/", solicitudIntercambio)
  // }
  //
  //
  // reasignar(solicitud: SolicitudIntercambio) {
  //   return this.httpClient.put(`${this.backendURL}` + "jornada/reasignar", solicitud)
  // }


  // solicitarVacaciones(solicitud: SolicitudVacaciones){
  //   return this.httpClient.post(`${this.backendURL}` + "jornada/solicitar-vacaciones/", solicitud)
  // }

}
